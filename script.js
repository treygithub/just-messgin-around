var trey = {
    'name': 'robert',
    'height':6,
    'weight':270
}

checkObj=(check)=>{
    if(trey.hasOwnProperty(check)){
        return `property "${check}" was found and value of property is "${trey[check]}" `
    }else{
        return "not found"
    }
}

console.log(checkObj('name'))