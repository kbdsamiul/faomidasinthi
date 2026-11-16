# Faomida Sinthi, personal website

A one-page academic portfolio. Plain HTML, CSS and JavaScript, so there is nothing to install or build.

## Files

| File | What it holds |
|---|---|
| `index.html` | All page text: hero, about, research interests, education, awards, talks, skills, contact |
| `js/main.js` | The publication list (top of the file) and the animation code (below it) |
| `css/style.css` | Design. Colours and fonts are set in the first block (`:root`) |
| `assets/portrait.webp` | Hero photo with a transparent background |
| `assets/favicon.svg` | Browser tab icon |

## Publish on GitHub Pages

1. Sign in to GitHub and create a new public repository named `USERNAME.github.io` (use your own GitHub username).
2. Open the repository, choose **Add file → Upload files**, and drag in everything from this folder: `index.html`, `README.md`, and the `css`, `js` and `assets` folders. Keep the folder structure.
3. Click **Commit changes**.
4. Open **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then save.
5. After a minute or two the site is live at `https://USERNAME.github.io`.

## Edit on GitHub

Open a file in the repository, click the pencil icon, make the change and commit. The live site updates in about a minute.

- **Add a publication:** open `js/main.js`, copy one `{ ... }` block in the `PUBLICATIONS` list, and change the details. Set `type` to `article`, `review` or `chapter`. Add `impact: "6.2"` for a journal with an impact factor, or leave it out. Wrap species names in `<i>...</i>`. The tab counts update on their own.
- **Update the numbers under the hero:** in `index.html`, find the `stats` section and change both `data-count="5"` and the number inside the tag.
- **Change text:** edit the matching section in `index.html`. Each section starts with a comment such as `<!-- ============ 01 ABOUT ============ -->`.
- **Replace the photo:** upload a new image to `assets/` with the name `portrait.webp`. A cut-out with a transparent background and a 3:4 shape works best.
- **Change colours:** edit `--green`, `--leaf`, `--gold` and `--paper` at the top of `css/style.css`.

## After editing the CSS or JavaScript

Browsers keep old copies of `css/style.css` and `js/main.js`. After changing either file, open `index.html` and raise the number at the end of its link by one, for example `css/style.css?v=2` to `css/style.css?v=3`. Visitors then get the new file straight away.

## Add a "Download CV" button

1. Upload the CV to `assets/` as `Faomida_Sinthi_CV.pdf`. Remove the phone number, room address and referees' contact details first, because the file will be public.
2. In `index.html`, find `<a class="btn reveal" href="#contact">` in the About section and add this line after it:

```html
<a class="btn reveal" href="assets/Faomida_Sinthi_CV.pdf" download>Download CV</a>
```
