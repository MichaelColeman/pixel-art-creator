function createGrid(sideLength) {
  //find grid container
  let gridContainer = document.querySelector('.js-grid-container');

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

function getGridLength() {
  const userChoice = prompt('enter size of new grid');
  return userChoice;
}

function resizeGrid() {
  const sideLength = getGridLength();
  createGrid(sideLength);
}

const resizeGridButton = document.querySelector('.js-resize-canvas');
resizeGridButton.addEventListener('click', function (e) {
  resizeGrid();
  console.log(`yo ${e.target}`);
});

createGrid(16);
