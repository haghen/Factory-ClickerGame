automaticIronMining = function () {
  if (ironMiner.workers >= 1) {
    ironMiner.automaticMining();
  };
  setTimeout(automaticIronMining, ironMiner.miningTime);
}
automaticIronMining();
automaticStoneMining = function () {
  if (stoneMiner.workers >= 1) {
    stoneMiner.automaticMining();
  };
  setTimeout(automaticStoneMining, stoneMiner.miningTime);
}
automaticStoneMining();
