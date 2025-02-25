/**
 *1104. Path In Zigzag Labelled Binary Tree https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/description/
        Input: label = 14
        Output: [1,3,4,14]

 solution : As we know that the binary tree is zig zag 
            the value starts from left to right  if its odd level
            or from the right to left if its even level
            we need to find the path of the given label 

        1    odd level (values from left to right)
      /   \
    3       2  even level(values from right to left
   / \     / \
  4   5   6   7 odd level 
 / \ / \ / \ / \
15 14 13 12 11 10 9 8 even level 


if the label is 13 then the path is [ 1,3,5,13 ] 

take a normal binary tree if we need to find the lable in the normal binary tree its easy 

          1
      /       \
     2         3
   /  \      /   \
  4    5     6     7
 / \ /  \   / \   / \
8  9 10 11 12 13 14  15  here if we need to find the path of the lable .
                         to find the path we need parent node of the lable and the parentnode of that parent that makes the path
                         so if the label is 13  then 13 /2 =6 , 6/2=3, 3/2=1 so the path will be [ 13,6,3,1] this can be done if the binary tree is not zig zag

but the give problem the binary tree is zig zag 
        1
      /   \
    3       2
   / \     / \
  4   5   6   7
 / \ / \ / \ / \
15 14 13 12 11 10 9 8  so if you need to take the lable of 13 like we did in above the 13/2 = 6 but the root is 5 here 

8  9  10 11 12 13 14 15   (noraml tree)  
15 14 13 12 11 10  9  8  (zigzag tree )   if you compare with the normal binary tree  the value are swapped 

basically the 13 is swapped with the 10 

so if we find the labled (13) swapped no which is 10 we can get the parent no 10/2 =5 
so 13 parent in the zig zag is 5 

then the 5 no swapped is 6 then we get the parent of 6/2 which is 3 
[13,5,3]

then 1 will be added at last 

1) we need to find the swapped no 
                  15 14 13 12 11 10  9  8  
                  e     n        x      s  ( e =end , s = start , n = labeld no , x the swapped no )

 here  we need to know the x 
       end - n = x start 
       x = end + start - n

2 ) now we need find the  end and start 

                            level     total node in the level    last value in the level 
            

           1                 1                1                          1 
       /       \
      3         2            2                2                          3 
   /    \     /   \
  4      5    6     7        3                4                          7 
 / \    / \  / \   / \
15 14 13 12 11 10  9  8      4                8                          15 
            

to get the last value in the level we can do (2 * total node in the level -1 )


we take total node in the level  as = 1 
lastvalue = 0 

so in level 1 , the last value will be ( 2* total node in the level -1) =>   2 * 1 -1 => 1 
                so the last value is  1 
                now we multiply the (total nodes in the value) becasue in level two there are 2 nodes so ( total node in the level* 2 ) =1 * 2 = 2 

      level 2   the last value will be ( 2 * total node in the level-1 )   =>                          2 * 2 -1 = 3 
                the (total nodes in the value) will be  => total nodes in the value  * 2  =>           2 * 2 =4 

      level 3   the last value will be ( 2 * total node in the level-1 )   =>                          2 * 4 -1 = 7
                the (total nodes in the value ) will be => total nodes in the value  * 2 =>           4 * 2 =8

      level 4   the last value will be ( 2 * total node in the level-1 )   =>                         2 * 8 -1 = 15 
                the (total nodes in the value ) will be => total nodes in the value  * 2 =>           8 * 2 =16

                we need to do this till the total nodes in the value  is not greater than the label value 

                i.e ( lastvalue  < label)  once it corss the lastlvalue will be 15  and the total node in the level  will be 8 


the last value = 15  
so the total node in the value  will be  =  16 for level 5 
but we need only till level 4 because (the last value (15) is not smaller than the label 13 ) so in level 4 there  will be totaly only 8 nodes 
so we divideit by 2  => 16 /2 = 8 


last value = 15 
totalvalue = 8


so now we have lastvalue = 15 (we can take this as end )
total node  = 8   ( we can take this as starting number of that level)

now we have the end and start 

so the formula => x = end + start  -n 
            

to find the end value we use the formul = 2 * total value -1 
to find the start value which is the total value => totalvalue 

so end = 2 * total value -1 
start = totalvalue 

substitue in the x 

x = end + start  -n
  = 2 * totalvalue -1 + totalvalue -n
 x = (3 * totalvalue -1 -n) this is the formula to find the swapped value of that label 

 for eg if the label is 13  then the swapped value (x) = (3 * totalvalue -1 -n) 

                                  sub n as 13         =  3 * 8 -1 - 13 
                                                      =  26 -14
                                                      = 10 
so the swapped value of 13 wll be 10 

now we know the swapped value we can get the parent node  10 / 2 = 5 
so the path now will be [ 13 ,5 ] like that we keep on doing 

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//problem in js

function zigzagpath(root, label) {
  //we need a array to store the answer
  let ans = new Array();

  // let take the total level value in the node as tln
  //lets take the last value as lv

  let tlvn = 1;
  let lv = 0;

  while (lv < label) {
    lv = 2 * tlvn - 1;
    tlvn = 2 * tlvn;
  }
  tlvn = tlvn / 2;

  //now we have the value of total level value
  //and the last value

  // now we need to find the swap value of the label
  //we do while loop till we reach the label 1
  while (label !== 1) {
    //intialy we push the value in the ans  array
    ans.push(label);
    let x = 3 * tlvn - 1 - n;
    let parent = x / 2;
    label = parent;

    tlvn = tlvn / 2;
  }
  ans.add(1); //finaly we add the 1
  // now the array contains [ 13 ,5,3, 1] now we need to reverse the array and return it
  return ans.reverse();
}

////////////////////////////////////////////////////////////////////////////////
/**
 * in java
 * 
 * 
 *class Solution {
    public List<Integer> pathInZigZagTree(int label) {
        int levelvalue = 1 ;
        int totallevelvalue = 0;

        while(totallevelvalue < label ) {
            totallevelvalue = (levelvalue * 2 -1 );
            levelvalue = levelvalue * 2 ;

        }
        levelvalue = levelvalue /2 ;

        // now we need to find the complementry of that label 

        //we need ans array to push the value 

        ArrayList<Integer> ans = new ArrayList<>();

        while(label !=1){
            ans.add(label);
            int complevalue = 3 * levelvalue - label -1 ;
            int parentvalue = complevalue /2 ;
            label = parentvalue;
            levelvalue = levelvalue /2 ;
        }
        ans.add(1);
        Collections.reverse(ans);
        return ans ;
        
    }

}
 */
