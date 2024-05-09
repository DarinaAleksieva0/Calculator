
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
} //this function passes a char

function clearDisplay(){
    display.value = " ";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
} //the eval function takes an expression such as 1+2+3 and gives a res

