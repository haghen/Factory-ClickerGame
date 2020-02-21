class Bank {
  money = 0.00;
  /* Consuta de saldo */
  getMoneyBalance() {
    return this.money.toFixed(2);
  }
  /* Depósito de dinheiro */
  moneyDeposit(depositedMoney) {
    this.money += depositedMoney;
  }
  /* Saque de dinheiro */
  withdrawnMoney(debitedAmount) {
    this.money -= debitedAmount;
  }
}