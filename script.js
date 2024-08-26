const buttons = document.querySelectorAll(".small, .big, .bigHorizontal");
const display = document.querySelector("#displayBottom");
const exec = document.querySelector("#equals");
const clear = document.querySelector("#AC");

let firstNumber;
let secondNumber;
let operator;

let firstNumberFinished = false;
let secondNumberFinished = false;
let operatorFinished = false;

const isNumerical = "0123456789";
const isOperator = "+-*/";

let tempButton = "";

buttons.forEach((btn) => {
        
    btn.addEventListener("click", () => {
        if(secondNumberFinished == true){
            display.textContent = "";
            secondNumberFinished = false;
        }
        if(isNumerical.includes(btn.id) && firstNumberFinished == false){
            if(firstNumber){
                firstNumber += btn.id;
            }
            else{
                firstNumber = btn.id;
            }
         console.log(btn.id)
         display.textContent = firstNumber;
        }

        if(isOperator.includes(btn.id)){
            operator = btn.id;
         console.log(btn.id)
         display.textContent = firstNumber+" "+operator;
         firstNumberFinished = true
         secondNumberFinished = false
        }

        if(isNumerical.includes(btn.id) && firstNumberFinished == true){
            if(secondNumber){
                secondNumber += btn.id;
            }
            else{
                secondNumber = btn.id;
            }
            console.log(btn.id)
            display.textContent = display.textContent = firstNumber+" "+operator+" "+secondNumber;
            
        }
    });
});


exec.addEventListener("click", () => {
    if(secondNumber){
        secondNumberFinished = true;
        firstNumber = "";
        secondNumber = "";
        operator = "";
        firstNumberFinished = false;
        operate(display.textContent);
    } else {
        alert("Calculation not complete!")
    } 
});

clear.addEventListener("click", clearScreen);

function operate(content){
    console.log(content)
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
    value = value.toFixed(2);
    display.textContent = value;
    firstNumber = value;
}

function clearScreen(){
    display.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    firstNumberFinished = false;
    secondNumberFinished = false;
}
