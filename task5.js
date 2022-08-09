
const teen = ["десять ", "одиннадцать ", "двеннадцать ", "тринадцать ", "четырнадцать ", "пятнадцать ", 
"шестнадцать ", "семнадцать ", "восемнадцать ", "девятнадцать "];

const one = ["", "один ", "два ", "три ", "четыре ", "пять ", "шесть ", "семь ", "восемь ", "девять "];

const dec = ["", "", "двадцать ", "тридцать ", "сорок ", "пятьдесят ", "шестьдесят ", "семьдесят ", "восемьдесят ", "девяносто "];

const hunderd = ["", "сто", "двести ", "триста ", "четыреста ", "пятьсот ", "шестьсот ", "семьсот ", "восесот ", "девятьсот "];

function numToStr(num) {
  if (num === 0) return "ноль";
  let result = '';
  let arr = [];
  let flag = 0;
  while (num) {
    arr.unshift(num % 10);
    num /= 10;
    num = Math.trunc(num);
  }
  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (flag === 1) {
      flag = 0;
      result += 'тысяч ';
      j--;
      continue;
    }
    if (arr.length === 6) {
      result = 'сто тысяч';
      return result;
    }
    if (j === 4 && arr[i] === 1) {
      result += teen[arr[i + 1]];
      flag = 1;
      j--;
      continue;
    } else if (j === 4) {
      result += dec[arr[i]];
      j--;
      continue;
    } else if (j === 3) {
        if (arr[i] > 2){
          result += one[arr[i]]; 
        }
        if (arr[i] === 2){
          result += "две ";
        } 
        if (arr[i] > 1 && arr[i] < 5){
          result += "тысячи ";
        } else if (arr[i] === 1) {
          result += "одна тысяча "; 
        } else {
          result += "тысяч ";
        }
        j--;
        continue;
    } else if (j === 2) {
        result += hunderd[arr[i]];
        j--;
        continue;
    } else if (j === 1) {
        if (arr[i] === 1) {
          result += teen[arr[i + 1]];
          return result;
        } else {
          result += dec[arr[i]];
        }
        j--;
        continue;
    } else if (j === 0) {
        if (arr[i] !== 0) {
          result += one[arr[i]];
        }
        return result;
    }
  }
}


let a = numToStr(1011);
console.log(a);