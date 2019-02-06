//closure

function interviewQuestions(job){
    return function(name){
        console.log(job + " " + name )
    }
}

interviewQuestions('teacher')('rob')