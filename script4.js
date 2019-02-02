let john = [89,120,103];
let mike = [116,94,123];

let johnSum = 0;
let mikeSum = 0;

let mikeAvg = 0;
let johnAvg = 0;

//sum
for(let i = 0; i < john.length; i++){
    johnSum = johnSum + john[i]
}

mike.forEach(element => {
     mikeSum = mikeSum + element
});

//avg
(mSum = () => {
    mikeAvg = mikeSum / mike.length;
})();


(jSum = () => {
    johnAvg = johnSum / john.length;
})();

//function producer winner or tie based on highest avg score

switch (true){
    case mikeAvg > johnAvg :
        console.log(`Mike is the winner with the avg score of ${mikeAvg}`);
        break;
    case mikeAvg < johnAvg :
        console.log(`John is the winner with avg score of ${johnAvg}` );
        break
    case mikeAvg === johnAvg :
    console.log(` We have a tie mike avg was ${mikeAvg} & john avg was ${johnAvg}` )
}