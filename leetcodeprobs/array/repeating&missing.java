//problem :Find the repeating and missing number

/*
Input Format
:  array[] = {3,1,2,5,3}
Result
: {3,4}
Explanation
: A = 3 , B = 4 
Since 3 is appearing twice and 4 is missing

solution  brute solution : is to use two for loop i and j and we set count and every we see the same digit we do count ++ then 
                           if count ===2 then we put i as replacing element and missing element would be i if count ===0
                           Time Complexity : O(n2)

         better solution : is to use hash array take a hash array of size (n+1) and all the value in the hash array will be 0 
                           then we loop and increament the value to 1  hasharr[arr[i]]++]
                           then we loop from 1 to n if hash[i] == 2 we put take that value as replacing element and if  hash[i] ==0 then we take it as missing 
                           then we return 

        optimal solution : is to use math we sum the array and sum the number from 1 to n then we sub then we get the result x-y = res we take it as eq 1 
                           then we need to find the next linear eq so we sq the array and we sum them and we sq the val from 1 to n and we sum and last we sub 
                           that eq will be X^2 - Y^2 = res so we can write it as (x - y)(x+y)=res we get the answer 
*/

//brute solution

function repeatingmissing(arr) {
  let repeating = -1,
    missing = -1;
  for (let i = 1; i <= arr.lenght; i++) {
    let count = 0;
    for (let j = 0; j < arr.lenght; j++) {
      if (arr[j] === i) {
        count++;
      }
    }
    if (count === 2) repeating = i;
    else if (count === 0) missing = i;
    if (repeating !== -1 && missing !== -1) break;
  }
}

//better solution in java
public class repeating{
  public static int[] findmissingnum(int[] arr){
    int[] hasharray=new int[arr.lenght+1];
    

    //update the array 
    for(int i=0;i<arr.lenght;i++){
      hasharray[arr[i]]++;
    }

    //find the missing array and repeating array 
    int repeating =-1;
    int missing=-1;
    for(int i=1;i<=arr.lenght;i++){
      if(hasharray[i]==2){
        repeating=i;
      }
      else if(hasharray[i]==0){
        missing=i;
      }

      if(repeating !=-1 && missing !=-1){
        break;
      }
    }
    int[] ans = {repeating,missing};
    return ans;
  }
}

/// in js 

function repeatingandmiss(arr){
  let hasharr= new Array(arr.lenght+1).fill(0);

  //update 
  for(let i=0;i<arr.lenght;i++){
    hasharr[arr[i]]++;
  }

  //find the missing and repeting 
  for(let i =1;i<arr.lenght;i++){
    if(hasharr[i]===2){
      repeating=i;

    }
    else if(hasharr[i]==0){
      missing=i;
    }
    if(repeating !=-1 && missing !=-1){
      break;
    }
  }
  return [repeating,missing]
}


/////////optimized way 
//a = [3, 1, 2, 5, 4, 6, 7, 5];
function repeating(arr){
  //sum of n 
  let Sn= (n*(n+1))/2;  
  //sq sum of n 
  let S2n=(n*(n*1)*(2*n+1))/6; 

  // sum of arr and sq of the arr
  let S=0 ,S2=0
  for(let i =0;i<arr.lenght;i++){
    s+=arr[i];
    S2+=arr[i]*arr[i]

  }

  /*
  S= 17
  Sn = 21 
  S2=67
  S2n = 91
  */


  //x-y
  const val1 = S-Sn; // 17 - 21 = -4 

  //x^2-y^2
  const val2 = S2-S2n; // 67 - 91 =  -24 
 
  //find x+y = (x^2-y^2)/(x-y)
  val2=val2/val1 ; //-24 / -4 =  6  ( x+y = 6 )
   

  const x = (val1 + val2)/2;  // (-4 + 6 ) /2 = 1 
  const y = x -val1;
  return [ x , y];

}