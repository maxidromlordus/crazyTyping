const typewrapper = document.getElementById("typewrapper");
console.log(typewrapper);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
document.addEventListener("keypress", (e) => {
  const red = getRandomInt(0, 255);
  const green = getRandomInt(0, 255);
  const blue = getRandomInt(0, 255);
  const pressedButton = e.key;
  const size = getRandomInt(20, 100);
  const letter = document.createElement("p"); //
  const top = getRandomInt(0, 700);
  const left = getRandomInt(0, 700);
  letter.style.position = "absolute";
  letter.style.top = top + "px";
  letter.style.left = left + "px";
  letter.style.fontSize = size + "px";
  letter.style.color = `rgb(${red}, ${green}, ${blue})`;
  letter.innerText = pressedButton;
  typewrapper.appendChild(letter);
  setTimeout(() => {
    typewrapper.removeChild(letter);
  }, 1000); //
});
