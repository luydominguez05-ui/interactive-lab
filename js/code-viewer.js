/* READ-ONLY SOURCE VIEWER
 * Source snapshots are embedded in index.html, so this viewer works on GitHub
 * Pages and local previews without fetch(), CORS, or relative-path dependencies.
 * textContent ensures source is displayed as text and never executed.
 */
(() => {
  const codeNode = document.getElementById("code-source");
  const fileNameNode = document.getElementById("code-filename");
  const languageNode = document.getElementById("code-language");
  const tabs = [...document.querySelectorAll(".code-tab")];
  const dataNode = document.getElementById("embedded-source-files");

  const labels = {
    app: ["js/app.js", "JAVASCRIPT · SOURCE"],
    logic: ["js/logic-chamber.js", "JAVASCRIPT · SOURCE"],
    data: ["js/data-universe.js", "JAVASCRIPT · SOURCE"],
    html: ["index.html", "HTML · SOURCE"],
    css: ["css/style.css", "CSS · SOURCE"]
  };

  let sources = {};
  try {
    sources = JSON.parse(dataNode.textContent);
  } catch (error) {
    codeNode.textContent = "The embedded source preview could not be read.";
    return;
  }

  function displayFile(key) {
    const entry = sources[key];
    const label = labels[key];
    if (!entry || !label) return;

    tabs.forEach(tab => {
      const active = tab.dataset.file === key;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    fileNameNode.textContent = entry[0] || label[0];
    languageNode.textContent = label[1];
    codeNode.textContent = entry[1] || "Source file is unavailable in this build.";
  }

  tabs.forEach(tab => tab.addEventListener("click", () => displayFile(tab.dataset.file)));
  displayFile("app");
})();
