// calculator

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const mulBtn = document.getElementById("mul");
const divBtn = document.getElementById("div");
const equal = document.getElementById("equal");
const dot = document.getElementById("dot");
const modul = document.getElementById("mod");
const pow = document.getElementById("pow");
const clear = document.getElementById("clear");
const display = document.getElementById("display");
const del = document.getElementById("del");

// Event Listeners
one.addEventListener("click", () => (display.value += 1));
two.addEventListener("click", () => (display.value += 2));
three.addEventListener("click", () => (display.value += 3));
four.addEventListener("click", () => (display.value += 4));
five.addEventListener("click", () => (display.value += 5));
six.addEventListener("click", () => (display.value += 6));
seven.addEventListener("click", () => (display.value += 7));
eight.addEventListener("click", () => (display.value += 8));
nine.addEventListener("click", () => (display.value += 9));
zero.addEventListener("click", () => (display.value += 0));
addBtn.addEventListener("click", () => (display.value += "+"));
subBtn.addEventListener("click", () => (display.value += "-"));
mulBtn.addEventListener("click", () => (display.value += "*"));
divBtn.addEventListener("click", () => (display.value += "/"));
dot.addEventListener("click", () => (display.value += "."));
modul.addEventListener("click", () => (display.value += "%"));
clear.addEventListener("click", () => (display.value = ""));
pow.addEventListener("click", () => (display.value += "**"));
del.addEventListener(
  "click",
  () => (display.value = display.value.slice(0, -1))
);

equal.addEventListener("click", () => {
// ! this is the easy way to calculate
  //   let result = eval(display.value);
    //   display.value = result;
        
// ! this is the hard way to calculate
  let result = display.value.split("");
  let arr = [];
  let num = "";
  for (let i = 0; i < result.length; i++) {
    if (
      result[i] === "+" ||
      result[i] === "-" ||
      result[i] === "*" ||
      result[i] === "/" ||
      result[i] === "%" ||
      result[i] === "**"
    ) {
      arr.push(num);
      arr.push(result[i]);
      num = "";
    } else {
      num += result[i];
    }
  }
  arr.push(num);
  console.log(arr);

  // what if i want to calculate more than 2 numbers
  let a = Number(arr[0]);
  let b = Number(arr[2]);
  let c = Number(arr[4]);
  let op1 = arr[1];
  let op2 = arr[3];
  let res = 0;
  switch (op1) {
    case "+":
      res = add([a, b]);
      break;
    case "-":
      res = sub([a, b]);
      break;
    case "*":
      res = mul([a, b]);
      break;
    case "/":
      res = div([a, b]);
      break;
    case "%":
      res = mod([a, b]);
      break;
    case "**":
      res = power([a, b]);
      break;
    default:
      res = "Error";
  }
  switch (op2) {
    case "+":
      res = add([res, c]);
      break;
    case "-":
      res = sub([res, c]);
      break;
    case "*":
      res = mul([res, c]);
      break;
    case "/":
      res = div([res, c]);
      break;
    case "%":
      res = mod([res, c]);
      break;
    case "**":
      res = power([res, c]);
      break;
    default:
      res = "Error";
  }
  display.value = res;
});

// Functions

const add = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const sub = (arr) => {
  let sub = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sub -= arr[i];
  }
  return sub;
};

const mul = (arr) => {
  let mul = 1;
  for (let i = 0; i < arr.length; i++) {
    mul *= arr[i];
  }
  return mul;
};

const div = (arr) => {
  let div = arr[0];
  for (let i = 1; i < arr.length; i++) {
    div /= arr[i];
  }
  return div;
};

const mod = (arr) => {
  let mod = arr[0];
  for (let i = 1; i < arr.length; i++) {
    mod %= arr[i];
  }
  return mod;
};

const power = (arr) => {
  let power = arr[0];
  for (let i = 1; i < arr.length; i++) {
    power **= arr[i];
  }
  return power;
};
