const bill = 100;
const tip = bill <= 120 && bill >= 50 ? bill * 0.1 : bill * 0.2;

console.log(`The bill was ${bill}, the tip will be ${tip}, and the total bill comes to ${bill + tip}`)