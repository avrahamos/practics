const titel = document.createElement("h1");
titel.textContent = "Avi ";
titel.innerHTML += "<h1>Avi</h1>";
const inp = document.createElement("input");
inp.type = "range";
inp.min = 1;
inp.max = 100;
inp.step = 1;
inp.addEventListener("change", () => {
  titel.textContent = inp.value;
});
document.body.appendChild(titel);
document.body.appendChild(inp);
console.log(titel);
const arr = [true, false, true, false, true];
console.log(arr);
arr.filter((b) => b);
console.log(arr);
const inp2 = document.createElement("input");
document.body.appendChild(inp2);
inp2.addEventListener("paste", (e) => {
  e.preventDefault();
  e.target;
  alert("ujt");
});
const h1 = document.getElementsByClassName("c");
for (let h1 of h1s) {
  h1.addEventListener("click", (e) => {
    if (e.ctrlkey) {
      e.target.style.color = "red";
    } else {
      e.target.style.color = "green";
    }
  });
}
