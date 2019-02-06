//call apply bind

let robert = {
    name: "robert",
    age: 30,
    job: "subway sandwitch artist",
    presentation: function (style,timeofday){
        if(style === 'formal'){
            console.log('Good ' + timeofday + ', Ladies and gentlmen! I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ', years old!' )
        }else if (style === "friendly"){
            console.log('hey whats up ' + this.name);
        }else{
            console.log('goodbye')
        }
    }
};

var emily ={
    name: "emily",
    age: 34,
    job: "dancer"
}

robert.presentation('formal','morning')

//CALL   aka method borrowing
//setting this var to emily
robert.presentation.call(emily,'friendly','afternoon');

//APPLY  uses array
//robert.presentation.apply(emily,['friendly','morning'])

//BIND doesn't invoke function
var robertFriendly = robert.presentation.bind(robert,"friendly");

//console.log('robertFriendly', robertFriendly);

robertFriendly('morning')