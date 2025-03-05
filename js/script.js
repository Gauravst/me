const projectData = [
  {
    id: 0,
    name: "Sync Talk",
    description:
      "Real-Time Chat App Using Golang with WebSocket (Frontend - React, Shadcn Ui)",
    liveLink: "",
    githubLink: "#",
    imageLink: "./media/sync-talk.webp",
  },
  {
    id: 1,
    name: "Go Shorty",
    description:
      "A URL shortener built with GoLang in Backend and React in Frontend.",
    liveLink: "https://go-shorty.gauravst.in",
    githubLink: "https://github.com/Gauravst/go-shorty",
    imageLink: "./media/go-shorty.webp",
  },
  {
    id: 2,
    name: "Go Backend Template (API)",
    description:
      "A Production Ready Go Backend API Template designed to kickstart your next project.",
    liveLink: "https://github.com/Gauravst/go-api-template",
    githubLink: "https://github.com/Gauravst/go-api-template",
    imageLink: "./media/go-api-temp.webp",
  },
  {
    id: 3,
    name: "D-Upload",
    description:
      "A cloud file storage application using Node.js & React, utilizing Discord as storage (currently in development).",
    liveLink: "#",
    githubLink: "#",
    imageLink: "./media/coming.png",
  },
  {
    id: 4,
    name: "Tweet Canvas",
    description:
      "Transform Tweets into Stunning Images (Currently in Development)",
    liveLink: "#",
    githubLink: "#",
    imageLink: "./media/coming.png",
  },
  {
    id: 5,
    name: "Credentia",
    description:
      "A Job searching and posting platform built with Next.js and PostgreSQL (Currently in Development)",
    liveLink: "#",
    githubLink: "#",
    imageLink: "./media/coming.png",
  },
];

const hanldeImageClick = () => {
  const previewCard = document.querySelector(".imagePreview");
  previewCard.classList.remove(".imagePreview");
  previewCard.classList.add(".imagePreviewShow");
};

const projectGrid = document.querySelector(".projects-grid");

projectData.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `
    <div class="imagePreview">
      <img src="${project.imageLink}" alt="${project.name}" />
    </div>
    <div class="project-image" onClick={hanldeImageClick}>
      <img src="${project.imageLink}" alt="${project.name}" />
    </div>
    <div class="project-content">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="project-links">
        <a href="${project.liveLink}" class="project-link" target="_blank">Live</a>
        <a href="${project.githubLink}" class="project-link" target="_blank">GitHub</a>
      </div>
    </div>
  `;

  projectGrid.appendChild(projectCard);
});
