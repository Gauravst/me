/* shared by the homepage links section and the /links page */

const linkData = [
  {
    title: "Express JS Backend Template",
    note: "javascript",
    url: "https://github.com/Gauravst/express-template",
    external: true
  },
  {
    title: "Express JS Backend Template",
    note: "typescript",
    url: "https://github.com/Gauravst/express-template-ts",
    external: true
  },
  {
    title: "Golang Backend Template",
    note: "go",
    url: "https://github.com/Gauravst/go-api-template",
    external: true
  },
  {
    title: "Git Workflow",
    note: "notes",
    url: "/git-workflow",
    external: false
  }
];

function renderLink(item) {
  const li = document.createElement("li");
  li.className = "link-item";

  const a = document.createElement("a");
  a.href = item.url;
  a.className = "link-title";
  a.textContent = item.title;
  if (item.external) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }

  const note = document.createElement("span");
  note.className = "link-note";
  note.textContent = item.note;

  li.append(a, note);
  return li;
}

const linksContainer = document.getElementById("links-container");
if (linksContainer) {
  const frag = document.createDocumentFragment();
  linkData.forEach((item) => frag.appendChild(renderLink(item)));
  linksContainer.appendChild(frag);
}
