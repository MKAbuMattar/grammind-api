import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner createScanner = new Scanner(System.in);
        int num;

        System.out.print("Enter the number of rows and columns for the square: ");
        num = createScanner.nextInt();

        for (int i = num; i >= 1; i--) {
            for (int j = 1; j <= num; j++) {
                System.out.print(i + " ");
            }
            System.out.print("\n");
        }
    }
}
