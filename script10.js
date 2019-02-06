
let Question = function(questions,answers,correct){
    this.questions = questions,
    this.answers = answers,
    this.correct = correct
}

Question.prototype.displayQ = function(){
    console.log('this.questions', this.questions)
    this.answers.forEach((element,index) => {
        return console.log('answers :', index + " " +  element)
    });
}

let q1 = new Question(
    'Is the sky blue?',
    ['yes','no'],
    0
)
let q2 = new Question(
    'Is the ocean blue?',
    ['yes','no'],
    0
)
let q3 = new Question(
    'Is the brown cow red?',
    ['yes','no'],
    1
)

let allQuestions = [q1,q2,q3];
let allQuestionsLength = allQuestions.length
var randomNumber = Math.floor(Math.random() * allQuestionsLength )
let selected =  allQuestions[randomNumber]
console.log('selected', selected.correct)
selected.displayQ();



init = () => {
    var thePrompt = prompt("please enter 0 for yes or 1 for no")
    thePrompt = parseInt(thePrompt)
    if(thePrompt > 1 ){
        alert('Please enter a valid answer 0 for yes or 1 for no. Lets try this again')
        init();
    }else if(selected.correct === thePrompt){
        console.log("YOU GOT THE CORRECT ANSWER!", selected.correct)
    }else{
        console.log('you suck at this game!')
    }
};


(function(){
    init();
})()