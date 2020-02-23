function miningStone() {
  stoneMiner.miningStone();
}
function sellStone() {
  if(stoneMiner.resourceCollected >= 1) {
    const sellingAmount = stoneMiner.sellStone();
    bank.moneyDeposit(sellingAmount);
    stoneMiner.setAmountStone(stoneMiner.resourceCollected);
  } else {
    alert("You don't have enough stone ores for a sale!");
  }
}
function hireNewWorkersStoneMine() {
  if(bank.money >= stoneMiner.getValueToHire()) {
    stoneMiner.hireWorkers();
    bank.withdrawnMoney(stoneMiner.getValueToHire());
    stoneMiner.salaryIncrease();
    stoneMiner.miningRefinement();    
  } else {
    alert("You don't have the money to hire new workers!");
  }
}