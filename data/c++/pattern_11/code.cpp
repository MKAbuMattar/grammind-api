#include <iostream>
using namespace std;

int main(void)
{
    int num;
    cout << "Enter the number of rows and columns for the square: ";
    cin >> num;

    for (int i = 1; i <= num; i++)
    {
        for (int j = 1; j <= num - 2; j++)
        {
            cout << j << " " << i << " ";
        }
        cout << endl;
    }

    return 0;
}
