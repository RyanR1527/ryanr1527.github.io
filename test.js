let a ="hello";
    console.log("Hello world");
    alert("Hello world");

const buttonA=document.querySelector("#button_A");

const headingA=document.getElementById("heading_A")

buttonA.addEventListener('click', function() {

const name=prompt("What is your name?");

alert(`Hello ${name}`);
headingA.textContent=`Welcome ${name}`;
});

