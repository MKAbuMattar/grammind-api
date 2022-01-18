#include <stdio.h>

int main(void)
{
    int num;
    printf("Enter the number of rows and columns for the square: ");
    scanf("%d", &num);

    for (int i = num; i >= 1; i--)
    {
        for (int j = 1; j <= num; j++)
        {
            printf("%d ", i);
        }
        printf("\n");
    }

    return 0;
}
