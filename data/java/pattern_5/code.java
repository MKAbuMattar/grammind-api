import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner createScanner = new Scanner(System.in);
        int num;

        System.out.print("Enter the number of rows and columns for the square: ");
        num = createScanner.nextInt();

        for (int i = num; i >= 1; i--) {
            for (int j = num; j >= 1; j--) {
                System.out.print(j + " ");
            }
            System.out.print("\n");
        }
    }
}
