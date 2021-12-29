using System;
class Grammind
{
    static void Main()
    {
        int num;
        int k = 1;
        string input;
        Console.Write("Enter the number of rows and columns for the square: ");
        input = Console.ReadLine();

        while (!int.TryParse(input, out num) || num <= 0)
        {
            Console.Write("Must the number be positive, re-enter the number of rows and columns for the square: ");
            input = Console.ReadLine();
        }

        for (int i = num; i >= 1; i--)
        {
            for (int j = num; j >= 1; i--)
            {
                Console.Write(k + " ");
                k += 2;
            }
            Console.Write("\n");
        }
    }
}
