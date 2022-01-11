#include <ctype.h>
#include <stdio.h>

int main(void)
{
    char ch;
    printf("Enter the character of rows and columns for the square: ");
    scanf("%c", &ch);

    while (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')))
    {
        ch = getchar();
        printf("Must insert character, re-enter the character of rows and columns for the square: ");
        scanf("%c", &ch);
    }

    for (char i = 'A'; i <= toupper(ch); i++)
    {
        for (char j = 'A'; j <= toupper(ch); j++)
        {
            printf("%c ", j);
        }
        printf("\n");
    }

    return 0;
}
