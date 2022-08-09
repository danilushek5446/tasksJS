function toStr(arr){
    let result = '';
    let start;
    let count = 0;
    for(let i = 0; i<arr.length-1; ++i){
        //console.log(arr[i], arr[i+1])
        if(arr[i+1] - arr[i] === 1 && count === 0){
            start = arr[i];
            count += 1;
            continue;
        } else if(arr[i+1] - arr[i] === 1 && count > 0){
            count += 1;
            continue;
        } else if(arr[i+1] - arr[i] != 1 && count >= 2){
            result += `${start}-${arr[i]},`;
            count = 0;
            continue;
        } else if(arr[i+1] - arr[i] != 1 && count === 1){
            result += `${start},${arr[i]},`;
            count = 0;
            continue;
        } else if(arr[i+1] - arr[i] != 1 && count === 0){
            result += `${arr[i]},`;
        }
    }
    if (count === 0) {
        result += arr[arr.length - 1];
    } else if (count >= 2){
        result += `${start}-${arr[arr.length - 1]}`;  
    } else {
        result += `${start},${arr[arr.length - 1]}`;
    }
    return result;
}
res = toStr([-6, -3, -2, -1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18]);
console.log(res);
