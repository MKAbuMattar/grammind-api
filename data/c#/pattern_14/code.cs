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
            x = num - i + 1;
            for (int j = 1; j <= num; j++)
            {
                Console.Write("{0,2:D }", x);
                x = x + num;
            }
            Console.Write("\n");
        }
    }
}
