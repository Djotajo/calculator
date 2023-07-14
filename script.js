const numbers = document.querySelectorAll(".number");
const numbers1 = Array.from(numbers)

const screen = document.querySelector("#screen");

const acButton = document.querySelector("#buttonAC");
acButton.addEventListener("click", () => (screen.textContent = ""));

console.log(numbers);
console.log(numbers1);

for (n of numbers1) {
    console.log(n.textContent);
    n.addEventListener("click", function(e) {
        screen.textContent += this.textContent;
        console.log(this.textContent)});
}