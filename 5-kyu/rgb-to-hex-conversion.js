const tskUrl = 'https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript';

function rgb(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return [r, g, b]
    .map((x) => {
      const hex = x.toString(16).toUpperCase();
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");
}
