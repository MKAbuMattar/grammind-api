using System;
class Grammind
{
    static void Main()
    {
        char ch;
        string input;
        Console.Write("Enter the number of rows and columns for the square: ");
        input = Console.ReadLine();

        while (!Char.TryParse(input, out ch) || (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))))
        {
            Console.Write("Must insert character, re-enter the character of rows and columns for the square: ");
            input = Console.ReadLine();
        }

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
