function clearGrid() {
    let grid = document.querySelector(".grid");
    grid.innerHTML = "";
  }
  
  function generateGrid(size = 16) {
    clearGrid();
  
    if (size > 60) {
      size = 60;
      alert("Please enter a number less than 60");
    }
  
    let grid = document.querySelector(".grid");
    for (let i = 0; i < size; i++) {
      let row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < size; j++) {
        let column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
      }
      grid.appendChild(row);
    }
    addEventListeners();
  }
  function changeSize() {
    let size = document.querySelector(".input-number");
    size = size.value;
    generateGrid(size);
  }
  
  function changeColor() {
    let color = document.querySelector(".input-color");
    color = color.value;
    this.style.backgroundColor = color;
  }
  
  function addEventListeners() {
    let columns = document.querySelectorAll(".column");
    columns.forEach((column) =>
      column.addEventListener("mouseover", changeColor)
    );
  }
  addEventListeners("onload", generateGrid());
  
  function randomColor() {
  
    let columns = document.querySelectorAll(".column");
    columns.forEach((column) =>
      column.addEventListener("mouseover", function () {  
          let color = Math.floor(Math.random() * 16777215).toString(16);
          this.style.backgroundColor = "#" + color;
      })
    );
  }
  