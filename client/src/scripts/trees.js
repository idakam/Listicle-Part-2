const searchBar = document.getElementById("searchBar");
let data = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredData = data.filter((tree) => {
    return (
      tree.name.toLowerCase().includes(searchString) ||
      tree.latinname.toLowerCase().includes(searchString)
    );
  });
  renderTrees(filteredData);
});

const loadTrees = async () => {
  const response = await fetch("/trees");
  data = await response.json();
  renderTrees(data);
};

const renderTrees = (trees) => {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = "";
  console.log("trees", trees);
  if (trees) {
    trees.map((tree) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");
      topContainer.style.backgroundImage = `url(${tree.image})`;

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      const treeTitle = document.createElement("h3");
      treeTitle.textContent = `${tree.name}`;
      bottomContainer.appendChild(treeTitle);

      const latinName = document.createElement("p");
      latinName.textContent = `(${tree.latinname})`;
      bottomContainer.appendChild(latinName);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/trees/${tree.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.textContent = "No Trees Available";
    mainContent.appendChild(message);
  }
};

const requestedURL = window.location.href.split("/").pop();

if (requestedURL) {
  window.location.href = "../404.html";
} else {
  loadTrees();
}
