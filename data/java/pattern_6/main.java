import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner createScanner = new Scanner(System.in);
        int num = Integer.MIN_VALUE;
        boolean checker;
        String string;
        int k = 1;
        System.out.print("Enter the number of rows and columns for the square: ");

        checker = createScanner.hasNextInt();
        string = createScanner.next();

        if (checker) {
            num = Integer.parseInt(string);
        }

        while (!checker || num <= 0) {
            System.out.print(
                    "Must the number be positive, re-enter the number of rows and columns for the square: ");

            checker = createScanner.hasNextInt();
            string = createScanner.next();

            if (checker) {
                num = Integer.parseInt(string);
            }
        }

        for (int i = num; i >= 1; i--) {
            for (int j = num; j >= 1; j--) {
                System.out.print(k + " ");
                k++;
            }
            System.out.print("\n");
        }
    }
}