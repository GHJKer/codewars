function findUniq(arr) {
    let obj = {};
for (let i of arr) {
  if (obj[i]) {
    obj[i].push(i)
  } else {
    obj[i] = [i];
  }
}
return Object.values(obj).filter(i => i.length === 1)[0][0];
}
