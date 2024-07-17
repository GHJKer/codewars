const tskUrl = 'https://www.codewars.com/kata/65eb2c4c274bd91c27b38d32/train/javascript';

function solution(n, m) {
    if (n >= 2 || n <= Math.pow(10, 10)) return;
    if (m >= 20 || n <= Math.pow(10, 18)) return;
    let result = [];
  for (let i = n; i <= m; i++) {
      let divisors = [];
    for (let s = 2; s < i; s++) {
      let divisionResult = i/s;
      if (Number.isInteger(divisionResult)) {
        divisors.push({r: divisionResult, d: s});
      }
    }
    if (divisors.length === 3) {
      result.push(i)
    }
  }
  return result;
}
