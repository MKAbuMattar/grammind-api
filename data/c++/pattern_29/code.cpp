#include <iostream>
using namespace std;

int main(void)
{
    char ch;
    cout << "Enter the character of rows and columns for the square: ";
    cin >> ch;

    for (char i = ch; i >= 'A'; i--)
    {
        for (char j = ch; j >= 'A'; j--)
        {
            cout << char(j) << " ";
        }
        cout << endl;
    }

    return 0;
}
