#include <iostream>
using namespace std;

int main(void)
{
    int num;
    cout << "Enter the number of rows and columns for the square: ";
    cin >> num;

    for (int i = num; i >= 1; i--)
    {
        for (int j = 1; j <= num; j++)
        {
            cout << i << " ";
        }
        cout << endl;
    }

    return 0;
}
