let joke = document.querySelectorAll(".calculatorcontainer button");
let cry = document.getElementById("inputbox");
console.log(joke);
 // loop through the buttons
joke.forEach((btn) => {
    btn.addEventListener("click", () => {
        let buttonContent = btn.textContent;
        if (buttonContent === "AC") {
            clearData()
            } else if (buttonContent === "=") {
            Evaluate()
        } else if (buttonContent === "+/-") {
            clearone()
        } else {
            appendValue(buttonContent)
        }
    })
});
 // fn to clear data in input
 const clearData = () => {
    cry.value = "";
};
// fn to append the value to the input - to show contents on input
const appendValue = (buttonContent) => {
    cry.value += buttonContent;
};
// run calculator operations
const Evaluate = () => {
      let inputValue = cry.value;
      inputValue = inputValue.replace(/%/g, "/100*");
      try {
          cry.value = eval(inputValue);
      } catch (error) {
          cry.value = "Error";
          cry.style.color = "red";
          setTimeout(() => {
              cry.value = "";
              cry.style.color = "black";
          }, 5000);
      }
};