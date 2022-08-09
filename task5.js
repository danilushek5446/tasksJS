
function teenSwitch(num) {
  switch (num) {
    case 0: return "десять ";
    case 1: return "одиннадцать ";
    case 2: return "двеннадцать ";
    case 3: return "тринадцать ";
    case 4: return "четырнадцать ";
    case 5: return "пятнадцать ";
    case 6: return "шестнадцать ";
    case 7: return "семнадцать ";
    case 8: return "восемнадцать ";
    case 9: return "девятнадцать ";
  }
}

function oneSwitch(num) {
  switch (num) {
    case 1: return "один ";
    case 2: return "два ";
    case 3: return "три ";
    case 4: return "четыре ";
    case 5: return "пять ";
    case 6: return "шесть ";
    case 7: return "семь ";
    case 8: return "восемь ";
    case 9: return "девять ";
  }
}

function decSwitch(num) {
  switch (num) {
    case 2: return 'двадцать ';
    case 3: return "тридцать ";
    case 4: return "сорок ";
    case 5: return "пятьдесят ";
    case 6: return "шестьдесят ";
    case 7: return "семьдесят ";
    case 8: return "восемьдесят ";
    case 9: return "девяносто ";
  }
}

function hundredsSwitch(num) {
  switch (num) {
    case 0: return "";
    case 1: return "сто ";
    case 2: return "двести ";
    case 3: return "триста ";
    case 4: return "четыреста ";
    case 5: return "пятьдесят ";
    case 6: return "шестьсот ";
    case 7: return "семьсот ";
    case 8: return "восесот ";
    case 9: return "девятьсот ";
  }
}

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
      result += teenSwitch(arr[i + 1]);
      flag = 1;
      j--;
      continue;
    } else if (j === 4) {
      result += decSwitch(arr[i]);
      j--;
      continue;
    } else if (j === 3) {
      if (arr[i] > 2) result += oneSwitch(arr[i]); 
      else {
        if (arr[i] === 1) {
          result += "одна тысяча "; 
        } else result += "две ";
      }
      if (arr[i] > 1 && arr[i] < 5) result += "тысячи "; else result += "тысяч ";
      j--;
      continue;
    } else if (j === 2) {
      result += hundredsSwitch(arr[i]);
      j--;
      continue;
    } else if (j === 1) {
      if (arr[i] === 1) {
        result += teenSwitch(arr[i + 1]);
        return result;
      } else {
        result += decSwitch(arr[i]);
      }
      j--;
      continue;
    } else if (j === 0) {
      if (arr[i] !== 0) {
        result += oneSwitch(arr[i]);
      }
      return result;
    }
  }
}


let a = numToStr(2011);
console.log(a);