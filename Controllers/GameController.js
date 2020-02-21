var bank = new Bank();
var ironMiner = new IronMining();
var steelMills = new SteelMills();



/* SMELTER */
function ironSmelter() {
  if(ironMiner.getAmountCollect() >= 5) {
    steelMills.ironSmelter();
    const amountCastIron = 5;
    ironMiner.foundry(amountCastIron);
  } else {
    alert("You don't have the amount of iron you need!");
  }
}




