function compare(compString){
    const result = [];
    for (let i = 1; i<compString.length; ++i){
        result.push(compString[i][0] === compString[i-1][0]  && 
            compString[i][compString[i].length-1]  === compString[i-1][compString[i-1].length-1])
    }
    return(result);
}

let a = ["asd", "afffd", "cc", "kk", 'kasdasdasdk'];

let b = compare(a);

console.log(b);