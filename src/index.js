import generatejoke  from "./generatejoke";
import "./styles/main.scss";
import mypic from "./assets/mine.jpg";
console.log(generatejoke());
console.log(1);
const myImg = document.getElementById("myImg");
myImg.src = mypic;

const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generatejoke);

generatejoke(); 