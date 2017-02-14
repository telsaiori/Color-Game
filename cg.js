var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //mode buttons event listeners
  setUpModeButtons();
  setupSquares();
  reset();
}

function setUpModeButtons(){
  for(var i = 0 ; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //add click listener to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.background;
      // compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      }else{
          this.style.background = "#232323";
          messageDisplay.textContent = "Try Again";
      }
    }); // addEventListener end
  }
}

function reset(){
  //generate all new colors
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for(var i = 0; i < squares.length; i++){
  //add init color to squares
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    
  }
  h1.style.background = "steelblue";
}



colorDisplay.textContent = pickedColor;

// easyBtn.addEventListener("click",function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numOfSquares = 3;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });

// hardBtn.addEventListener("click",function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numOfSquares = 6
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     squares[i].style.background = colors[i];
//     squares[i].style.display = "block"
//   }

// });

resetButton.addEventListener("click",function(){
  reset();
});




function changeColors(color){
  // loop through all the squares
  for(var i = 0; i < colors.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  // make an array
  var arr = [];
  // add num random colors to arr
  for(var i = 0; i < num; i++){
    //get random color and push to arr
    arr.push(randomColor());
  }
  // return arr
  return arr;
}

function randomColor(){
  // pick a red from 0-255
  var r = Math.floor(Math.random()* 256);
  // pick a green from 0-255
  var g =Math.floor(Math.random()* 256);
  // pick a blue from 0-255
  var b = Math.floor(Math.random()* 256);
  return "rgb("+ r +", "+ g+", "+ b +")";
}