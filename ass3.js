const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let input = "";

buttons.forEach(button => {

button.addEventListener("click", () => {

const value = button.textContent;

if(value === "CE"){
input="";
display.textContent="0";
}

else if(value === "="){

try{

const expression = input
.replace(/×/g,"*")
.replace(/÷/g,"/")
.replace(/−/g,"-");

input = eval(expression).toString();
display.textContent = input;

}
catch{
display.textContent="Error";
input="";
}

}

else{

input += value;
display.textContent = input;

}

});

});