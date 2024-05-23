// U5223-1368

function calcTip(bills) {
  const tip = bills >= 50  && bills <= 300 ? bills * 0.15 : bills * 0.20;
  return tip
}

function getTotals(bills) {
  bills.forEach(bill => {
      const tip = calcTip(bill);
      const total = bill + tip;
      console.log(`The bill is ${bill}, the tip is ${tip}, the total is ${total}`)
  });
}

console.log(`Data Set 1:`)
getTotals([275,40,430]);

console.log(`Data Set 2:`)
getTotals([125,555,44]);