var numOfSquare = 6;
var colors = generateRandomColor(numOfSquare);

var square = document.querySelectorAll(".square");
var rgbDisplay = document.getElementById("rgbDisplay");
var pickedColor = selectedColor();
var messageDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");
var h1 = document.getElementById("heading");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquare = 3;
    colors = generateRandomColor(numOfSquare);
    pickedColor = selectedColor();
    rgbDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for(var i = 0;i<square.length;i++){
      if(colors[i]){
        square[i].style.backgroundColor = colors[i];
      }
    else{
        square[i].style.display = "none";
    }
    }
})



hardBtn.addEventListener("click",function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numOfSquare = 6;
  colors = generateRandomColor(numOfSquare);
    pickedColor = selectedColor();
    messageDisplay.textContent = "";
    rgbDisplay.textContent = pickedColor;
    for(var i = 0;i<square.length;i++){
      square[i].style.backgroundColor = colors[i];
      square[i].style.display = "block";
    }
      
    
        
  

})


resetButton.addEventListener("click",function(){
  
  colors = generateRandomColor(numOfSquare);
  pickedColor = selectedColor(); 
  rgbDisplay.textContent = pickedColor
  for(var i =0 ; i < square.length; i++){
    square[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  this.textContent ="New Colors";
  
});



rgbDisplay.textContent = pickedColor;
 

for(var i =0; i <square.length; i++){
    square[i].style.backgroundColor = colors[i];

  square[i].addEventListener("click",function(){
     var clickedColor = this.style.backgroundColor;

     if(clickedColor === pickedColor){
         correctColor(clickedColor);
         messageDisplay.textContent="Correct!!"
         h1.style.backgroundColor = clickedColor;
         resetButton.textContent = "Play Again?"
       
     }
     else{
       this.style.backgroundColor="#232323";
       messageDisplay.textContent="Try Again!!"
     }
  })
}

function correctColor(color){
   for(var i =0; i<square.length; i++){
       square[i].style.backgroundColor=color;
   }
    
    
}


function selectedColor (){
   var random = Math.floor(Math.random()* colors.length );
   return colors[random];
}

function generateRandomColor(num){
  var array =[];
  for(var i = 0; i<num; i++ ){
   array.push(RandomColor());
  };
  return array;
}

function RandomColor(){

  var r= Math.floor(Math.random()*256);
  var g= Math.floor(Math.random()*256);
  var b= Math.floor(Math.random()*256);

  return "rgb(" + r +", " + g +", " + b + ")" 
  

}



 
