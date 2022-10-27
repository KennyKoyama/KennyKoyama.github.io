const formula = document.querySelector('#formula');
const historicClear = document.querySelector('#history-clear');
const historic = document.querySelector('#history');
const clearBtn = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const percBtn = document.querySelector('#perc');
const divBtn = document.querySelector('#div');
const multBtn = document.querySelector('#mult');
const subBtn = document.querySelector('#sub');
const sumBtn = document.querySelector('#sum');
const equalBtn = document.querySelector('#equal');
const dotBtn = document.querySelector('#dot');
const memBtn = document.querySelector('#mem');
const zero = document.querySelector('#zero');
const numbers = document.querySelectorAll('.numbers');
const dig1 = document.querySelector('#dig1');
const dig2 = document.querySelector('#dig2');
const dig3 = document.querySelector('#dig3');
const dig4 = document.querySelector('#dig4');
const dig5 = document.querySelector('#dig5');
const dig6 = document.querySelector('#dig6');
const dig7 = document.querySelector('#dig7');
const dig8 = document.querySelector('#dig8');
const dig9 = document.querySelector('#dig9');

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const percentage = (num1, num2) => num1 * (num2 / 100);

let result;
const calc = () => {
  if (!hasFormula()) return;
  const splitted = currentFormula().split(' ');
  const num1 = parseFloat(splitted[0]);
  const num2 = parseFloat(splitted[2]);
  const operator = splitted[1];
  if(operator === '+') result = sum(num1, num2);
  if(operator === '-') result = sub(num1, num2);
  if(operator === '*') result = mult(num1, num2);
  if(operator === '/') result = div(num1, num2);
  if(isFloat(result)) result = result.toFixed(2);
  historic.innerHTML += `${currentFormula()} = ${result} <br>`;
  formula.value = result;
}

const lastIndex = () => formula.value.length - 1;
const currentFormula = () => formula.value;
const notEmpty = () => currentFormula() !== '';
const hasLimit = () => formula.value.length <= 18;
const hasOp = () => / [\+\-\*\/] /.test(currentFormula());
const hasResult = () => result;
const hasFormula = () => /(\d+\.\d+|\d+) \D (\d+\.\d+|\d+)/.test(currentFormula());
const isFloat = (num) => /\./.test(num);
const transfer = (op) => {
  calc()
  formula.value = `${result} ${op} `;
  result = '';
};

historicClear.addEventListener('click', () => historic.innerHTML = '');
zero.addEventListener('click', () => notEmpty() ? formula.value += 0 : '');
dig1.addEventListener('click', () => hasLimit() ? formula.value += 1 : '');
dig2.addEventListener('click', () => hasLimit() ? formula.value += 2 : '');
dig3.addEventListener('click', () => hasLimit() ? formula.value += 3 : '');
dig4.addEventListener('click', () => hasLimit() ? formula.value += 4 : '');
dig5.addEventListener('click', () => hasLimit() ? formula.value += 5 : '');
dig6.addEventListener('click', () => hasLimit() ? formula.value += 6 : '');
dig7.addEventListener('click', () => hasLimit() ? formula.value += 7 : '');
dig8.addEventListener('click', () => hasLimit() ? formula.value += 8 : '');
dig9.addEventListener('click', () => hasLimit() ? formula.value += 9 : '');
dotBtn.addEventListener('click', () => hasLimit() ? formula.value += '.' : '');
memBtn.addEventListener('click', () => memory = result);
divBtn.addEventListener('click', () => hasFormula() ? transfer('/')
                                   : lastIndex() >= 0 && !hasOp() ? formula.value += ' / '
                                   : console.log(hasFormula()));
multBtn.addEventListener('click', () => hasFormula() ? transfer('*')
                                    : lastIndex() >= 0 && !hasOp() ? formula.value += ' * '
                                    : console.log(hasFormula()));
subBtn.addEventListener('click', () => hasFormula() ? transfer('-')
                                   : lastIndex() >= 0 && !hasOp() ? formula.value += ' - '
                                   : console.log(hasFormula()));
sumBtn.addEventListener('click', () => hasFormula() ? transfer('+')
                                   : lastIndex() >= 0 && !hasOp() ? formula.value += ' + '
                                   : console.log(hasFormula()));
percBtn.addEventListener('click', () => {
  const splitted = currentFormula().split(' ');
  const num1 = parseFloat(splitted[0]);
  const num2 = parseFloat(splitted[2]);
  const operator = splitted[1];
  formula.value = `${num1} ${operator} ${percentage(num1, num2)}`;
  historic.innerHTML += `${num2}% of ${num1} = ${percentage(num1, num2)}<br>`;
});

equalBtn.addEventListener('click', calc);
backspace.addEventListener('click', () => formula.value = currentFormula().substring(0, lastIndex()));
clearBtn.addEventListener('click', () => {
  formula.value = '';
  result = '';
});
let test = ``;
// formula.addEventListener('change', (event) => {
//   formula.value += (event.key);
//   result.innerHTML = parseInt('1 + 1');
// });

