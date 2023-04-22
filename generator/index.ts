// Really scrappy script

import axios, {AxiosResponse} from "axios";
import * as fs from "fs";
import * as unzipper from "unzipper";
import {rimraf} from "rimraf";
import {exec} from "child_process";

const DESIGNER_PACK_URL = "https://ionic.io/ionicons/ionicons.designerpack.zip"
const DESIGNER_PACK_OUT_FILE = ".ionicons-designerpack.zip"
const DESIGNER_PACK_EXTRACT_DIR = ".ionicons-designerpack"

const LIBRARY_DIR = "../library"
const COMPONENTS_DIR = LIBRARY_DIR + "/src/icons"


async function downloadDesignerPack() {
    return axios({
        url: DESIGNER_PACK_URL,
        responseType: 'stream'
    }).then((response: AxiosResponse) => {
        const stream = response.data.pipe(fs.createWriteStream(DESIGNER_PACK_OUT_FILE));

        return new Promise<void>((resolve, reject) => {
            stream.on('finish', () => {
                fs.createReadStream(DESIGNER_PACK_OUT_FILE)
                    .pipe(unzipper.Extract({ path: DESIGNER_PACK_EXTRACT_DIR }))
                    .on('close', () => {
                        resolve()
                    }).on("error", (error) => {
                        reject(error)
                    })
            })
        })
    })
}

async function generateComponents() {
    console.log("\t- Retrieving list of SVGs...")
    const svgFiles = fs.readdirSync(DESIGNER_PACK_EXTRACT_DIR)
    console.log(`\t  > Found ${svgFiles.length} SVG files.`)

    console.log("\t- Cleaning components directory ...")
    await rimraf(COMPONENTS_DIR)
    fs.mkdirSync(COMPONENTS_DIR)
    console.log("\t  > Done")

    console.log("\t- Generating components ...")
    const components : {name: string, file: string}[] = []
    for ( const svgFile of svgFiles ) {
        const componentName = svgFile.replace(/\.svg$/, "")
            .split("-")
            .map(part => {
                if ( part.length === 0 ) return ""
                if ( part.length === 1) return part.toUpperCase()
                return part.substring(0, 1).toUpperCase() + part.substring(1)
            })
            .join("");
        const componentFileName = componentName + ".tsx";

        const rawSvg = fs.readFileSync(DESIGNER_PACK_EXTRACT_DIR + "/" + svgFile, {encoding: "utf-8"})
        const parsedSvg = /(<svg(.|\n|\r)*<\/svg>)/.exec(rawSvg)
        if ( !parsedSvg ) throw Error(`Could not parse ${svgFile}`)
        const cleanedSvg = parsedSvg[1].replace('width="512"', "")
            .replace('height="512"', "")

        const svgWithSpreadedProps = cleanedSvg.replace(/^<svg\s/, "<svg {...props} ")
        const content = `import { IoniconProps } from "../types/types";
import { component$ } from "@builder.io/qwik";

export const ${componentName} = component$<IoniconProps>((props) => {
  return ${svgWithSpreadedProps};
});
`

        fs.writeFileSync(COMPONENTS_DIR + "/" + componentFileName, content, {encoding: "utf-8"})

        components.push({
            name: componentName,
            file: componentFileName
        })
    }
    console.log("\t  > Done")

    console.log("\t- Creating index.ts ...")
    let indexTsContent = ""
    for ( const component of components ) {
        indexTsContent += `export * from "./${component.name}"\n`
    }
    fs.writeFileSync(COMPONENTS_DIR + "/index.ts", indexTsContent, {encoding: "utf-8"})
    console.log("\t  > Done")
}

async function formatCode() {
    return new Promise<void>((resolve, reject) => {
        exec('yarn lint:fix', { cwd: LIBRARY_DIR }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing yarn format: ${error}`);
                reject(error)
                return;
            }
            console.log(stdout);
            resolve()
        });
    })

}

;(async function () {
    console.log("[1] Downloading Ionicons designer pack ...")
    await downloadDesignerPack()
    console.log("[√] Done\n")

    console.log("[2] Generating Qwik components ...")
    await generateComponents()
    console.log("[√] Done\n")

    console.log("[3] Formatting code ...")
    await formatCode()
    console.log("[√] Done\n")
})();