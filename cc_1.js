function calcTip(bills) {
  const tip = bills >= 50  && bills <= 300 ? bills * 0.15 : bills * 0.20;
  return tip
}

const bills = [275,40,430]
const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])]

console.log(`The bill is ${bills}, the tip is ${tips}, the total is ${bills + tips}`);