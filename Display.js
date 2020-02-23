setInterval(function renderCoins() {
  //BANK  
  document.getElementById("money").innerHTML = "Money: $ " + bank.getMoneyBalance();
  //STONE MINER:
  document.getElementById("mined-stone").innerHTML = "Mined Stone: " + stoneMiner.resourceCollected;
  document.getElementById("amount-workers-stone").innerHTML = "Workers: " + stoneMiner.workers;
  document.getElementById("workers-salary-stone").innerHTML = "Workers' Salary: $ " + stoneMiner.valueToHire.toFixed(2);
  document.getElementById("stone-selling-value").innerHTML = "Sale Value: $" + stoneMiner.getSaleValue();
  document.getElementById("sell-stone").innerHTML = "Sell";
  document.getElementById("hire-workers-stonemine").innerHTML = "Hire Workers!";
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