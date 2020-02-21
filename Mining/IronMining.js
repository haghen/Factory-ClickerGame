class IronMining {
  collect = 1;
  resourceCollected = 0;
  saleValue = 0.45;
  totalSale = 0.00;
  workers = 0;
  valueToHire = 1.15;
  miningTime = 1000;

  miningIron() {
    this.resourceCollected += this.collect;
  }
  setAmountIron(amount) {
    this.resourceCollected -= amount;
  }
  getAmountCollect() {
    return this.resourceCollected;
  }
  getAmountWorkers() {
    return this.workers;
  }
  getSaleValue() {
    return (this.resourceCollected * this.saleValue).toFixed(2);
  }
  sellIron() {
    return this.resourceCollected * this.saleValue;
  }
  hireWorkers() {
    this.miningTimeIncrease();
    return this.workers += 1;    
  }
  salaryIncrease() {
    this.valueToHire += (this.valueToHire * 0.45);
  }
  miningRefinement() {
    this.saleValue += this.saleValue * 0.03;
  }
  miningTimeIncrease() {
    this.miningTime += 75;
  }
  automaticMining() {
    this.resourceCollected += this.workers;
  }
  foundry(amountCastIron) {
    this.resourceCollected -= amountCastIron;
  } 
}