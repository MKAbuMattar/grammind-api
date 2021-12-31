def checkInput(message):
    while True:
        try:
            userInput = int(input(message))
        except ValueError:
            message = 'Must the number be positive, re-enter the number of rows and columns for the square: '
            continue
        else:
            if userInput <= 0:
                message = 'Must the number be positive, re-enter the number of rows and columns for the square: '
                continue
            else:
                return userInput
                break

#MAIN PROGRAM STARTS HERE:
num = checkInput('Enter the number of rows and columns for the square: ')

for x in range(num, 0, -1):
    for y in range(num, 0, -1):
        print ('%d ' % (x), end='')
    print()