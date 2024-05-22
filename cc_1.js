const bill = 100;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill is ${bill}, the tip is ${tip}, the total is ${bill+tip}`);