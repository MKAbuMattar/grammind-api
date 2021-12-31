using System;
class Grammind
{
    static void Main()
    {
        int num;
        int k = 1;
        Console.Write("Enter the number of rows and columns for the square: ");
        num = Int32.Parse(Console.ReadLine());

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
