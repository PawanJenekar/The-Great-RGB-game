var numOfSquare = 9;
var colors = [];
var pickedColor;

var square = document.querySelectorAll(".square");
var rgbDisplay = document.getElementById("rgbDisplay");
var messageDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");
var h1 = document.getElementById("heading");
var modeButton = document.querySelectorAll(".mode")

init();

function init(){
   setUpModeButtons();
    setUpSquares();
    reset();  
}

function setUpModeButtons(){
    for(var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click",function(){
            modeButton[0].classList.remove("selected")
            modeButton[1].classList.remove("selected")
            modeButton[2].classList.remove("selected")
            this.classList.add("selected");
            if(this.textContent==="Easy"){
                numOfSquare = 3;
                for(var i = 0; i<square.length; i++){
                    square[i].style.backgroundColor = colors[i];
                }
            }
            else if(this.textContent==="Hard"){
                numOfSquare = 6;
            }
            else{
                numOfSquare = 9;
            }
            reset();
        })
    }
}
function setUpSquares(){
    for(var i =0; i <square.length; i++){
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
}
function reset(){
    colors = generateRandomColor(numOfSquare);
    pickedColor = selectedColor(); 
    rgbDisplay.textContent = pickedColor
    for(var i =0 ; i < square.length; i++){
        if(colors[i]){
            square[i].style.display = "block";
            square[i].style.backgroundColor = colors[i];
        }
        else{
            square[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent ="New Colors";  
}
resetButton.addEventListener("click",function(){
    reset();
   
});




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





 
