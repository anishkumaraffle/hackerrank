import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int month = in.nextInt()-1;
        int  day = in.nextInt();
        int year = in.nextInt();
        Date date =(new GregorianCalendar(year ,month,day)).getTime();
        
        SimpleDateFormat f=new SimpleDateFormat("EEEE");
        String d=f.format(date);
        System.out.println(d.toUpperCase());
        
    }
}

