const gridContainer = document.querySelector('.js-grid-container');
const resizeGridButton = document.querySelector('.js-resize-canvas');

function createGrid(sideLength = 16) {
  //delete current grid
  let child = gridContainer.lastElementChild;
  while (child) {
    gridContainer.removeChild(child);
    child = gridContainer.lastChild;
  }

  //change number of grid columns to be equal to the sideLength
  gridContainer.style.cssText = `grid-template-columns: repeat(${sideLength}, 1fr)`;
  //create grid
  for (let i = 0; i < sideLength * sideLength; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-item');
    gridContainer.appendChild(newDiv);
  }
}

function getGridLength(defaultGridSize = 16) {
  const userChoice = prompt('enter size of new grid', defaultGridSize);
  if (userChoice >= 8 && userChoice <= 64) {
    return userChoice;
  }
  return defaultGridSize;
}

function resizeGrid() {
  const sideLength = getGridLength();
  createGrid(sideLength);
}

function changeDrawingColor() {}

gridContainer.addEventListener('mousedown', function (e) {
  e.target.classList.toggle('brush-color');
});
resizeGridButton.addEventListener('click', function (e) {
  resizeGrid();
  console.log(`yo ${e.target}`);
});

createGrid();
