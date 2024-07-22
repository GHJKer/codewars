const tskUrl = 'https://www.codewars.com/kata/shortest-word/train/javascript';

function findShort(s){
    let strings = s.split(' ');
    let numbers = strings.map(item => item.length);
    let minNum = Math.min(...numbers);

    return minNum;
  }
