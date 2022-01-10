#include <stdio.h>

int main(void)
{
    int num;
    int x;
    printf("Enter the number of rows and columns for the square: ");
    scanf("%d", &num);

    for (int i = 1; i <= num; i++)
    {
        x = num - i + 1;
        for (int j = 1; j <= num; j++)
        {
            printf("%d ", x);
            x = x + num;
        }
        printf("\n");
    }

    return 0;
}
