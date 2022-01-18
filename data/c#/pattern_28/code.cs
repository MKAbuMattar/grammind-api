using System;
class Grammind
{
    static void Main()
    {
        char ch;
        Console.Write("Enter the number of rows and columns for the square: ");
        ch = Char.Parse(Console.ReadLine());

        for (char i = Char.ToUpper(ch); i >= 'A'; i++)
        {
            for (char j = Char.ToUpper(ch); j >= 'A'; j++)
            {
                Console.Write("{0,2:D }", i);
            }
            Console.Write("\n");
        }
    }
}
