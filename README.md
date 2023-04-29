<p align="center">
  <img src=".assets/logo.png" alt="Logo of library qwik-ionicons" width="500">
</p>
<hr>

<p align="center">
  <a href="https://www.npmjs.com/package/qwik-ionicons">
    <img alt="npm" src="https://img.shields.io/npm/v/qwik-ionicons?color=%23e62770&label=NPM">
  </a>
  <img alt="Status = BETA" src="https://img.shields.io/badge/Status-BETA-orange">
</p>

# ⚡️ Ionicons for Qwik

1. Are you using the [Qwik framework 🔗](https://qwik.builder.io/)?
2. Do you want to use [Ionicons 🔗](https://ionic.io/ionicons)?
3. Would you like to have **full control over** the icon **SVGs** in JSX?

_**Then this library is perfect for you!**_

# 📖 Table of contents

<!-- TOC -->
* [⚡️ Ionicons for Qwik](#-ionicons-for-qwik)
* [📖 Table of contents](#-table-of-contents)
* [⚒️ Installation](#-installation)
* [🐣 Icon search](#-icon-search)
* [🍽️ Usage](#-usage)
* [⚙️ Props](#-props)
* [🌈 Colours](#-colours)
* [🏎️ SVG/HTML footprint](#-svghtml-footprint)
* [❤️ Kudos](#-kudos)
* [🩹 Problems?](#-problems)
* [🦔 Author](#-author)
<!-- TOC -->

# ⚒️ Installation
NPM:
```bash
npm add qwik-ionicons
```

Yarn:
```bash
yarn add qwik-ionicons
```

# 🐣 Icon search
You need an icon? Go to:

[➡️ Ionicons + Search 🔎](https://ionic.io/ionicons)

Pick an icon and remember its name.

An example (remember the marked name):
![Ionicons website, icon search](.assets/ionicons-search.png)

# 🍽️ Usage
You found an icon and have its name? Perfect! 🎉

Rewrite the name using **Pascal Case**. So `flash-outline` becomes `FlashOutline`.

Now you can import `FlashOutline` straight from the library:
```ts
import { FlashOutline } from "qwik-ionicons";
```

Here is an example component:
```tsx
import { FlashOutline } from "qwik-ionicons";

export default component$(() => {
    return <FlashOutline width="64" data-test="flash-icon" />
})
```

# ⚙️ Props
The following
attributes are typed:
- `id: string`
- `class: string`
- `width: string`
- `height: string`
- `style: { /* CSS style object */ }`

All other props are passed as well! You could, for example, pass test IDs like so:

```tsx
export default component$(() => {
    return <FlashOutline width="64" data-test="flash-icon" />
})
```

# 🌈 Styling
All SVGs will have the class `ionicon`. This allows you to define global default styles
for all ionicons using CSS.

## 📏 Size
You can use CSS class styles or inline CSS style to set the size per Icon.

If you need a default size for all ionicons, make use of the class `ionicon`.

## 🎨 Color
All SVGs make use of the `currentColor` property. By default, the icons
will use the same color as the current text color. To adjust an icon's color,
you just need to change the text color (CSS attribute `color`).

For that, you can use:
- CSS classes,
- inline style,
- Tailwind classes,
- ... or whatever you like :)

# 🏎️ SVG/HTML footprint
The library is constructed using Qwik's `component$` method.

**Every single icon variant is one component.**

This means:
- You make use of Qwik's usual JS optimization feature.
- Only the icons you use are ever imported/loaded.
- The server pre-renders initially visible icons.

# ❤️ Kudos

1. Big Kudos to the Ionic-Team for creating the awesome Ionicons collection! ❤️
2. Thanks dear Qwik-Team for making it so simple to create a Qwik component library! ❤️

# 🩹 Problems?

Feel free to create a GitHub issue. Thanks for reporting any problems! ☺️

# 🦔 Author
<p align="center">
  <b>Peter Kuhmann</b>
  <br>
  <br>
  <a href="https://github.com/peter-kuhmann">GitHub</a>
  <br>
  <a href="mailto:info@peter-kuhmann.de">info@peter-kuhmann.de</a>
  <br>
  <br>
  <img src=".assets/peter-kuhmann-logo.webp" alt="Peter Kuhmann logo" width="300">
</p>