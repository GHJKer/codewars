const link = 'https://www.codewars.com/kata/58223370aef9fc03fd000071/train/typescript'

function dashatize(num: number): string {
    function isOdd(n: number): boolean {
      return !Number.isInteger(n / 2)
    }

    const strArr = num.toString().split('');

    if (strArr[0] === '-') {
      strArr.shift()
    }

    let str = strArr.reduce((acc, i) => {
      if (isOdd(+i)) {
        if (acc.slice(-1) === '-' || acc.length === 0) {
          i =  i + '-';
        } else {
        i = '-' + i + '-';
        }
      }
      return acc + i;
    }, '')

    if (str.slice(-1) === '-') {
      str = str.slice(0, -1);
    }
    return str;
  }
