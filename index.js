'use strict';

let msg = `<b>Error:</b>`;
  function getinput(){
        const operator = document.getElementById('mySelect').value;
        if (operator == '+') {
            add();
}
else if (operator == '-') {
    sub();
}
else if (operator == '*') {
    mul();
}
else if (operator=='/') {
   div();

}
}

function add(){

        let number1 = Number.parseFloat(document.getElementById('input_id1').value);
        let number2 = Number.parseFloat(document.getElementById('input_id2').value);
        let message;
        message = document.getElementById("p01");

 if(!Number.isSafeInteger(number1) || !Number.isSafeInteger(number2))
{
    message.innerHTML = `${msg} "not a number"` ;  
}

else{
let result = number1+ number2;
document.getElementById('alert').innerHTML= "output " +result;
}


}
function sub(){

let number1 = Number.parseFloat(document.getElementById('input_id1').value);
let number2 = Number.parseFloat(document.getElementById('input_id2').value);

let message;
message = document.getElementById("p01");
message.innerHTML = "";

if(!Number.isSafeInteger(number1) || !Number.isSafeInteger(number2))
{
    message.innerHTML = `${msg} "not a number"` ;
}

else {
   let result = number1 - number2;
document.getElementById('alert').innerHTML= "output " +result;
}
    
}



function mul(){

let number1 = Number.parseFloat(document.getElementById('input_id1').value);
let number2 = Number.parseFloat(document.getElementById('input_id2').value);

let message;
message = document.getElementById("p01");
message.innerHTML = "";

if(!Number.isSafeInteger(number1) || !Number.isSafeInteger(number2))
{
    message.innerHTML = `${msg} "not a number"` ;
}


else {
  let result = number1 * number2;
document.getElementById('alert').innerHTML= "output " +result;
}


}
function div(){
let number1 = Number.parseFloat(document.getElementById('input_id1').value);
let number2 = Number.parseFloat(document.getElementById('input_id2').value);

let message;
message = document.getElementById("p01");
message.innerHTML = "";

if(!Number.isSafeInteger(number1) || !Number.isSafeInteger(number2))
{
    message.innerHTML = `${msg} "not a number"` ;
}
else if(number2==0)
{
    message.innerHTML = `${msg} "cannot divide by zero"` ;
}

else{ 
   let result = number1 /number2;
document.getElementById('alert').innerHTML= "output " +result;
}
}