const tskUrl = 'https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript';

function countSmileys(arr) {
  function checkStr(s, chars) {
    return s.includes(chars[0]) || s.includes(chars[1]);
  }
  return arr.reduce((acc, i) => {
    if (
      !checkStr(i, [";", ":"]) ||
      i.length > 3 ||
      (i.length > 2 && !checkStr(i, ["-", "~"]))
    )
      return acc;
    if (checkStr(i, [")", "D"])) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}
