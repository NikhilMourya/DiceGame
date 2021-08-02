var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;
var img1 = "images/dice" + p1 + ".png";
var img2 = "images/dice" + p2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", img1);
document.querySelectorAll("img")[1].setAttribute("src", img2);
if (p1 > p2) {
    document.querySelector("h1").innerHTML = "Player 1 WINS"
}
else if (p2 > p1) {
    document.querySelector("h1").innerHTML = "Player 2 WINS"
}
else {
    document.querySelector("h1").innerHTML = "IT'S A DRAWW!!  try again"
}