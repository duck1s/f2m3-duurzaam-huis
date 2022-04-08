const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const calcButton = document.getElementById("calc");
const answer = document.getElementById("answer");

const test = input1.value;
console.log(test);

function calc() {
    const test = input1.value * input2.value;
    answer.innerHTML = test;
}