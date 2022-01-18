#MAIN PROGRAM STARTS HERE:
num = int(input('Enter the number of rows and columns for the square: '))

for x in range(1, num + 1):
    for y in range(1, num - 2 + 1):
        print ('{} {} '.format(x, y), end='')
    print()