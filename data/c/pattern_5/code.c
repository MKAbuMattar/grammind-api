#include <stdio.h>

int main(void)
{
    int num;
    printf("Enter the number of rows and columns for the square: ");
    scanf("%d", &num);

    for (int i = num; i >= 1; i--)
    {
        for (int j = num; j >= 1; j--)
        {
            printf("%d ", j);
        }
        printf("\n");
    }

    return 0;
}
