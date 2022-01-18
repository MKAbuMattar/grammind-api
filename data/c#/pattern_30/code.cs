using System;
class Grammind
{
    static void Main()
    {
        int num;
        char ch = 'A';
        Console.Write("Enter the number of rows and columns for the square: ");
        num = Int32.Parse(Console.ReadLine());

        for (int i = 1; i <= num; i++)
        {
            for (int j = 1; j <= num; j++)
            {
                Console.Write("{0,2:D }", ch);
                if (ch < 'Z')
                {
                    ch++;
                }
                else
                {
                    ch = (char)'A';
                }
            }
            Console.Write("\n");
        }
    }
}
