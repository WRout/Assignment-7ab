
function add(a, b){
  let num1 = parseInt(a);
  let num2 = parseInt(b);
  return (num1 + num2);
}

function subtract(a, b){
  let num1 = parseInt(a);
  let num2 = parseInt(b);   
  return(num1 - num2);
}

function multiply(a, b){
  let num1 = parseInt(a);
  let num2 = parseInt(b);
  return (num1 * num2);
}

function divide(a, b){
  let num1 = parseInt(a);
  let num2 = parseInt(b);
  return (num1 / num2);
}

function modulo(a, b){
  let num1 = parseInt(a);
  let num2 = parseInt(b);
  return (num1 % num2);
}

function calculate(){
  let inputA = prompt("What is the first number?", 5);
  let actionType = prompt("What action would you like to perform? (%, /, *, +, -)", "+");
  let inputB = prompt("What is the second number?", 6);
  let equation = document.getElementById("equation");
    
  switch(actionType){
    case "%":
      answer = modulo(inputA, inputB);
      equation.innerHTML = (inputA + " " + actionType + " " + inputB + " = " + answer);
      break;
    case "/":
      answer = divide(inputA, inputB);
      equation.innerHTML = (inputA + " " + actionType + " " + inputB + " = " + answer);
      break;
    case "*":
      answer = multiply(inputA, inputB);
      equation.innerHTML = (inputA + " " + actionType + " " + inputB + " = " + answer);
      break;
    case "+":
      answer = add(inputA, inputB);
      equation.innerHTML = (inputA + " " + actionType + " " + inputB + " = " + answer);
      break;
    case "-":
      answer = subtract(inputA, inputB);
      equation.innerHTML = (inputA + " " + actionType + " " + inputB + " = " + answer);
      break;
    default:
      equation.innerHTML = ("Please input a valid character!");
      break;
  }

}
