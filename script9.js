//working with objects


// one way of making an object
var trey = {
    name: 'trey',
    DOB: "9/29/1982",
    job: "unemployed"
}

//function constructor to make obj
var Person = function(name,DOB,job){
    this.name = name,
    this.DOB = DOB,
    this.job = job
}

//take the function out of constructor for less memory usage and faster performance
//protptype
Person.prototype.calculateAge = 
function(){
    console.log(this.DOB)
}

// We can pass new properties
Person.prototype.lastname = "HollyMolly"

//Instance of new object
//Has access to constructor of function property types
// prototype  inheritance of function calculateAge
var trey = new Person('trey','9/29/1982',"coder");

trey.calculateAge();

console.log('trey.lastname', trey.lastname)