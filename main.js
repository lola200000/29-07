let count = 0;
let maxLimit = null;

const container = document.createElement("div");
document.body.appendChild(container);
container.style.background = "white";

const counterEl = document.createElement("p");
counterEl.id = "counter";
counterEl.textContent = count;
container.appendChild(counterEl);
const limitDisplay = document.createElement("p");
limitDisplay.textContent = "Limite : ∞";
container.appendChild(limitDisplay);

const btnInc = document.createElement("button");
btnInc.id = "btnInc";
btnInc.textContent = "incrementer";
btnInc.style.background = "red";
container.appendChild(btnInc);

const btnDec = document.createElement("button");
btnDec.id = "btnDec";
btnDec.textContent = "decrementer";
btnDec.style.background = "green";
container.appendChild(btnDec);

const btnReset = document.createElement("button");
btnReset.id = "btnReset";
btnReset.textContent = "reset";
btnReset.style.background = "blue";
container.appendChild(btnReset);

const inputLimit = document.createElement("input");
inputLimit.id = "inputLimit";
inputLimit.type = "number";
inputLimit.placeholder = "Entrez une limite max (facultatif)";
container.appendChild(inputLimit);

function updateLimitDisplay() {
  if (maxLimit !== null && !isNaN(maxLimit)) {
    const restant = maxLimit - count;
    if (restant > 0) {
      limitDisplay.textContent = `Il reste : ${restant}`;
      limitDisplay.style.color = restant <= maxLimit * 0.2 ? "orange" : "black";
    } else if (restant === 0) {
      limitDisplay.textContent = "Limite atteinte !";
      limitDisplay.style.color = "red";
    } else {
      limitDisplay.textContent = "Limite dépassée !";
      limitDisplay.style.color = "red";
    }
  } else {
    limitDisplay.textContent = "Limite : ∞";
    limitDisplay.style.color = "black";
  }
}

inputLimit.addEventListener("input", () => {
  const val = parseInt(inputLimit.value, 10);
  if (!isNaN(val) && val >= 0) {
    maxLimit = val;
    if (count > maxLimit) {
      count = maxLimit;
      counterEl.textContent = count;
    }
  } else {
    maxLimit = null;
  }
  updateLimitDisplay();
});

btnInc.addEventListener("click", () => {
  if (maxLimit === null || count < maxLimit) {
    count++;
    counterEl.textContent = count;
  }
  updateLimitDisplay();
});

btnDec.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counterEl.textContent = count;
  }
  updateLimitDisplay();
});

btnReset.addEventListener("click", () => {
  count = 0;
  maxLimit = null;
  inputLimit.value = "";
  counterEl.textContent = count;
  updateLimitDisplay();
});

updateLimitDisplay();
