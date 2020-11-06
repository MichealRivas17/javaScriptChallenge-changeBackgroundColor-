// get document ID
const body = document.body;
const button = document.getElementById("btn");

//Array of colors
const colors = ['red', 'pink', 'blue', 'yellow', 'green', "violet"];

// set default background color
body.style.backgroundColor = 'violet';
button.style.backgroundColor = 'violet';

//add event listner
button.addEventListener("click", changeBackground);

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
button.style.backgroundColor = colors[colorIndex]
}