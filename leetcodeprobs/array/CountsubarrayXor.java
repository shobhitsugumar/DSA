/**
 porblem:Count the number of subarrays with given xor K 
 
 Example 1:
Input Format:
 A = [4, 2, 2, 6, 4] , k = 6
Result:
 4
Explanation:
 The subarrays having XOR of their elements as 6 are  [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], [6]



 solution : 1 : is to use 3 for loop i and j and another loop for doing xor and checking if xor is equal to k then we count 1 \
                Time  Complexity : O(n3)
            2 : is to use 2 for loop and simulatenously we do xor 
                time complexiyt :O(n2)
            3 : we use hash map to store the value and check if the starting value is there in the hash map 
                we first find the xr whcih is the xor or the value then we find the x =xr ^ k  then we check if the x is there in the map 
  
 */

// better solution

function xor(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let xor = 0;
    for (let j = i; j < arr.length; j++) {
      xor = xor ^ arr[j];
      if (xor === k) {
        count++;
      }
    }
  }
  return count;
}

//optimal solution

function xor(arr, k) {
  let map = new Map();
  let xr = 0;
  map.set(xr, 1);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    xr = xr ^ arr[i];

    let x = xr ^ k;

    count += map.get(x) || 0;

    map.set(xr, (map.get(xr) || 0) + 1);
  }
  return count;
}


//in java 

public class Xor{
  public static int subarrayXor(int[] arr, int k){
    int xr=0;
    Map<Interger ,Interger>map = new HashMap<>();
    map.put(xr,1);
    int cnt = 0;

    for(int i = 0;i<arr.length;i++){
      xr = xr ^ arr[i];

      int x= xr ^ k;

      if(map.containsKey(x)){
        cnt += map.get(x)
      }

      if(map.containsKey(xr)){
        map.put(xr,map.get(xr)+1);
      }else{
        map.put(xr,1);
      }

    }
    return cnt;

  }

  public static void main(String[] args){
    int[ ] arr= {4,2,2,6,4};
    int k = 0;
    int ans = subarrayXor(arr,k);
    System.out.println(ans)

  }
}