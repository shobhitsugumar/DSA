/*
problem : 18. 4Sum https://leetcode.com/problems/4sum/description/

Input: nums = [2,2,2,2,2], target = 8

solution : same as 3sum for better solution we use hashmap 
           optimal soltion we use i j k l where i and j are constant and we move the k and l 
           same if sum > 0 we move l -- 
           if sum < 0 we move k ++ 
           if both are same we put them in a temp array 



 */

//better solution :timecomplexity : O(n3) space :O(n)


function 4sum(nums,target){
    let set = new Set()
    for(let i = 0 ;i<nums.length;i++){
        for(let j+1;j<nums.length;j++){
            let hashset = new set()
            for(let k =j+1;k<nums.length;j++){
                let sum = nums[i]+nums[j]+nums[k]
                let fourth= target - sum
                if(hashset.has(fourth)){
                    let temp =[nums[i],nums[j],nums[k],fourth]
                    temp.sort((a,b)=>a-b)
                    set.add(temp)

                }
                hashset.add(nums[k])
            }

        }

    }
    //we need to return the ans in array format
     let ans = Array.from(set)
     return ans
}


// in java 

public class Main{
    public static List<List<Integer>> 4sums(int[] nums,int target){
        Set<List<Integer>> st = new HashSet<>();
        for(int i =0;i<nums.length;i++){
            for(int j=i+1;j<nums.length;j++){
                //this set is to store the number and we use this to check if target - sum is there in this one 
                Set<Long> hashset = new HashSet<>();
                for(int k = j+1;k<nums.length;k++){
                     // taking bigger data type
                    // to avoid integer overflow:
                    long sum =nums[i]+nums[j]+nums[k];
                    long fourth =  target -sum;
                    if(hashset.contains(fourth)){
                        //create a list to store the i  j k fourth
                        List<Integer> temp = new ArrayList<>();
                        temp.add(nums[i]);
                        temp.add(nums[j]);
                         temp.add(nums[k]);
                         //before adding fourth into the temp we need to convert from long to int
                        temp.add((int)fourth);
                        //we can also write temp.sort((a,b)->a-b)
                        //but we use Interger::comapare incase if the value are bigger 
                        temp.sort(Integer::compare);
                        st.add(temp);

                    }
                    hashset.add((long)nums[k]);

                }
            }
        }
        //RETURN TYPE SHOULD BE IN LIST FORMAT 
        List<List<Integer>> ans = new ArrayList<>(st);
        return ans;
    }
}


//optimal solution 


public class Main{
    public static List<List<Interger>> foursum(int[] nums,int target){
        List<List<Integer>> ans = new HashSet<>();

        Array.sort(nums);

        for(int i = 0 ;i<nums.length;i++){
            if(i >0 && nums[i]==nums[i-1])continue;
            for(int j =i+1;j<nums.length;j++){
                if(j>0&&nums[j]==nums[j-1])continue

                int k = j+1;
                int l = nums.length-1;
                while(k<l){
                    long sum = nums[i] + nums[j]+nums[k]+nums[l];
                    if(sum ==target){
                        List<Interger>temp = new ArrayList<>();
                        temp.add(nums[i]);
                        temp.add(nums[j]);
                        temp.add(nums[k]);
                        temp.add(nums[l]);
                        ans.add(temp);
                        k++;
                        l--;

                        //skip the duplicate elements 
                        whlie(k<l && nums[k]==nums[k-1])k++;
                        while(k<l && nums[l]==nums[l+1])l--;
                        

                    }else if(sum > target){
                        l--;
                    }
                    else{
                        k++;
                    }
                }
            }
        }
        return ans ;
    }
}