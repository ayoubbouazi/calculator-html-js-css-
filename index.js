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
const clear = document.getElementById('clear');
const display = document.getElementById("display");

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
clear.addEventListener('click', () => display.value = '');

// equal.addEventListener('click', () => {
//     let expression = display.textContent;
//     let numbers = expression.split(/\+|\-|\*|\//g);
//     let operators = expression.replace(/[0-9]|\./g, "").split("");
//     let divide = operators.indexOf("/");
//     let multiply = operators.indexOf("*");
//     let subtract = operators.indexOf("-");
//     let add = operators.indexOf("+");
//     while (divide != -1) {
//         numbers.splice(divide, 2, div(Number(numbers[divide]), Number(numbers[divide + 1])));
//         operators.splice(divide, 1);
//         divide = operators.indexOf("/");
//     }
//     while (multiply != -1) {
//         numbers.splice(multiply, 2, mul(Number(numbers[multiply]), Number(numbers[multiply + 1])));
//         operators.splice(multiply, 1);
//         multiply = operators.indexOf("*");
//     }
//     while (subtract != -1) {
//         numbers.splice(subtract, 2, sub(Number(numbers[subtract]), Number(numbers[subtract + 1])));
//         operators.splice(subtract, 1);
//         subtract = operators.indexOf("-");
//     }
//     while (add != -1) {
//         numbers.splice(add, 2, add(Number(numbers[add]), Number(numbers[add + 1])));
//         operators.splice(add, 1);
//         add = operators.indexOf("+");
//     }
//     display.textContent = numbers[0];
// });

// Declare 'add' with the desired implementation
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => (a / b ? b != 0 : "Error: Division by zero");
