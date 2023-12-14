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

// Event Listeners for buttons
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
pow.addEventListener("click", () => (display.value += "^"));
del.addEventListener(
  "click",
  () => (display.value = display.value.slice(0, -1))
);

// Event Listener for equal button -----------------------------
equal.addEventListener("click", () => {
  // ! this is the easy way to calculate
  //   let result = eval(display.value);
  //   display.value = result;

  // ! this is the hard way to calculate
  // Call calculate function
  calculate();
});

// Functions ----------------------------------------------------

// Calculate function
function calculate() {
  let arr = display.value.split(/([\+\-\*\/\%\^])/);
  let num = [];
  let operator = [];
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "+" ||
      arr[i] === "-" ||
      arr[i] === "*" ||
      arr[i] === "/" ||
      arr[i] === "%" ||
      arr[i] === "^"
    ) {
      operator.push(arr[i]);
    } else {
      num.push(arr[i]);
    }
  }
  num = num.map(parseFloat);
  if (operator[0] === "+") {
    result = add(...num);
  } else if (operator[0] === "-") {
    result = sub(...num);
  } else if (operator[0] === "*") {
    result = mul(...num);
  } else if (operator[0] === "/") {
    if (num[1] === 0) {
      result = "Error";
    }
    result = div(...num);
  } else if (operator[0] === "%") {
    result = mod(...num);
  } else if (operator[0] === "^") {
    result = power(...num);
  } else {
    result = num[0];
  }
  display.value = result;
}

// Addition function
const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

// Subtraction function
const sub = (...numbers) => {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result -= numbers[i];
  }
  return result;
};


// Multiplication function
const mul = (...numbers) => {
  let mul = 1;
  for (let i = 0; i < numbers.length; i++) {
    mul *= numbers[i];
  }
  return mul;
};


// Division function
const div = (...numbers) => {
  let div = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      return "Can't divide by zero";
    } else div /= numbers[i];
  }
  return div;
};

// Modulus function
const mod = (...numbers) => {
  let mod = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    mod %= numbers[i];
  }
  return mod;
};

// Power function
const power = (...numbers) => {
  let power = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    power **= numbers[i];
  }
  return power;
};
