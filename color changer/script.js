const colors = [
  "red",
  "blue",
  "green",
  "purple",
  "green",
  "#4C0033",
  "#25316D",
  "#1C6758",
];
const btns = document.querySelector(".btn");
const text = document.querySelector(".color");
const div = document.querySelector("btnd");

btns.addEventListener("click", function () {
  const random = getRandom();

  console.log(random);
  document.body.style.backgroundColor = colors[random];
  text.textContent = colors[random];
});

function getRandom() {
  return Math.floor(Math.random() * colors.length);
}
