#include <iostream>
using namespace std;

int main(void)
{
    int num;
    int k = 1;
    cout << "Enter the number of rows and columns for the square: ";
    cin >> num;

    for (int i = num; i >= 1; i--)
    {
        for (int j = num; j >= 1; j--)
        {
            cout << k++ << " ";
        }
        cout << endl;
    }

    return 0;
}
