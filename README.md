# Academic Homepage for GitHub Pages

This is a clean static academic homepage. It has no build step and can be hosted directly with GitHub Pages.

## Quick Start

1. Rename the text in `index.html` from placeholder information to your real profile.
2. Update research themes, publications, and news in `site-data.js`.
3. Replace `assets/profile-placeholder.svg` with a professional photo, keeping the filename or updating the `img` path in `index.html`.
4. Add your CV PDF and point the CV button to that file.
5. Push the folder contents to a GitHub repository.

## GitHub Pages Deployment

Create a GitHub repository named:

```text
xinshuzou.github.io
```

Then place these files at the repository root and push to the `main` branch. GitHub Pages will serve the site at:

```text
https://xinshuzou.github.io
```

For a project site, push these files to any repository and enable Pages from:

```text
Settings -> Pages -> Deploy from a branch -> main / root
```

## Editing Updates

Add short updates in `site-data.js`:

```js
{
  date: "2026-06-18",
  text: "Presented our work at a workshop."
}
```

Keep the newest item first.
