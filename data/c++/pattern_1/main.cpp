#include <iostream>
using namespace std;

int main(void)
{
    int num;
    cout << "Enter the number of rows and columns for the square: ";
    cin >> num;

    while (num <= 0 || cin.fail())
    {
        cout << "Must the number be positive, re-enter the number of rows and columns for the square: ";
        cin.clear();
        cin.ignore(256, '\n');
        cin >> num;
    }

    for (int i = 1; i <= num; i++)
    {
        for (int j = 1; j <= num; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }

    return 0;
}
