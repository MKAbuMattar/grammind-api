#include <stdio.h>

int main(void)
{
    int num;
    printf("Enter the number of rows and columns for the square: ");
    scanf("%d", &num);

    for (int i = 0; i < num; i++)
    {
        for (int j = 1; j <= num; j++)
        {
            printf("%d ", i % 2);
        }
        printf("\n");
    }

    return 0;
}
