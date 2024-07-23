const tskUrl = 'https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript';

function expandedForm(num) {
  let strNum = num.toString().split("");
  strNum = strNum.reduce((acc, i, index, arr) => {
    if (i !== "0") {
      acc.push(i + "0".repeat(arr.length - index - 1));
      return acc;
    } else {
      return acc;
    }
  }, []);
  return strNum.join(" + ");
}
