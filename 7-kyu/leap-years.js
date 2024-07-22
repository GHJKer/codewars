const tskUrl = 'https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript';

function isLeapYear(year) {
    if (year < 1600 || year > 4000) return false;
    if (Number.isInteger(year / 400)) {
      return true;
    }
      if (Number.isInteger(year / 100)) {
      return false;
    }
    if (Number.isInteger(year / 4)) {
      return true;
    }
    return false;
  }
