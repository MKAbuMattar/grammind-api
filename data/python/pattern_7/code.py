#MAIN PROGRAM STARTS HERE:
num = int(input('Enter the number of rows and columns for the square: '))
k = 1

for x in range(0, num ):
    for y in range(0, num):
        print ('%d ' % (k), end='')
        k += 2
    print()