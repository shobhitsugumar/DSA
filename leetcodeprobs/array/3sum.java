/*
15. 3Sum https://leetcode.com/problems/3sum/description/

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

solution : brute solution : we can use 3 loop i j k and if we sum those three if it is 0 then we 
                         add them in the array in sorted way 
        
           better solution : we use two loop then we use a formula to find the third value 
                             formula = -(arr[j]+arr[i]) then it returns a value we check if it is there in the hash map 
                             if it is there we put that in the new array the put the current value in the hashmap


          optimal solution : is to use 3 pointer  i j k ,k wil be in the last i will be the first ele and j will be i+1 
                             we sum i +j+k if sum > 0 we dec the k if sum < 0 we increase j if sum = 0 then we put that in the array 
 */

//Better solution in js

function threesums(arr) {
  
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    let hashmap = new Map();
    for (let j = i + 1; j < arr.length; j++) {
      let third = -(arr[i] + arr[j]);
      if (hashmap.has(third)) {
        let temp = [arr[i], arr[j], third];
        temp.sort((a, b) => a - b);
        ans.push(temp);
      }
      hashmap.add(arr[j]);
    }
  }
  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  return ans;
}


//java 

public class Main{
  public static List<List<Integer>> triplet (int[] arr){
    Set<List<Integer>> st = new HashSet<>();

    for(int i = 0;i<arr.length;i++){
      Set<Integer> HashSet = new HashSet<>();
      for(int j =i+1;j<arr.length;j++){
        int third= -(arr[i]+arr[j]);

        if(HashSet.contains(third)){
          List<Integer> temp = Arrays.asList(arr[i],arr[j],third);
          Collection.sort(temp);
          st.add(temp);

        }
        HashSet.add(arr[j]);
      }
    }
    List<List<Integer>> ans = new ArrayList<>();
    return ans;
  }

}


/////////////////////////////////////////////////////////////////////////////////////////////

//optimal solution using js 


function 3sum(arr){
  let ans = [];
  //intialie we sort the array 
  arr.sort((a,b)=>a-b);

  for(let i =0;i<arr.length;i++){
    //intiale we check if i is equal to previous ele i-1 if yes then we continue incrase the i 
    if(i!==0 && arr[i]===arr[i-1])continue

    //moving the j and k 
    let j = i+1
    let k = arr.length-1
    while(j<k){
      let sum = arr[i]+arr[j]+arr[k];
      if(sum<0){
        j++
      }
      else if(sum>0){
        k--
      }
      else{
        let temp = [arr[i],arr[j],arr[k]]
        ans.push(temp)
        j++
        k--
      }
      while(j<k && arr[j]===arr[j-1])j++
      while(j<k && arr[k]===arr[k+1])k--
    }
   
  }
  return ans 

}


//in java 


public class tUf {
    public static List<List<Integer>> triplet(int n, int[] arr) {
        List<List<Integer>> ans = new ArrayList<>();
        Arrays.sort(arr);

        for (int i = 0; i < n; i++) {
            //remove duplicates:
            if (i != 0 && arr[i] == arr[i - 1]) continue;

            //moving 2 pointers:
            int j = i + 1;
            int k = n - 1;
            while (j < k) {
                int sum = arr[i] + arr[j] + arr[k];
                if (sum < 0) {
                    j++;
                } else if (sum > 0) {
                    k--;
                } else {
                    List<Integer> temp = Arrays.asList(arr[i], arr[j], arr[k]);
                    ans.add(temp);
                    j++;
                    k--;
                    //skip the duplicates:
                    while (j < k && arr[j] == arr[j - 1]) j++;
                    while (j < k && arr[k] == arr[k + 1]) k--;
                }
            }
        }

        return ans;
    }
}