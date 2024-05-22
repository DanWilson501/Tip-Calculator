function calcTip(bills) {
  const tip = bills >= 50  && bills <= 300 ? bills * 0.15 : bills * 0.20;
  return tip
}

const bills = [275,40,430];
bills.forEach(bill => {
    const tip = calcTip(bill);
    const total = bill + tip;
    console.log(`The bill is ${bill}, the tip is ${tip}, the total is ${total}`)
});