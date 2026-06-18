# Academic Homepage for GitHub Pages

This is a clean static academic homepage. It has no build step and can be hosted directly with GitHub Pages.

## Quick Start

1. Edit `index.html` for profile text, contact links, and affiliation details.
2. Edit `site-data.js` for research themes, publications, and news.
3. Replace `assets/profile-placeholder.svg` with a professional photo, keeping the filename or updating the `img` path in `index.html`.
4. Add a public CV PDF only after removing private details such as phone number and home address.
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
