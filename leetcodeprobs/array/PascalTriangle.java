


//problem https://leetcode.com/problems/pascals-triangle/description/ PascalTriangle

/*
solution :              there will be 3 type of question 
           question 1. to print the element of nth and nth column 
                       for eg give me the row =5 and colum=3 element 
                    
           we use the formula  of n(C)r = n!/r! *(n-r)!
 

          question 2 : print all the n row 
          

*/

//solution 
//r is the row and c is the col
public class PascalTriangle{
    public int ncr(int r,int c){
        int res = 1;
        for(int i=0;i<c ;i++){
            res = res * (r-i);
            res= res/(i+1);

        }
        return res; 

        
    }

    public int pascal(int n , int c){
        int element = ncr(n-1,c-1);
        return element;

    }
    public static void main(String[] args){
        PascalTriangle pascals=new PascalTriangle();
        int element = pascals.pascal(5,3);

        System.out.println(element);

    }
}


//solution 2 using brute force we use the same above ncr formula 

public class Main {

    public static long nCr(int n, int r) {
        long res = 1;

        // calculating nCr:
        for (int i = 0; i < r; i++) {
            res = res * (n - i);
            res = res / (i + 1);
        }
        return res;
    }

    public static void pascalTriangle(int n) {
        // printing the entire row n:
        for (int c = 1; c <= n; c++) {
            System.out.print(nCr(n - 1, c - 1) + " ");
        }
        System.out.println();
    }
}

//using optimal way : First, we will print the 1st element i.e. 1 manually.
/* 
After that, we will use a loop(say i) that runs from 1 to n-1. It will print the rest of the elements.
Inside the loop, we will use the above-said formula to print the element. We will multiply the previous answer by (n-i) and then divide it by i itself.
Thus, the entire row will be printed

Current element = prevElement * (rowNumber - colIndex) / colIndex

 */


public class Main{
    public static void pascaltriangle(int n){
        int ans = 1;
        //we print the 1 intialie
        System.out.println(ans + " ");

        //printing the rest of the part
        for(int i=1;i<n;i++){
            ans =ans * (n-i);
            ans=ans/i;
            System.out.print(ans + " ");

        }
        System.out.println();

    }
    public static void main(String[] args){
        int n = 5;
        pascalTriangle(n);
    }
}

//questoin 3 to print all the pascal triangle of n size 

//in js 

function generatenum(row){
    let ans = 1
    let arrRow=[1]//intialie we print the 1 

    for(let col=1;col<row;col++){
        ans = ans *(row-col)
        ans = Math.floor(ans/col)
        ansRow.push(ans)
    }
    return ansRow
}

function pascalTriangle(n){
    let ans = []
    for(let i=1;i<=n;i++){
        ans.push(generatenum(i))
    }
    return ans
}

//in java 
public class tUf {
    public static List<Integer> generateRow(int row) {
        long ans = 1;
        List<Integer> ansRow = new ArrayList<>();
        ansRow.add(1); //inserting the 1st element

        //calculate the rest of the elements:
        for (int col = 1; col < row; col++) {
            ans = ans * (row - col);
            ans = ans / col;
            ansRow.add((int)ans);
        }
        return ansRow;
    }

    public static List<List<Integer>> pascalTriangle(int n) {
        List<List<Integer>> ans = new ArrayList<>();

        //store the entire pascal's triangle:
        for (int row = 1; row <= n; row++) {
            ans.add(generateRow(row));
        }
        return ans;
    }

    public static void main(String[] args) {
        int n = 5;
        List<List<Integer>> ans = pascalTriangle(n);
        for (List<Integer> it : ans) {
            for (int ele : it) {
                System.out.print(ele + " ");
            }
            System.out.println();
        }
    }
}