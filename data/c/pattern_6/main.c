#include <stdio.h>

int main(void)
{
    int num;
    int k = 1;
    printf("Enter the number of rows and columns for the square: ");

    while (!(scanf("%d", &num) == 1) || num <= 0)
    {
        num = getchar();
        printf("Must the number be positive, re-enter the number of rows and columns for the square: ");
    }

    for (int i = 1; i <= num; i++)
    {
        for (int j = 1; j <= num; j++)
        {
            printf("%d ", k++);
        }
        printf("\n");
    }

    return 0;
}
