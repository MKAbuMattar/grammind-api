#include <iostream>
using namespace std;

int main(void)
{
    char ch;
    cout << "Enter the character of rows and columns for the square: ";
    cin >> ch;

    for (char i = 'A'; i <= ch; i++)
    {
        for (char j = 'A'; j <= ch; j++)
        {
            cout << char(j) << " ";
        }
        cout << endl;
    }

    return 0;
}
