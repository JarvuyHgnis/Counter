let count = 0;

let countel = document.getElementById("count-el");
let saveel = document.getElementById("save-el");


function increment() {
  count = count + 1;
  countel.innerText = count;
}
function save() {
  let temp = count + " - ";
  saveel.textContent += temp;
  count = 0;
  countel.innerText = 0;
}