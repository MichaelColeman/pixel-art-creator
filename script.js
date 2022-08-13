function createGrid(sideLength) {
  //find grid container
  let gridContainer = document.getElementById('gridContainer');
  //create grid
  for (let i = 0; i < (sideLength*sideLength); i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("gridItem");
    gridContainer.appendChild(newDiv);
  }
}

createGrid(16);