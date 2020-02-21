automaticIronMining = function () {
  if (ironMiner.workers >= 1) {
    ironMiner.automaticMining();
  };
  setTimeout(automaticIronMining, ironMiner.miningTime);
}
automaticIronMining();
