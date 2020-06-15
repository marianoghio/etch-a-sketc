
const container = document.getElementById("container");

function makeRows(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");

    container.appendChild(cell).className = "grid-item";
  };
};

function paint(color) {
  
  $(".grid-item").on('mouseover', function () {
    $(this).css('background-color' , color);
  });

}


function getRandomColor(){
  let letters = '0123456789ABCDEF';
  let colors = '#';
  for (var i=0; i<6 ; i++){
    colors += letters[Math.floor(Math.random()*16)];
  }
  return colors;
}


const rainbow = getRandomColor();

const black = "black"


let size = document.getElementById("input").value;

makeRows(size)
paint(black);


 
function clear() {
  $(".grid-item").css('background-color' , "inherit");

  }


function paintBlack(){
  clear();
  paint(black);
}


function paintRainbow(){
  clear();
  document.querySelectorAll('.grid-item').forEach(paint(getRandomColor));
  
}


   function updateSize(){
    clear();
    var size = document.getElementById("input").value;
    
    makeRows(size);
    paintBlack();
    
  }
  
 
document.getElementById("clear").addEventListener("click", clear)

document.getElementById("black").addEventListener("click", paintBlack);


document.getElementById("rainbow").addEventListener("click", paintRainbow);



document.getElementById("submit").addEventListener("click", updateSize);










