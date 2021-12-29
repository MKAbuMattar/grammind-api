import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner createScanner = new Scanner(System.in);
        int num;
        int k = 1;
        System.out.print("Enter the number of rows and columns for the square: ");
        num = createScanner.nextInt();

        for (int i = num; i >= 1; i--) {
            for (int j = num; j >= 1; j--) {
                System.out.print(k + " ");
                k += 2;
            }
            System.out.print("\n");
        }
    }
}
