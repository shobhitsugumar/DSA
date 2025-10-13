var canCompleteCircuit = function (gas, cost) {
  let total = 0;

  let startindex = 0;
  let remaining = 0;

  for (let i = 0; i < gas.length; i++) {
    current = gas[i] + remaining;
    remaining = current - cost[i];
    total = total + gas[i] - cost[i];

    if (remaining < 0) {
      remaining = 0;
      startindex = i + 1;
    }
  }
  return total >= 0 ? startindex : -1;
};
