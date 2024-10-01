const renderTree = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/trees");

  const data = await response.json();

  const treeContent = document.getElementById("tree-content");

  let tree;

  if (data) {
    tree = data.find((tree) => tree.id === requestedID);
    console.log(tree);
    if (tree) {
      document.getElementById("name").textContent = tree.name;

      document.getElementById("image").src = tree.image;
      document.getElementById("latinName").textontent =
        "Latin Name: " + tree.latinname;
      document.getElementById("description").textContent = tree.description;
      document.getElementById("height").textContent =
        "Height: " + tree.height + " feet";
      document.getElementById("trunkDiameter").textContent =
        "Trunk Diameter: " + tree.trunkdiameter + " inches";
      document.getElementById("canopySpread").textContent =
        "Average Canopy Spread: " + tree.canopyspread + " feet";
      document.getElementById("AFAPoints").textContent =
        "AFA Points: " + tree.afapoints;

      document.getElementById("location").textContent =
        "Location: " + tree.location;
    }
  }
};

renderTree();
