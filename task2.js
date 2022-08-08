let result = [];
function flat(arr){
    for(let i = 0; i<arr.length; ++i){
        if(Array.isArray(arr[i])) 
        flat(arr[i]); else 
        result.push(arr[i]);
    }
    return result;
}
flat([1,[4,1,[9,9]], 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])
console.log(result)