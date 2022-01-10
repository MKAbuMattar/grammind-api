#include <stdio.h>

int main(void)
{
    char ch;
    printf("Enter the character of rows and columns for the square: ");
    scanf("%c", &ch);

    for (char i = toupper(ch); i >= 'A'; i--)
    {
        for (char j = toupper(ch); j >= 'A'; j--)
        {
            printf("%c ", i);
        }
        printf("\n");
    }

    return 0;
}
