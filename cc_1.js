function calcTip(bills) {
  const tip = bills >= 50  && bills <= 300 ? bills * 0.15 : bills * 0.20;
  return tip
}

console.log(`Data Set 1:`)
const bills_1 = [275,40,430];
bills_1.forEach(bill => {
    const tip = calcTip(bill);
    const total = bill + tip;
    console.log(`The bill is ${bill}, the tip is ${tip}, the total is ${total}`)
});

console.log(`Data Set 2:`)
const bills_2 = [125,555,44];
bills_2.forEach(bill => {
    const tip = calcTip(bill);
    const total = bill + tip;
    console.log(`The bill is ${bill}, the tip is ${tip}, the total is ${total}`)
});