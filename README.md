# INTERACTIVE LAB Interactive Lab

A compact, English-language interactive web experience featuring two modules:
- **Logic Chamber:** three short challenges covering pattern recognition, conditional logic and algorithmic sequencing.
- **Data Universe:** an illustrative operational simulation with adjustable parameters, live metrics and a Chart.js visualization.

## Run locally

No build tools or package installation are required.

1. Download and extract the project.
2. Open the project folder in Visual Studio Code (recommended).
3. Start a local static server. With the VS Code **Live Server** extension, right-click `index.html` and choose **Open with Live Server**.
4. Alternatively, if Python is installed, run this command from the project folder:

   ```bash
   python -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

Opening `index.html` directly may work, but a local server is recommended for consistent browser behavior.

## Test checklist

- Open both modules from the landing page.
- Complete all three Logic Chamber challenges; verify the final score and restart button.
- In Data Universe, move each slider and confirm the metrics and chart update.
- Reset the Data Universe controls.
- Close the dialog using the close button, clicking the backdrop, and pressing Escape.
- Test at a narrow mobile viewport.

## Personalize before publishing

Open `js/app.js` and update:

```js
const PROFILE = {
  github: "https://github.com/YOUR_USERNAME",
  email: "YOUR_EMAIL@example.com"
};
```

Use your actual GitHub profile and a professional contact email. You can also edit the page title, closing copy and footer in `index.html`.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `nexus-interactive-lab`.
2. Upload the contents of this folder to the repository root (so `index.html` is at the root).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish and open the generated URL.
7. Test the published URL on a phone before generating the QR code.

## Technical notes

- The project uses vanilla JavaScript and separates the application shell from each interactive module.
- Data Universe loads Chart.js from jsDelivr. An internet connection is required for the chart library; the metrics still update in the browser.
- The simulation uses synthetic, illustrative values. It does not represent real company or customer data.
- No personal data is collected and no backend is required.
- The Google Fonts and Chart.js CDN references can be replaced with local assets if a fully offline build is needed.

## Suggested next improvements

1. Add keyboard focus management and a more complete accessible dialog pattern.
2. Add a short completion summary and optional progress persistence.
3. Add automated tests for the challenge logic and calculation model.
4. Add a small technical "How it works" panel to make the implementation decisions visible to reviewers.


## Epicor-inspired styling

The interface uses a deep blue/teal palette with mint accents, taking broad visual cues from Epicor's public brand presence. This is an independent portfolio exercise and is not an official Epicor product, does not represent the company, and is not endorsed by Epicor.

The Epicor wordmark is loaded from Wikimedia Commons:
- File: `Epicor-logo.svg`
- Original author/source identified by Commons: Epicor
- File page: https://commons.wikimedia.org/wiki/File:Epicor-logo.svg
- Original source cited there: https://www.epicor.com/globalassets/uploadedimages/shared/epicor-logo.svg

The logo is used only to identify the company this personal demo is tailored toward. Epicor's name and logo remain trademarks of their respective owner. If you prefer not to use a third-party hosted logo, replace the `<img>` source in `index.html` with an asset supplied by Epicor or remove it.

## Source code viewer

The page includes a read-only source explorer. It fetches `app.js`, `logic-chamber.js`, `data-universe.js`, `index.html` and `style.css` from the same origin and renders them with `textContent`, so the code is displayed as text and is not executed by the viewer. It requires a local HTTP server or GitHub Pages; it will not work reliably when opening the HTML file directly from the filesystem.


## Technical Breakdown section

The landing page includes a Technical Breakdown section with four expandable cards: (1) Logic Chamber challenge engine and state flow, (2) Data Universe input-to-metric calculation flow, (3) application file structure and separation of concerns, and (4) engineering principles, scope and limitations. The section documents the current implementation and distinguishes synthetic simulation values from real operational data.


## Personal contact links
- GitHub: https://github.com/luydominguez05-ui
- Email: lucydominguezperales@icloud.com

These details are configured in `js/app.js`.

## Source viewer troubleshooting
The source viewer uses `fetch()` to load the real source files. Browsers block this when `index.html` is opened directly from the filesystem (`file://`). Use VS Code Live Server, run `python -m http.server 8000` from this folder, or publish the site through GitHub Pages. File paths are resolved relative to the page URL, including GitHub Pages project sites.

## Upload to GitHub and publish
1. Extract this ZIP.
2. Go to https://github.com/luydominguez05-ui and create a new **public** repository named `interactive-lab`.
3. Create it empty (do not add a README or other starter files).
4. Open the extracted project folder. Upload the *contents* of the folder (`index.html`, `README.md`, `assets`, `css`, `js`) to the repository root using **Add file → Upload files**.
5. Commit the upload to the `main` branch.
6. Go to **Settings → Pages**.
7. Under **Build and deployment**, select **Deploy from a branch**, branch `main`, folder `/(root)`, then save.
8. After deployment, test: `https://luydominguez05-ui.github.io/interactive-lab/`.
9. If you name the repository differently, replace `interactive-lab` in the URL with that repository name.


## Source viewer: offline-safe implementation

The source viewer now reads source snapshots embedded in `index.html` rather than calling `fetch()`. This avoids browser restrictions that can block local `file://` previews and prevents relative-path errors on GitHub Pages. Source is rendered through `textContent` and is never executed by the viewer.

When you edit a source file and want the preview to show the updated version, regenerate the embedded source data in `index.html` (or ask me to package a refreshed build). The source files themselves remain the editable originals in `js/` and `css/`.

The GitHub buttons currently link to the supplied GitHub profile (`https://github.com/luydominguez05-ui`), which is valid even before you create a specific repository. After creating the portfolio repository, you can change the buttons to that repository's URL.
