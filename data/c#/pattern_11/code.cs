using System;
class Grammind
{
    static void Main()
    {
        int num;
        Console.Write("Enter the number of rows and columns for the square: ");
        num = Int32.Parse(Console.ReadLine());

        for (int i = 1; i <= num; i++)
        {
            for (int j = 1; j <= num - 2; j++)
            {
                Console.Write(j + " " + i + " ");
            }
            Console.Write("\n");
        }
    }
}
