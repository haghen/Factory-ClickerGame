class SteelMills {
  ironIngot = 0;
  ironIngotSellingValue = 5.75;
  workers = 0;
  workersSalary = 15.75;

  ironSmelter() {
    this.ironIngot += 1;
  }
  getIronIngotAmount() {
    return this.ironIngot;
  }
  getIronIngotSellingValue() {
    return this.ironIngotSellingValue * this.ironIngot;
  }
  getWorkersAmount() {
    return this.workers;
  }
  getWorkersSalary() {
    return this.workersSalary;
  }
}