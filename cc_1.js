function calcTip(bill) {
  const tip = bill >= 50  && bill <= 300 ? bill * 0.15 : bill * 0.20;
  return tip
}

const bill = 100;
const tip = calcTip(bill);

console.log(`The bill is ${bill}, the tip is ${tip}, the total is ${bill + tip}`);