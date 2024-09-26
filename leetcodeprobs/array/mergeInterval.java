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
function mergerinterval(arr){
    let ans = []
    for(let i = 0 ;i<arr.length;i++){
        let start = arr[i][0]
        let end = arr[i][1]

        if(ans.length && end<=ans[ans.length-1][1]){continue}
        for(let j = i+1;j<arr.length;j++){
            if(arr[j][0]<=arr[i][1]){
                end = Math.max(end,arr[j][1])
            }else{
                break
            }
        }
        ans.push([start,end])
    }

}

//optimal solution in js 

function mergeinterval(arr){
    //here also we sort the array 
    arr.sort((a,b)=>a[0]-b[0])
    let ans = [arr[0]]
    for(let i=1;i<arr.length;i++){
        let last = ans[ans.length-1];
        let cur = arr[i]
        if(cur[0]<=last[1]){
            last[1]=Math.max(last[1],cur[1])
        }
        else{
            ans.push(cur)
        }
    }
    return ans 
}
