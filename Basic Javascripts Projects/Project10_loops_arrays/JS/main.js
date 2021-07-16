function count_to_ten(){ //creating function
var Digit= "";           
let X =1;              // assigning value to a variable   
while (X<11) {         // condition statement while 
    Digit += "<br>" +X;
    X++;               //increasing counter value
}
document.getElementById("Counting_to_Ten").innerHTML= Digit;
}
var Instruments= ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // Array of instruments
var Content= "";
var Y;           // defining a variable
function for_loop() {   // //creating function
for (Y=0; Y< Instruments.length; Y++) {    //condition statement FOR 
    Content += Instruments[Y] +"<br>";
}
document.getElementById("List_of_Instruments").innerHTML= Content;
}