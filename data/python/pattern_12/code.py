#MAIN PROGRAM STARTS HERE:
num = int(input('Enter the number of rows and columns for the square: '))

for x in range(0, num):
    i = x + 1
    for y in range(0, num):
        print ('{} '.format(i), end='')
        i += num
    print()