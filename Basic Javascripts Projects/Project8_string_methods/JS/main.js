function full_sentence() { //creating function
    var part_1 = "This is a "; //string
    var part_2= "sentence";  //string
    var whole_sentence = part_1.concat(part_2); //concatenating both strings
document.getElementById("concatenate").innerHTML= whole_sentence;
}
function slice_method() { //creating function
    var sentence = "All work and no play makes johnny a dull boy."; //string
    var section= sentence.slice(27,33); //slicing string
document.getElementById("slice").innerHTML= section;
}
function precision_method() { //creating function
    var X=1234566.667899754346; // value to var X
document.getElementById("Precision").innerHTML= X.toPrecision(6);
}
function string_method() {  //creating function
    var X=256;    // value to var X
document.getElementById("numbers_to_string").innerHTML= X.toString();
}