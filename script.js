var trey = {
    'name': 'robert',
    'height':6,
    'weight':270
}

checkObj=(check)=>{
    if(trey.hasOwnProperty(check)){
        return `property "${check}" was found and value of property is "${trey[check]}" `
    }else{
        return "not found"
    }
}

console.log(checkObj('name'))


var myArray = [];

//odd
for(i=1;i<10;i+=2){
    myArray.push(i)
}

console.log(myArray)

var myArray2 = []

//even
for(i=2;i<10;i+=2){
    myArray2.push(i)
}
console.log(myArray2)

//random number
var randomNumber = Math.floor(Math.random() * 20);

//destructuring 

const AVE_TEMP = {
    today:79,
    tomorrow:88
}

function getTemp(){
    const {tomorrow: tempOfTomorrow} = AVE_TEMP;
    return tempOfTomorrow;
}

console.log(getTemp())