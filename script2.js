var todoArray = [];
var input = prompt("what would you like to do?");
while(input != 'quit' ){
    if(input === 'add'){
        let newtodo = prompt("Enter Name of new todo");
        todoArray.push(newtodo);
    }else if (input === 'list'){
       todoArray.forEach(function(e,i){
           console.log(e,i)
       })
    }else if ( input === 'delete'){
        var delete1 = prompt("Enter todo item number too delete");
        todoArray.splice(delete1,1);
        console.log(todoArray);
    }
    input = prompt("what would you like to do?");
}
console.log("quit")
