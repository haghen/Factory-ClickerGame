var bank = new Bank();
var ironMiner = new IronMining();
var steelMills = new SteelMills();

setInterval(function renderCoins() {
  //BANK
  
  document.getElementById("money").innerHTML = "Money: $ " + bank.getMoneyBalance();
  //IRON MINER:
  document.getElementById("mined-iron").innerHTML = "Mined Iron: " + ironMiner.resourceCollected;
  document.getElementById("amount-workers").innerHTML = "Workers: " + ironMiner.workers;
  document.getElementById("workers-salary").innerHTML = "Workers' Salary: $ " + ironMiner.valueToHire.toFixed(2);
  document.getElementById("iron-selling-value").innerHTML = "Sale Value: $" + ironMiner.getSaleValue();
  document.getElementById("sell-iron").innerHTML = "Sell";
  document.getElementById("hire-workers-ironmine").innerHTML = "Hire Workers!";
  //IRON SMELTER:
  document.getElementById("iron-ingot").innerHTML = "Iron Bars: $" + steelMills.getIronIngotAmount();
  document.getElementById("amount-workers-smelter").innerHTML = "Workers: $" + steelMills.getWorkersAmount();
  document.getElementById("workers-salary-smelter").innerHTML = "Salary: $" + steelMills.getWorkersSalary();
  document.getElementById("iron-ingot-selling-value").innerHTML = "Sale Value: $" + steelMills.getIronIngotSellingValue();        
})
/* IRON MINER */
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
/* IRON SMELTER */
function ironSmelter() {
  if(ironMiner.getAmountCollect() >= 5) {
    steelMills.ironSmelter();
    const amountCastIron = 5;
    ironMiner.foundry(amountCastIron);
  } else {
    alert("You don't have the amount of iron you need!");
  }
}

automaticIronMining = function () {
  if (ironMiner.workers >= 1) {
    ironMiner.automaticMining();
  };
  setTimeout(automaticIronMining, ironMiner.miningTime);
}

automaticIronMining();


