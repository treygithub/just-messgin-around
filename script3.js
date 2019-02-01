const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((num)=> num * this.multiplyBy)
    }
} 

//console.log('multiplier.multiply()', multiplier.multiply())


var index =0;
do{
    index++;
    document.writeln(index);
}
while(index<10)


function text(a,b){
    return (a*b)+(a+b)
}
var a =1
var b =2
var c= text(a,b);
console.log('c', c)


var a = [99,87,,9,928374];
a.find(function(value,index){
    if(index == 2){
        delete a[2]
    }
    console.log('index', index)
})

alert("function", typeof testss);
function testss (i){

}
alert("function", typeof testss)