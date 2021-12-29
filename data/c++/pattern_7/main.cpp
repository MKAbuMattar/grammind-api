#include <iostream>
using namespace std;

int main(void)
{
    int num;
    int k = 1;
    cout << "Enter the number of rows and columns for the square: ";
    cin >> num;

    while (num <= 0 || cin.fail())
    {
        cout << "Must the number be positive, re-enter the number of rows and columns for the square: ";
        cin.clear();
        cin.ignore(256, '\n');
        cin >> num;
    }

    for (int i = num; i >= 1; i--)
    {
        for (int j = num; j >= 1; j--)
        {
            cout << k << " ";
            k += 2;
        }
        cout << endl;
    }

    return 0;
}