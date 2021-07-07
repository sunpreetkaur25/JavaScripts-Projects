function dictionary() {
    var Animal= {
        species:"DOG",
        Color:"BLACK",
        Breed:"PUG",
        Age:5,
        Sound:"BARK"
    };
    delete Animal.Sound;
    document.getElementById("dictionary").innerHTML=Animal.Sound;
    
}