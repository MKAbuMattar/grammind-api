#include <iostream>
using namespace std;

int main(void)
{
    int num;
    int x;
    cout << "Enter the number of rows and columns for the square: ";
    cin >> num;

    for (int i = 1; i <= num; i++)
    {
        x = num - i + 1;
        for (int j = 1; j <= num; j++)
        {
            cout << x << " ";
            x = x + num;
        }
        cout << endl;
    }

    return 0;
}
