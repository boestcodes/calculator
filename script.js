const buttons = document.querySelectorAll(".small, .big, .bigHorizontal");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => { 
        console.log(btn.textContent);
    });
});

