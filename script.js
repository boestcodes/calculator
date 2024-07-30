const buttons = document.querySelectorAll(".small, .big, .bigHorizontal");
const display = document.querySelector("#displayBottom");
const exec = document.querySelector("#equals");

const firstNumber = 5;
const secondNumber = 5;
const operator = "+"

display.textContent = `${firstNumber}${operator}${secondNumber}`

buttons.forEach((btn) => {
    btn.addEventListener("click", () => { 
        console.log(btn.textContent);
        

    });
});

exec.addEventListener("click", () => { 
    operate(display.value);
});

function operate(content){
    display.textContent = content;
    console.log(content)
    
}
