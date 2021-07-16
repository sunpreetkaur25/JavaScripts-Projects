
function age_function() {         // defining function
    var age; your_age;
    height= document.getElementById("age").value;
    can_ride= (age<18) ? "You are not old enough to vote " : "you can vote!";
    document.getElementById("age").innerHTML= your_age + "to vote..";
    
}
function vote(area, location, day) {
    this.vote_area= area;
    this.vote_location= location;
    this.vote_day= day;
}

var sun= new vote("castlemore", "horizon street", "Monday")
var har= new vote("whitwell", "penstock drive", "sunday")
var vir= new vote("bayridge", "lakeshore street", "tuesday")
function myfunction() {
document.getElementById("keywords_and_constructors").innerHTML="sun will go to vote in area " +  sun.vote_area  + "at location " +  sun.vote_location + "on" + sun.vote_day;
}