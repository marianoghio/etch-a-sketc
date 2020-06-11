




const container = document.getElementById("container");

function makeRows(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "grid-item";
  };
};

function reMakeRows(size) {
  container.style.setProperty('--grid-rows', size);
  container.style.setProperty('--grid-cols', size);
  container.getElementsByTagName("div").remove;
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");
    
    container.appendChild(cell).className = "grid-item";
  };
};



makeRows(16)

function paint (){
    $(".grid-item").on('mouseover',function(){
        $(this).addClass('active');
 });

}


paint()

// function askSize(){
  
//   size = prompt("input numer of columns")
  
  
//   }

  

function clear(){
    $(".grid-item").removeClass("active");
    do{
      var size = parseInt(window.prompt("Please enter a number from 2 to 24", ""), 10);
  }while(isNaN(size) || size > 24 || size < 2);
 makeRows(size);
 paint();
    
    // document.getElementsByClassName("grid-item").remove();
  
    
    // container.removeChild.className = "grid-item";
    // container.appendChild(cell).className = "grid-item";
    
     
 }



 

 
document.getElementById("clear").addEventListener("click", clear)












