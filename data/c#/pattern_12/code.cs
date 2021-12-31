using System;
class Grammind
{
    static void Main()
    {
        int num;
        int x;
        Console.Write("Enter the number of rows and columns for the square: ");
        num = Int32.Parse(Console.ReadLine());

        for (int i = 1; i <= num; i++)
        {
            x = i;
            for (int j = 1; j <= num; j++)
            {
                Console.Write(x + " ");
                x += num;
            }
            Console.Write("\n");
        }
    }
}
