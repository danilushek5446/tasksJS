function compare(compString){
    let tempStr = compString[0];
    let firstLetter = tempStr[0],
    lastLetter = tempStr[tempStr.length-1];
    let result = [];
    for (let i = 1; i<compString.length; ++i){
        tempStr = compString[i];
        if(firstLetter === tempStr[0] && lastLetter === tempStr[tempStr.length -1]) {
            result.push(true);}
             else result.push(false);
        firstLetter = tempStr[0];
        lastLetter = tempStr[tempStr.length-1];
    }
    return(result);
}

let a = ["asd", "afffd", "cc", "kk"];

let b = compare(a);

console.log(b);