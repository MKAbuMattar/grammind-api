#include <stdio.h>

int main(void)
{
    int num;
    char ch = 'A';
    printf("Enter the number of rows and columns for the square: ");
    scanf("%d", &num);

    for (int i = 1; i <= num; i++)
    {
        for (int j = 1; j <= num; j++)
        {
            printf("%c ", ch);

            if (ch < 'Z')
            {
                ch++;
            }
            else
            {
                ch++;
            }
        }
        printf("\n");
    }

    return 0;
}
