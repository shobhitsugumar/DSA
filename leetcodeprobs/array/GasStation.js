/*
problem : Gas station 
         Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
         Output: 3

         the cost is how much pertol it consuems to go to next one 

         solution : we use greedy algo 

                    case one : we start from 0 gas we start from one gas station we put gas and we move to other one the distance to 
                               another gas station it consumes some gas to reach other one so that is cost we subtract with the gas 
                               if gas - cost is less than 0 then we can not go further 
                               if the gas - cost is greater than the 0 then we can consider that as start index


*/

const gasstation = (gas, cost) => {
  //we do the base case  if the total cost is greater than the gas then  we can return -1

  let total = 0;
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
  }

  if (total < 0) {
    return -1;
  }

  let remaining = 0;
  let startindex = 0;

  for (let i = 0; i < gas.length; i++) {
    let currentgas = gas[i] + remaining;
    let currentcost = cost[i];
    remaining = currentgas - currentcost;

    if (remaining < 0) {
      remaining = 0;
      startindex = i + 1;
    }
  }
  return startindex;
};
