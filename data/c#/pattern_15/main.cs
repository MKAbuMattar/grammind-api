using System;
class Grammind
{
    static void Main()
    {
        int num;
        int x;
        int y;
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
            x = i;
            y = num - i + 1;
            for (int j = 1; j <= num; j++)
            {
                if (j % 2 == 0)
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
