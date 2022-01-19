#include <iostream>
using namespace std;

int main(void)
{
    int num;
    int x;
    int y;
    cout << "Enter the number of rows and columns for the square: ";
    cin >> num;

    for (int i = 1; i <= num; i++)
    {
        x = i;
        y = num - i + 1;
        for (int j = 1; j <= num; j++)
        {
            if (j % 2 == 1)
            {
                cout << x << " ";
            }
            else
            {
                cout << y << " ";
            }
            x = x + num;
            y = y + num;
        }
        cout << endl;
    }

    return 0;
}
