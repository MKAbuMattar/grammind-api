#include <iostream>
using namespace std;

int main(void)
{
    int num;
    cout << "Enter the number of rows and columns for the square: ";
    cin >> num;

    for (int i = 1; i <= num; i++)
    {
        for (int j = 1; j <= num; j++)
        {
            cout << (i + j - 1) << " ";
        }
        cout << endl;
    }

    return 0;
}
