function maskify(cc: string): string {
    if (cc.length <= 4) return cc;

    let strMap = cc.split('');
    strMap = strMap.map((i, index, arr) => {
      if (index + 1 <= arr.length - 4) {
        return '#';
      }
      return i;
    })

      return strMap.join('');
  }
