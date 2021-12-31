#include <iostream>
using namespace std;

int main(void)
{
    int num;
    int k = 1;
    cout << "Enter the number of rows and columns for the square: ";
    cin >> num;

    for (int i = 1; i <= num; i++)
    {
        for (int j = 1; j <= num; j++)
        {
            cout << k++ << " ";
        }
        cout << endl;
    }

    return 0;
}
