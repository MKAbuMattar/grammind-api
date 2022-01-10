#include <stdio.h>

int main(void)
{
    int num;
    int x;
    int y;
    printf("Enter the number of rows and columns for the square: ");

    while (!(scanf("%d", &num) == 1) || num <= 0)
    {
        num = getchar();
        printf("Must the number be positive, re-enter the number of rows and columns for the square: ");
    }

    for (int i = 1; i <= num; i++)
    {
        x = i;
        y = num - i + 1;
        for (int j = 1; j <= num; j++)
        {
            if (j % 2 == 1)
            {
                printf("%d ", x);
            }
            else
            {
                printf("%d ", y);
            }

            x = x + num;
            y = y + num;
        }
        printf("\n");
    }

    return 0;
}
