class StoneMining {
  collect = 1;
  resourceCollected = 0;
  saleValue = 0.25;
  totalSale = 0.00;
  workers = 0;
  valueToHire = 0.65;
  miningTime = 1000;

  miningStone() {
    this.resourceCollected += this.collect;
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
  getValueToHire() {
    return this.valueToHire;
  }  
  setAmountStone(amount) {
    this.resourceCollected -= amount;
  }
  sellStone() {
    return this.resourceCollected * this.saleValue;
  }
  hireWorkers() {
    this.miningTimeIncrease();
    return this.workers += 1;    
  }
  salaryIncrease() {
    this.valueToHire += (this.valueToHire * 0.25);
  }
  miningRefinement() {
    this.saleValue += this.saleValue * 0.04;
  }
  miningTimeIncrease() {
    this.miningTime += 45;
  }
  automaticMining() {
    this.resourceCollected += this.workers;
  }
  foundry(amountCastStone) {
    this.resourceCollected -= amountCastStone;
  }
}