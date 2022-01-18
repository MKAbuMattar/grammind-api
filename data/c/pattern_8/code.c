#include <stdio.h>

int main(void)
{
    int num;
    int k = 2;
    printf("Enter the number of rows and columns for the square: ");
    scanf("%d", &num);

    for (int i = 1; i <= num; i++)
    {
        for (int j = 1; j <= num; j++)
        {
            printf("%d ", k);
            k += 2;
        }
        printf("\n");
    }

    return 0;
}
