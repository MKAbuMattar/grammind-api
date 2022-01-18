#MAIN PROGRAM STARTS HERE:
num = int(input('Enter the number of rows and columns for the square: '))

for x in range(num, 0, -1):
    for y in range(num, 0, -1):
        print ('%d ' % (y), end='')
    print()