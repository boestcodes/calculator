const buttons = document.querySelectorAll(".small, .big, .bigHorizontal");
const display = document.querySelector("#displayBottom");
const exec = document.querySelector("#equals");

let firstNumber;
let secondNumber;
let operator;

const isNumerical = "0123456789"
const isOperator = "+-*/"

let tempButton = "";

//display.textContent = `${firstNumber} ${operator} ${secondNumber}`

buttons.forEach((btn) => {
    
    btn.addEventListener("click", () => {
        if(isNumerical.includes(btn.id)){
         firstNumber += btn.id;
         console.log(btn.id)
         display.textContent = firstNumber;
        }
    });
});


exec.addEventListener("click", () => { 
    operate(display.textContent);
});

function operate(content){
    let [Num1, op, Num2] = content.split(" ")
    let value = 0;
    Num1 = Number(Num1);
    Num2 = Number(Num2);

    switch (op){
        case '+': value = Num1 + Num2;
        break;

        case '-': value = Num1 - Num2;
        break;

        case '*': value = Num1 * Num2;
        break;

        case '/': value = Num1 / Num2;
        break;
    }

    display.textContent = value;
    
}
