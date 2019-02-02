tips = [];


function tipper(bill){
    if( bill < 50 ){
        let tip = bill *.2;
        tips.push(tip)

    } else if (bill > 49 && bill <=200 ){
        let tip = bill *.15
         tips.push(tip)
    }else{
        let tip =  bill * .1
         tips.push(tip)
    }
}
tipper(200);
tipper(20)
tipper(2068)


console.log('tips', tips)

