import java.util.*;
import java.io.*;

class Solution{
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();int x=1;
            String str="";int p=0;
           for(int j=1;j<=n;j++){
               
                   
               
               
           p=p+x*b; int z=a+p;
               str=str+z+" ";
               x=x*2;
        
           }
               System.out.println(str);
        }        in.close();
    }
}

