
function miningIron() {
  ironMiner.miningIron();
}
function sellIron() {
  if(ironMiner.resourceCollected >= 1) {
    const sellingAmount = ironMiner.sellIron();
    bank.moneyDeposit(sellingAmount);
    ironMiner.setAmountIron(ironMiner.resourceCollected);
  } else {
    alert("You don't have enough iron ores for a sale!");
  }
}
function hireNewWorkersIronMine() {
  if(bank.money >= ironMiner.valueToHire) {
    ironMiner.hireWorkers();
    bank.withdrawnMoney(ironMiner.valueToHire);
    ironMiner.salaryIncrease();
    ironMiner.miningRefinement();
    
  } else {
    alert("You don't have the money to hire new workers!");
  }
}