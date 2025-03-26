const mainDiv = document.querySelector(".mainUl");

const data = [
  {
    title: "Express JS Backend Template",
    url: "https://github.com/Gauravst/express-template",
  },
  {
    title: "Express JS Backend Template (TypeScript)",
    url: "https://github.com/Gauravst/express-template-ts",
  },
  {
    title: "Golang Backend Template",
    url: "https://github.com/Gauravst/go-api-template",
  },
  {
    title: "Git Workflow",
    url: "/git-workflow",
  },
];

data.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = item.url;
  a.target = "_blank";
  a.textContent = item.title;

  li.appendChild(a);
  mainDiv.appendChild(li);
});
