function createGrid(sideLength) {
  //find grid container
  let gridContainer = document.querySelector('.js-grid-container');
  //create grid
  for (let i = 0; i < sideLength * sideLength; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-item');
    gridContainer.appendChild(newDiv);
  }
}
createGrid(16);
