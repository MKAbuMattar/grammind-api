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

    for (char i = toupper(ch); i >= 'A'; i--)
    {
        for (char j = toupper(ch); j >= 'A'; j--)
        {
            printf("%c ", j);
        }
        printf("\n");
    }

    return 0;
}
