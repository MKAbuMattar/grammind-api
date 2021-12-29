using System;
class Grammind
{
    static void Main()
    {
        int num;
        int k = 1;
        Console.Write("Enter the number of rows and columns for the square: ");
        num = Int32.Parse(Console.ReadLine());

        for (int i = num; i >= 1; i--)
        {
            for (int j = num; j >= 1; i--)
            {
                Console.Write(k + " ");
                k++;
            }
            Console.Write("\n");
        }
    }
}
