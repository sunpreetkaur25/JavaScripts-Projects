function operator_addition() { // creating a function
    var addition= 100 + 100;    // addition
        document.getElementById("Math").innerHTML= "100 + 100 =" + addition; // addition  for the html elements to call
}
function operator_subtraction() { // creating a function
    var subtraction= 500 - 100;    // subtraction
        document.getElementById("Math").innerHTML= "500 - 100 =" + subtraction; // subtraction  for the html elements to call
}
function operator_multiplication() { // creating a function
    var multiplication= 500 * 100;    // multiplication
        document.getElementById("Math").innerHTML= "500 * 100 =" + multiplication; // multiplication  for the html elements to call
}
function operator_division() { // creating a function
    var division= 500/100;    // division
        document.getElementById("Math").innerHTML= "500/100 =" + division; // division  for the html elements to call
}
function more_Math() { // creating a function
    var simple_Math= (1+2)*10/2-5;    // division
        document.getElementById("Math").innerHTML= "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals =" + simple_Math; // division  for the html elements to call
}
function modulus_Operator() { // creating a function
    var simple_Math_Operator=100%5 ;    // Modulus
        document.getElementById("Math").innerHTML= "When you divide 100 By 5, you have remainder of=" + simple_Math_Operator; // Modulus  for the html elements to call
}
function negation_Operator() { // creating a function
    var x=10;    // UNARY
        document.getElementById("Math").innerHTML= -x; // negation operator  for the html elements to call
}
var a= 4;
a++;
document.write(a);
var b = 5.65;
b++;
document.write(b);
window.alert(Math.random());
Math.pow(8, 2);

