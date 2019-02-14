//back to closures and ififs

var buget = (()=>{
    var x =23;
    var add = function(a){
        return x + a
    }
    return {
        test: function(b){
            return  add(b)
        }
    }
})()

console.log(buget.test(5))


// Var x and function add are both private!!!
// but by returning an object we can then use dot notation to access inside the closer "functional scope" and its values

var job = (()=>{
    let x = 'Melissa Guerra'
    let happy = function(a){
        return `${x} is ${a}`
    }
    return {
        hired: function(b){
            return  happy(b)
        }
    }
})()

console.log(job.hired('awesome'));