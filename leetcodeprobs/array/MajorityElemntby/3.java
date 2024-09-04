/**
 prooblem https://leetcode.com/problems/majority-element-ii/description/

 229. Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
Example 1:

Input: nums = [3,2,3]
Output: [3]

solution : better solution is to use hashing 
          optimal solution is to use Moorse algo 
 */

//solution  better solution time complexity = O(N*logN), space complexity O(n)

function maj(arr) {
  let map = new Map();
  let ls = [];

  let mini = Math.floor(arr.length / 3) + 1;

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
    if (map.get(arr[i]) == mini) {
      ls.push(arr[i]);
    }
    if (ls.length == 2) {
      break;
    }
  }
  return ls;

}

//same in java

public class Main{
  public List<Integer> majorele(int[] arr){
    List<Integer> ls = new ArrayList<>();

    HashMap<Integer,Integer> mapp= new HashMap<>();
    int mini = (int)arr.length/3;

    for(int i = 0 ;i<arr.length;i++){
      int value = mapp.getorDefault(arr[i],0);
      mapp.put(arr[i],value+1);

      if(mapp.get(arr[i])==mini){
        ls.add(arr[i]);
      }
      if(ls.size()== 2)break;
    }
    return ls ;
  }  
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//optimal solution is to use moorse algo 
//in java  time comp O(n) +O(n) 


public class Main{
  public List<Integer> majele(int[] arr){
    int count1 =0;
    int count2=0;
    int ele1= Integer.MIN_VALUE;
    int ele2 = Integer.MIN_VALUE;

    for(int i = 0;i<arr.length;i++){
      if(count1==0 && ele2!= arr[i]){
        count1++;
        ele1=arr[i];
      }
      else if(count2 == 0 && ele1 !=arr[i]){
        count2++;
        ele2=arr[i];
      }
      else if(arr[i]== ele1) count1++;
      else if(arr[i]==ele2) count2++;
      else{
        count1--;
        count2--;
      }
    }

    List<Integer> ls = new ArrayList<Integer>();

    count1=0,count2=0;
    for(int i = 0 ;i<arr.length;i++){
      if(arr[i]==ele1)count1++;
      if(arr[i]==ele2)count2++;
    }

    int mini = (arr.length/3)+1;
    if(count1>=mini) ls.add(ele1);
    if(count2>=mini) ls.add(ele2);

    return ls;
  }

  public static void main(String[] args){
    int[] arr= {11,33,33,11,33,11};
    Main maj = new Main();
    List<Integer> ans = maj.majele(arr);
    for(int i =0 ;i<ans.size();i++){
      System.out.print(ans.get(i)+"");
    }
  }
}


//same in js 

function majorityElement(v) {
    let n = v.length; // size of the array

    let cnt1 = 0, cnt2 = 0; // counts
    let el1 = -Infinity; // element 1
    let el2 = -Infinity; // element 2

    // applying the Extended Boyer Moore's Voting Algorithm:
    for (let i = 0; i < n; i++) {
        if (cnt1 === 0 && el2 !== v[i]) {
            cnt1 = 1;
            el1 = v[i];
        }
        else if (cnt2 === 0 && el1 !== v[i]) {
            cnt2 = 1;
            el2 = v[i];
        }
        else if (v[i] === el1) cnt1++;
        else if (v[i] === el2) cnt2++;
        else {
            cnt1--, cnt2--;
        }
    }

    let ls = []; // list of answers

    // Manually check if the stored elements in
    // el1 and el2 are the majority elements:
    cnt1 = 0, cnt2 = 0;
    for (let i = 0; i < n; i++) {
        if (v[i] === el1) cnt1++;
        if (v[i] === el2) cnt2++;
    }

    let mini = Math.floor(n / 3) + 1;
    if (cnt1 >= mini) ls.push(el1);
    if (cnt2 >= mini) ls.push(el2);

    // Uncomment the following line
    // if it is told to sort the answer array:
    // ls.sort(); // TC --> O(2*log2) ~ O(1);

    return ls;
}

