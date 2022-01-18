import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner createScanner = new Scanner(System.in);
        int num;
        System.out.print("Enter the number of rows and columns for the square: ");
        num = createScanner.nextInt();

        for (int i = 1; i <= num; i++) {
            for (int j = 1; j <= num - 2; j++) {
                System.out.print(i + " " + j + " ");
            }
            System.out.print("\n");
        }
    }
}
