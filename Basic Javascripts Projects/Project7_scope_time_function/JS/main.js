function get_Date() {
if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
}
}
function time_function() {         // defining function
    var time= new Date().gethours();
    var reply;
    if (time<12==time>0)   {
        reply= " it is morning time!";
    }

    else  if (time>12==time< 18)   {
        reply= " it is afternoon time!";
    }
    else{
        reply= " it is evening time!";
    }
document.getElementById("time").innerHTML=reply;
}
console.log(time);