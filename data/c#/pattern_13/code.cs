using System;
class Grammind
{
    static void Main()
    {
        int num;
        int x;
        int y;
        Console.Write("Enter the number of rows and columns for the square: ");
        num = Int32.Parse(Console.ReadLine());

        for (int i = 1; i <= num; i++)
        {
            x = i;
            y = num - i + 1;
            for (int j = 1; j <= num; j++)
            {
                if (j % 2 == 1)
                {
                    Console.Write("{0,2:D }", x);
                }
                else
                {
                    Console.Write("{0,2:D }", y);
                }

                x = x + num;
                y = y + num;
            }
            Console.Write("\n");
        }
    }
}
