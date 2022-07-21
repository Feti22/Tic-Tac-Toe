// Select color input
// Select size input
const colorPicker = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');


function makeGrid(event) {
  event.preventDefault();
  // get the grid height and width values from the sizePicker form
  const gridHeight = sizePicker.querySelector('#inputHeight').value;
  const gridWidth = sizePicker.querySelector('#inputWidth').value;

  // clear the pixelCanvas
  pixelCanvas.innerHTML = '';

  // create the tr elements for the height
  // create the td elements for the width
  for (let rows = 0; rows < gridHeight; rows++) {
    const rowElem = document.createElement('tr');
    for (let columns = 0; columns < gridWidth; columns++) {
      // rowElem.appendChild(document.createElement('td'));
      // rowElem.insertAdjacentHTML('beforeend', '<td></td>');
      // rowElem.insertAdjacentElement('beforeend', document.createElement('td'));
      rowElem.append(document.createElement('td'));
    }
    // add those elements to pixelCanvas
    pixelCanvas.appendChild(rowElem);
  }
}

function toggleColor(event) {
  // get the color value from colorPicker
  // set the style.backgroundColor of event.target to the value
  if (event.target.nodeName === 'TD') {
    if (event.target.style.backgroundColor !== '') {
      event.target.style.backgroundColor = '';
    } else {
      event.target.style.backgroundColor = colorPicker.value;
    } 
  }
}

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', makeGrid);
pixelCanvas.addEventListener('click', toggleColor);