#include <iostream>
using namespace std;

int main(void)
{
    int num;
    char ch = 'A';
    cout << "Enter the character of rows and columns for the square: ";
    cin >> num;

    for (int i = 1; i <= num; i++)
    {
        for (int j = 0; j < num; j++)
        {
            cout << char(ch) << " ";
            if (ch < 'Z')
            {
                ch++;
            }
            else
            {
                ch = 'A';
            }
        }
        cout << endl;
    }

    return 0;
}
