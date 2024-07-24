const tskUrl = 'https://www.codewars.com/kata/proof-read/train/javascript';

function proofread(str) {
  let newStr = str.toLowerCase().replaceAll("ie", "ei").split(". ");
  newStr = newStr.map((i) => {
    return i[0].toUpperCase() + i.slice(1);
  });
  return newStr.join(". ");
}
