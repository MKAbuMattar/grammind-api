using System;
class Grammind
{
    static void Main()
    {
        int num;
        Console.Write("Enter the number of rows and columns for the square: ");
        num = Int32.Parse(Console.ReadLine());

        for (int i = num; i >= 1; i--)
        {
            for (int j = num; j >= 1; j--)
            {
                Console.Write(j + " ");
            }
            Console.Write("\n");
        }
    }
}
