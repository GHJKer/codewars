const tskUrl = 'https://www.codewars.com/kata/lottery-ticket/train/javascript';

function bingo(ticket, win) {
    let miniWins = 0;
    ticket.forEach(i => {
      let [str, code] = i;
      let innerCount = 0;

      str.split('').forEach(t => {
        if (t.charCodeAt() === code) {
          innerCount++
          if (innerCount <= 1) {
          miniWins++;
          }
        }
      })
    })

    if (miniWins >= win) {
      return 'Winner!';
    } else {
      return 'Loser!';
    }
}
