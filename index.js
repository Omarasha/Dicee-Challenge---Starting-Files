
var raundomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var raundomDiceImag = "images/dice" + raundomNumber1 + ".png";
 document.querySelectorAll("img")[0].setAttribute("src" ,raundomDiceImag);

var raudomNumber2=Math.floor(Math.random() * 6 )+1;
var raundomDiceImage2 = "images/dice" + raudomNumber2 + ".png ";
document.querySelectorAll("img")[1].setAttribute("src" , raundomDiceImage2);


if (raundomNumber1 > raudomNumber2){
  document.querySelector("h1").innerHTML= "Play 1 wins !";
}
else if (raundomNumber1 < raudomNumber2 ){
  document.querySelector("h1").innerHTML= "Play 2 wins !";
}
else{
  document.querySelector("h1").innerHTML= " Draw !";
}
