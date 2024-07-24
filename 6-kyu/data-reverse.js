const tskUrl = 'https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript';

function dataReverse(data) {
    if (data.length === 0) return;
    const strSplit = data.join('').match(/.{1,8}/g).reverse().join('');
  return strSplit.split('').map(i => +i);
}
