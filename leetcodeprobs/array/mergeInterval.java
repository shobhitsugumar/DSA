//problem : https://leetcode.com/problems/merge-intervals/description/

/**
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

solution Better solution : is to use two loop we take start and end (1,3) 1 is start and 3 is end we compare end with the next j start 
                             if it is less then we compare the end with j end then which is greater we put them as end then we push them in 
                             to new array ans 
 */

//better solution in java 

public class mergeinterval{
    public static List<List<Integer>> mergerintervals(int[] arr){
        //sort the array 
        Array.sort(arr,new Comparator<int[]>()){
            public int compare(int[] a, int[] b ){
                return a[0]-b[0];
            }
        }

        List<List<Integer>> ans = new ArrayList<>();
        for(int i = 0 ;i < arr.length,i++){
            int start = arr[i][0];
            int end = arr[i][1];

            //skip all the merged interval 
            if(!ans.isEmpty() && end <= ans.get(ans.size()-1).get(1)){
                continue;
            }

            for(int j=i+1;j<n;j++){
                if(arr[j][0]<=end){
                    end=Math.max(end,arr[j][1]);
                }
                else{
                    break;
                }
            }
            ans.add(Array.asList(start,end));
        }
        return ans;
    }
}



//in js 
function mergeOverlappingIntervals(arr) {
  const n = arr.length; // size of the array

  //sort the given intervals:
  arr.sort((a, b) => a[0] - b[0]);

  const ans = [];

  for (let i = 0; i < n; i++) { // select an interval:
    let start = arr[i][0];
    let end = arr[i][1];

    //Skip all the merged intervals:
    if (ans.length && end <= ans[ans.length - 1][1]) {
      continue;
    }

    //check the rest of the intervals:
    for (let j = i + 1; j < n; j++) {
      if (arr[j][0] <= end) {
        end = Math.max(end, arr[j][1]);
      } else {
        break;
      }
    }
    ans.push([start, end]);
  }
  return ans;
}
