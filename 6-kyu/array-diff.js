const tskUrl = 'https://www.codewars.com/kata/array-dot-diff/train/javascript';

function arrayDiff(a, b) {
    let newArr = a;
    for (let i of b) {
      newArr = newArr.filter(t => t !== i)
    }

    return newArr;
  }
