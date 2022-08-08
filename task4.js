
function power(num, pow){
    if (pow === 1) {
        return num;
    }else return num *= power(num, pow-1);
}

let a = power(2, 4);
console.log(a);
