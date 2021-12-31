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

        for (int i = 1; i <= num; i++)
        {
            for (int j = 1; j <= num; j++)
            {
                Console.Write(k + " ");
                k++;
            }
            Console.Write("\n");
        }
    }
}
