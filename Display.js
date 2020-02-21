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
  /*
  //IRON SMELTER:
  document.getElementById("iron-ingot").innerHTML = "Iron Bars: $" + steelMills.getIronIngotAmount();
  document.getElementById("amount-workers-smelter").innerHTML = "Workers: $" + steelMills.getWorkersAmount();
  document.getElementById("workers-salary-smelter").innerHTML = "Salary: $" + steelMills.getWorkersSalary();
  document.getElementById("iron-ingot-selling-value").innerHTML = "Sale Value: $" + steelMills.getIronIngotSellingValue();
  */       
})