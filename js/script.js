const projects = [
  {
    name: "Sync Talk",
    description: "realtime chat over websockets.",
    stack: "go / websocket / react",
    live: "https://sync-talk.gauravst.in",
    repo: "https://github.com/Gauravst/sync-talk"
  },
  {
    name: "D-Upload",
    description: "file storage that uses discord as the backend.",
    stack: "node.js / react / discord api",
    live: null,
    repo: "https://github.com/Gauravst/dUpload"
  },
  {
    name: "EDS",
    description: "chrome extension that backs up excalidraw drawings to github.",
    stack: "javascript / chrome api / github api",
    live: null,
    repo: "https://github.com/Gauravst/EDS"
  }
];

function external(href) {
  const a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

function render(project) {
  const li = document.createElement("li");
  li.className = "item";

  const head = document.createElement("div");
  head.className = "item-head";

  const name = document.createElement("h3");
  name.className = "item-name";

  if (project.repo) {
    const link = external(project.repo);
    link.textContent = project.name;
    name.appendChild(link);
  } else {
    name.textContent = project.name;
  }
  head.appendChild(name);

  if (project.state) {
    const state = document.createElement("span");
    state.className = "item-state";
    state.textContent = project.state;
    head.appendChild(state);
  }

  if (project.live) {
    const live = external(project.live);
    live.className = "item-live";
    live.textContent = "live";
    live.setAttribute("aria-label", `${project.name}, open live site`);
    head.appendChild(live);
  }

  const desc = document.createElement("p");
  desc.className = "item-desc";
  desc.textContent = project.description;

  const stack = document.createElement("p");
  stack.className = "item-stack";
  stack.textContent = project.stack;

  li.append(head, desc, stack);
  return li;
}

const manifest = document.getElementById("manifest");
if (manifest) {
  const frag = document.createDocumentFragment();
  projects.forEach((p) => frag.appendChild(render(p)));
  manifest.appendChild(frag);
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
