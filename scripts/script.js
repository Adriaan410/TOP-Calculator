let display = document.querySelector("#num-display");
let btns= document.querySelectorAll(".btn");
let displayVal = "";
let num1;
let num2 ;
let operator;

btns.forEach(e => {
    e.addEventListener("click",function(){
        let value = this.textContent;

        if(!isNaN(value)){
            displayVal += value;
            display.textContent = displayVal;
        }
        else if (value === "AC"){
            displayVal = "";
            //num1 =null;
            //num2 =null;
            //operator =null;
            display.textContent = "0";
        }
        else if(value === "="){
            num2 = Number(displayVal);

            let result = operate(operator,num1,num2);

            display.textContent = result;
            displayVal = "";
            num1=result;
            operator=null;
        }
        else if(value === "DEL"){
            displayVal = displayVal.slice(0,-1);
            display.textContent = displayVal || "0";
        }
        else if(value === "%"){
            if(num1 !== null && operator &&displayVal !== ""){
                num2 = Number(displayVal);
                let result = operate(operator, num1,num2);
                result = result *100;
                display.textContent = result + "%";
                displayVal = "";
                num1 = null;
                operator = null;
            }
            else {
                displayVal = String(percent(Number(displayVal)));
                display.textContent = displayVal;
            }
        }
        else {
            num1 = Number(displayVal);
            operator = value;
            displayVal ="";
        }
    });
});


let add = function(num1,num2){
    return num1 + num2;
}

let subtract = function(num1,num2){
    return num1 - num2;
}

let multiply = function(num1,num2){
    return num1 * num2;
}

let divide = function(num1,num2){
    return num1 / num2;
}

let percent = function(num1){
    
    return num1 / 100;
}


let operate = function(operator, num1,num2){
    if( operator === "+" )return add(num1,num2);
    if( operator === "-" )return subtract(num1,num2);
    if( operator === "x" )return multiply(num1,num2);
    if( operator === "/" )return divide(num1,num2);
}

