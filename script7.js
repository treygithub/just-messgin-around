const names = ["hello", 10, true, "world"];
const nameLength = names.length;

//this guy returns "hello", "world"
for(let i = 0; i < nameLength; i++){
    if(typeof names[i] !== 'string') continue;
    console.log('names[i] with continue', names[i])
}

for(index = 0;index < nameLength;index++){
    if(typeof names[index] !== 'string') break;
    console.log('names[i] with break statment', names[index])
}