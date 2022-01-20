#include <ctype.h>
#include <stdio.h>

int main(void)
{
    char ch;
    printf("Enter the character of rows and columns for the square: ");
    scanf("%c", &ch);

    for (char i = 'A'; i <= toupper(ch); i++)
    {
        for (char j = 'A'; j <= toupper(ch); j++)
        {
            printf("%c ", i);
        }
        printf("\n");
    }

    return 0;
}
