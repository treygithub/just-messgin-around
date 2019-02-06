
let Question = function(questions,answers,correct){
    this.questions = questions,
    this.answers = answers,
    this.correct = correct
}

Question.prototype.displayQ = function(){
    console.log( this.questions)
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

let score = 0;
let allQuestions = [q1,q2,q3];
let allQuestionsLength = allQuestions.length
var randomNumber = Math.floor(Math.random() * allQuestionsLength )
let selected =  allQuestions[randomNumber]

totalReset = () => {
score = 0;
allQuestions = [q1,q2,q3];
allQuestionsLength = allQuestions.length
randomNumber = Math.floor(Math.random() * allQuestionsLength )
selected =  allQuestions[randomNumber]
}

reset = () =>{
    allQuestions.splice(randomNumber,1);
    score++;
    allQuestionsLength = allQuestions.length;
    randomNumber = Math.floor(Math.random() * allQuestionsLength )
    selected =  allQuestions[randomNumber]
}
resetWrongAnswer = () =>{
    allQuestions.splice(randomNumber,1);
    score = score;
    allQuestionsLength = allQuestions.length;
    randomNumber = Math.floor(Math.random() * allQuestionsLength )
    selected =  allQuestions[randomNumber]
}

next=()=>{
    if(allQuestionsLength >= 1){
    console.log('Correct Answer! Your score is: ' + score)
    init();
    }else{
        thePrompt = prompt('would you like to play again ? type yes or no ...')
        thePrompt =  thePrompt.toLowerCase()
        if(thePrompt === 'yes'){
            totalReset()
            init();
        }else{
            return;
        }
    }
}
nextWrongAnswer=()=>{
    if(allQuestionsLength >= 1){
    console.log('WRONG! Your score is: ' + score)
    init();
    }else{
        thePrompt = prompt('would you like to play again ? type yes or no ...')
        thePrompt =  thePrompt.trim().toLowerCase()
        if(thePrompt === 'yes'){
            allQuestions = [q1,q2,q3]
            init();
        }else{
            console.log('game over!')
        }
    }
}


init = () => {
    selected.displayQ();
    var thePrompt = prompt("please enter 0 for yes or 1 for no")
    thePrompt = parseInt(thePrompt)
    if(thePrompt > 1 ){
        alert('Please enter a valid answer 0 for yes or 1 for no. Lets try this again');
        init();
    }else if(selected.correct === thePrompt){
        reset();
        next();
    }else if(selected.correct !== thePrompt){
        resetWrongAnswer();
        nextWrongAnswer();

    }
};


(function(){
    init();
})();