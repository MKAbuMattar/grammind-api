using System;
class Grammind
{
    static void Main()
    {
        char ch;
        Console.Write("Enter the number of rows and columns for the square: ");
        ch = Char.Parse(Console.ReadLine());

        for (char i = 'A'; i <= Char.ToUpper(ch); i++)
        {
            for (char j = 'A'; j <= Char.ToUpper(ch); j++)
            {
                Console.Write("{0,2:D }", i);
            }
            Console.Write("\n");
        }
    }
}
