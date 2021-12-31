# Grammind API

Grammind API is devoted entirely to ASCII art pattern programs, and its purpose is to learn how to write ASCII pattern programs in various programming languages such as C, C++, Java, C#, and Python.

> NOTE: work in progress

```http
GET https://grammind.herokuapp.com/api/v1
GET https://grammind.herokuapp.com/api/v1/{slug}
GET https://grammind.herokuapp.com/api/v1/language/{language}
GET https://grammind.herokuapp.com/api/v1/language/{language}/type/{type}
GET https://grammind.herokuapp.com/api/v1/language/{language}/pattern_no/{pattern_no}
```

## API Reference

### Get all patterns

```http
GET https://grammind.herokuapp.com/api/v1
```

Example:

```JSON
{
  "success": true,
  "totalCount": 60,
  "data": [
    {
      "_id": "61cca4cff96ab7ed57c7d30b",
      "slug": "pattern_1_c",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "c",
      "code": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n    scanf(\"%d\", &num);\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "code_input_filter": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n\n    while (!(scanf(\"%d\", &num) == 1) || num <= 0)\n    {\n        num = getchar();\n        printf(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n    }\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "onlinegdb_id": "eEQsag_h-",
      "onlinegdb_id_input_filter": "0px7fWMv4",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:11:27.788Z",
      "__v": 0
    },
    {
      "_id": "61cca4ddf96ab7ed57c7d30e",
      "slug": "pattern_2_c",
      "pattern": "square",
      "pattern_no": "pattern_2",
      "type": "numeric pattern",
      "programing_language": "c",
      "code": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n    scanf(\"%d\", &num);\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"%d \", i);\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "code_input_filter": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n\n    while (!(scanf(\"%d\", &num) == 1) || num <= 0)\n    {\n        num = getchar();\n        printf(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n    }\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"%d \", i);\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}\n",
      "onlinegdb_id": "LzSJSrrCe",
      "onlinegdb_id_input_filter": "NrCDROHcA",
      "example_user_input": 5,
      "example_output": "1 1 1 1 1 \n2 2 2 2 2 \n3 3 3 3 3 \n4 4 4 4 4 \n5 5 5 5 5",
      "createdAt": "2021-12-29T18:11:41.193Z",
      "__v": 0
    },
    {
      "_id": "61cca4e7f96ab7ed57c7d311",
      "slug": "pattern_1_csharp",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "csharp",
      "code": "using System;\nclass Grammind\n{\n    static void Main()\n    {\n        int num;\n        Console.Write(\"Enter the number of rows and columns for the square: \");\n        num = Int32.Parse(Console.ReadLine());\n\n        for (int i = 1; i <= num; i++)\n        {\n            for (int j = 1; j <= num; j++)\n            {\n                Console.Write(\"* \");\n            }\n            Console.Write(\"\n\");\n        }\n    }\n}",
      "code_input_filter": "using System;\nclass Grammind\n{\n    static void Main()\n    {\n        int num;\n        string input;\n        Console.Write(\"Enter the number of rows and columns for the square: \");\n        input = Console.ReadLine();\n\n        while (!int.TryParse(input, out num) || num <= 0)\n        {\n            Console.Write(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n            input = Console.ReadLine();\n        }\n\n        for (int i = 1; i <= num; i++)\n        {\n            for (int j = 1; j <= num; j++)\n            {\n                Console.Write(\"* \");\n            }\n            Console.Write(\"\n\");\n        }\n    }\n}",
      "onlinegdb_id": "JoOxBbsuP",
      "onlinegdb_id_input_filter": "ECi9jm7qF",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:11:51.584Z",
      "__v": 0
    },
    .
    .
    .
  ]
}
```

### Get specific programming language

```http
GET https://grammind.herokuapp.com/api/v1?programing_language=c
```

Example:

```JSON
{
  "success": true,
  "totalCount": 60,
  "resultCount": 12,
  "data": [
    {
      "_id": "61cca4cff96ab7ed57c7d30b",
      "slug": "pattern_1_c",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "c",
      "code": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n    scanf(\"%d\", &num);\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "code_input_filter": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n\n    while (!(scanf(\"%d\", &num) == 1) || num <= 0)\n    {\n        num = getchar();\n        printf(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n    }\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "onlinegdb_id": "eEQsag_h-",
      "onlinegdb_id_input_filter": "0px7fWMv4",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:11:27.788Z",
      "__v": 0
    },
    {
      "_id": "61cca4ddf96ab7ed57c7d30e",
      "slug": "pattern_2_c",
      "pattern": "square",
      "pattern_no": "pattern_2",
      "type": "numeric pattern",
      "programing_language": "c",
      "code": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n    scanf(\"%d\", &num);\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"%d \", i);\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "code_input_filter": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n\n    while (!(scanf(\"%d\", &num) == 1) || num <= 0)\n    {\n        num = getchar();\n        printf(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n    }\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"%d \", i);\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}\n",
      "onlinegdb_id": "LzSJSrrCe",
      "onlinegdb_id_input_filter": "NrCDROHcA",
      "example_user_input": 5,
      "example_output": "1 1 1 1 1 \n2 2 2 2 2 \n3 3 3 3 3 \n4 4 4 4 4 \n5 5 5 5 5",
      "createdAt": "2021-12-29T18:11:41.193Z",
      "__v": 0
    },
    .
    .
    .
  ]
}
```

### Get specific pattern

```http
GET https://grammind.herokuapp.com/api/v1?pattern=square
```

Example:

```JSON
{
  "success": true,
  "totalCount": 60,
  "resultCount": 60,
  "data": [
    {
      "_id": "61cca4cff96ab7ed57c7d30b",
      "slug": "pattern_1_c",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "c",
      "code": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n    scanf(\"%d\", &num);\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "code_input_filter": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n\n    while (!(scanf(\"%d\", &num) == 1) || num <= 0)\n    {\n        num = getchar();\n        printf(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n    }\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "onlinegdb_id": "eEQsag_h-",
      "onlinegdb_id_input_filter": "0px7fWMv4",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:11:27.788Z",
      "__v": 0
    },
    {
      "_id": "61cca4ddf96ab7ed57c7d30e",
      "slug": "pattern_2_c",
      "pattern": "square",
      "pattern_no": "pattern_2",
      "type": "numeric pattern",
      "programing_language": "c",
      "code": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n    scanf(\"%d\", &num);\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"%d \", i);\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "code_input_filter": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n\n    while (!(scanf(\"%d\", &num) == 1) || num <= 0)\n    {\n        num = getchar();\n        printf(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n    }\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"%d \", i);\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}\n",
      "onlinegdb_id": "LzSJSrrCe",
      "onlinegdb_id_input_filter": "NrCDROHcA",
      "example_user_input": 5,
      "example_output": "1 1 1 1 1 \n2 2 2 2 2 \n3 3 3 3 3 \n4 4 4 4 4 \n5 5 5 5 5",
      "createdAt": "2021-12-29T18:11:41.193Z",
      "__v": 0
    },
    .
    .
    .
  ]
}
```

### Get specific pattern_no on each programming languages

```http
GET https://grammind.herokuapp.com/api/v1?pattern_no=pattern_1
```

Example:

```JSON
{
  "success": true,
  "totalCount": 60,
  "resultCount": 5,
  "data": [
    {
      "_id": "61cca4cff96ab7ed57c7d30b",
      "slug": "pattern_1_c",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "c",
      "code": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n    scanf(\"%d\", &num);\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "code_input_filter": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n\n    while (!(scanf(\"%d\", &num) == 1) || num <= 0)\n    {\n        num = getchar();\n        printf(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n    }\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "onlinegdb_id": "eEQsag_h-",
      "onlinegdb_id_input_filter": "0px7fWMv4",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:11:27.788Z",
      "__v": 0
    },
    {
      "_id": "61cca4e7f96ab7ed57c7d311",
      "slug": "pattern_1_csharp",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "csharp",
      "code": "using System;\nclass Grammind\n{\n    static void Main()\n    {\n        int num;\n        Console.Write(\"Enter the number of rows and columns for the square: \");\n        num = Int32.Parse(Console.ReadLine());\n\n        for (int i = 1; i <= num; i++)\n        {\n            for (int j = 1; j <= num; j++)\n            {\n                Console.Write(\"* \");\n            }\n            Console.Write(\"\n\");\n        }\n    }\n}",
      "code_input_filter": "using System;\nclass Grammind\n{\n    static void Main()\n    {\n        int num;\n        string input;\n        Console.Write(\"Enter the number of rows and columns for the square: \");\n        input = Console.ReadLine();\n\n        while (!int.TryParse(input, out num) || num <= 0)\n        {\n            Console.Write(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n            input = Console.ReadLine();\n        }\n\n        for (int i = 1; i <= num; i++)\n        {\n            for (int j = 1; j <= num; j++)\n            {\n                Console.Write(\"* \");\n            }\n            Console.Write(\"\n\");\n        }\n    }\n}",
      "onlinegdb_id": "JoOxBbsuP",
      "onlinegdb_id_input_filter": "ECi9jm7qF",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:11:51.584Z",
      "__v": 0
    },
    {
      "_id": "61cca4f9f96ab7ed57c7d317",
      "slug": "pattern_1_cpp",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "cpp",
      "code": "#include <iostream>\nusing namespace std;\n\nint main(void)\n{\n    int num;\n    cout << \"Enter the number of rows and columns for the square: \";\n    cin >> num;\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n\n    return 0;\n}",
      "code_input_filter": "#include <iostream>\nusing namespace std;\n\nint main(void)\n{\n    int num;\n    cout << \"Enter the number of rows and columns for the square: \";\n    cin >> num;\n\n    while (num <= 0 || cin.fail())\n    {\n        cout << \"Must the number be positive, re-enter the number of rows and columns for the square: \";\n        cin.clear();\n        cin.ignore(256, '\n');\n        cin >> num;\n    }\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n\n    return 0;\n}",
      "onlinegdb_id": "lMIZLEceF",
      "onlinegdb_id_input_filter": "d7J6YMbE5",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:12:09.895Z",
      "__v": 0
    },
    {
      "_id": "61cca50bf96ab7ed57c7d31d",
      "slug": "pattern_1_java",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "java",
      "code": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner createScanner = new Scanner(System.in);\n        int num;\n\n        System.out.print(\"Enter the number of rows and columns for the square: \");\n        num = createScanner.nextInt();\n\n        for (int i = 1; i <= num; i++) {\n            for (int j = 1; j <= num; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.print(\"\n\");\n        }\n    }\n}",
      "code_input_filter": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner createScanner = new Scanner(System.in);\n        int num = Integer.MIN_VALUE;\n        boolean checker;\n        String string;\n\n        System.out.print(\"Enter the number of rows and columns for the square: \");\n\n        checker = createScanner.hasNextInt();\n        string = createScanner.next();\n\n        if (checker) {\n            num = Integer.parseInt(string);\n        }\n\n        while (!checker || num <= 0) {\n            System.out.print(\n                    \"Must the number be positive, re-enter the number of rows and columns for the square: \");\n\n            checker = createScanner.hasNextInt();\n            string = createScanner.next();\n\n            if (checker) {\n                num = Integer.parseInt(string);\n            }\n        }\n\n        for (int i = 1; i <= num; i++) {\n            for (int j = 1; j <= num; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.print(\"\n\");\n        }\n    }\n}",
      "onlinegdb_id": "mjp9kwS_1",
      "onlinegdb_id_input_filter": "ZTjxxtCVr",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:12:27.941Z",
      "__v": 0
    },
    {
      "_id": "61cca522f96ab7ed57c7d323",
      "slug": "pattern_1_python",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "python",
      "code": "#MAIN PROGRAM STARTS HERE:\nnum = int(input('Enter the number of rows and columns for the square: '))\n\nfor x in range(0, num):\n    for y in range(0, num):\n        print ('* ', end='')\n    print()",
      "code_input_filter": "def checkInput(message):\n    while True:\n        try:\n            userInput = int(input(message))\n        except ValueError:\n            message = 'Must the number be positive, re-enter the number of rows and columns for the square: '\n            continue\n        else:\n            if userInput <= 0:\n                message = 'Must the number be positive, re-enter the number of rows and columns for the square: '\n                continue\n            else:\n                return userInput\n                break\n\n#MAIN PROGRAM STARTS HERE:\nnum = checkInput('Enter the number of rows and columns for the square: ')\n\nfor x in range(0, num):\n    for y in range(0, num):\n        print ('* ', end='')\n    print()",
      "onlinegdb_id": "yI7gc2vPV",
      "onlinegdb_id_input_filter": "twMTgkzYH",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:12:50.498Z",
      "__v": 0
    }
  ]
}
```

### Get pattern by type

```http
GET https://grammind.herokuapp.com/api/v1?type=symbol pattern
```

Example:

```JSON
{
  "success": true,
  "totalCount": 60,
  "resultCount": 5,
  "data": [
    {
      "_id": "61cca4cff96ab7ed57c7d30b",
      "slug": "pattern_1_c",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "c",
      "code": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n    scanf(\"%d\", &num);\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "code_input_filter": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n\n    while (!(scanf(\"%d\", &num) == 1) || num <= 0)\n    {\n        num = getchar();\n        printf(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n    }\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "onlinegdb_id": "eEQsag_h-",
      "onlinegdb_id_input_filter": "0px7fWMv4",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:11:27.788Z",
      "__v": 0
    },
    {
      "_id": "61cca4e7f96ab7ed57c7d311",
      "slug": "pattern_1_csharp",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "csharp",
      "code": "using System;\nclass Grammind\n{\n    static void Main()\n    {\n        int num;\n        Console.Write(\"Enter the number of rows and columns for the square: \");\n        num = Int32.Parse(Console.ReadLine());\n\n        for (int i = 1; i <= num; i++)\n        {\n            for (int j = 1; j <= num; j++)\n            {\n                Console.Write(\"* \");\n            }\n            Console.Write(\"\n\");\n        }\n    }\n}",
      "code_input_filter": "using System;\nclass Grammind\n{\n    static void Main()\n    {\n        int num;\n        string input;\n        Console.Write(\"Enter the number of rows and columns for the square: \");\n        input = Console.ReadLine();\n\n        while (!int.TryParse(input, out num) || num <= 0)\n        {\n            Console.Write(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n            input = Console.ReadLine();\n        }\n\n        for (int i = 1; i <= num; i++)\n        {\n            for (int j = 1; j <= num; j++)\n            {\n                Console.Write(\"* \");\n            }\n            Console.Write(\"\n\");\n        }\n    }\n}",
      "onlinegdb_id": "JoOxBbsuP",
      "onlinegdb_id_input_filter": "ECi9jm7qF",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:11:51.584Z",
      "__v": 0
    },
    {
      "_id": "61cca4f9f96ab7ed57c7d317",
      "slug": "pattern_1_cpp",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "cpp",
      "code": "#include <iostream>\nusing namespace std;\n\nint main(void)\n{\n    int num;\n    cout << \"Enter the number of rows and columns for the square: \";\n    cin >> num;\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n\n    return 0;\n}",
      "code_input_filter": "#include <iostream>\nusing namespace std;\n\nint main(void)\n{\n    int num;\n    cout << \"Enter the number of rows and columns for the square: \";\n    cin >> num;\n\n    while (num <= 0 || cin.fail())\n    {\n        cout << \"Must the number be positive, re-enter the number of rows and columns for the square: \";\n        cin.clear();\n        cin.ignore(256, '\n');\n        cin >> num;\n    }\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            cout << \"* \";\n        }\n        cout << endl;\n    }\n\n    return 0;\n}",
      "onlinegdb_id": "lMIZLEceF",
      "onlinegdb_id_input_filter": "d7J6YMbE5",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:12:09.895Z",
      "__v": 0
    },
    {
      "_id": "61cca50bf96ab7ed57c7d31d",
      "slug": "pattern_1_java",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "java",
      "code": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner createScanner = new Scanner(System.in);\n        int num;\n\n        System.out.print(\"Enter the number of rows and columns for the square: \");\n        num = createScanner.nextInt();\n\n        for (int i = 1; i <= num; i++) {\n            for (int j = 1; j <= num; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.print(\"\n\");\n        }\n    }\n}",
      "code_input_filter": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner createScanner = new Scanner(System.in);\n        int num = Integer.MIN_VALUE;\n        boolean checker;\n        String string;\n\n        System.out.print(\"Enter the number of rows and columns for the square: \");\n\n        checker = createScanner.hasNextInt();\n        string = createScanner.next();\n\n        if (checker) {\n            num = Integer.parseInt(string);\n        }\n\n        while (!checker || num <= 0) {\n            System.out.print(\n                    \"Must the number be positive, re-enter the number of rows and columns for the square: \");\n\n            checker = createScanner.hasNextInt();\n            string = createScanner.next();\n\n            if (checker) {\n                num = Integer.parseInt(string);\n            }\n        }\n\n        for (int i = 1; i <= num; i++) {\n            for (int j = 1; j <= num; j++) {\n                System.out.print(\"* \");\n            }\n            System.out.print(\"\n\");\n        }\n    }\n}",
      "onlinegdb_id": "mjp9kwS_1",
      "onlinegdb_id_input_filter": "ZTjxxtCVr",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:12:27.941Z",
      "__v": 0
    },
    {
      "_id": "61cca522f96ab7ed57c7d323",
      "slug": "pattern_1_python",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "python",
      "code": "#MAIN PROGRAM STARTS HERE:\nnum = int(input('Enter the number of rows and columns for the square: '))\n\nfor x in range(0, num):\n    for y in range(0, num):\n        print ('* ', end='')\n    print()",
      "code_input_filter": "def checkInput(message):\n    while True:\n        try:\n            userInput = int(input(message))\n        except ValueError:\n            message = 'Must the number be positive, re-enter the number of rows and columns for the square: '\n            continue\n        else:\n            if userInput <= 0:\n                message = 'Must the number be positive, re-enter the number of rows and columns for the square: '\n                continue\n            else:\n                return userInput\n                break\n\n#MAIN PROGRAM STARTS HERE:\nnum = checkInput('Enter the number of rows and columns for the square: ')\n\nfor x in range(0, num):\n    for y in range(0, num):\n        print ('* ', end='')\n    print()",
      "onlinegdb_id": "yI7gc2vPV",
      "onlinegdb_id_input_filter": "twMTgkzYH",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:12:50.498Z",
      "__v": 0
    }
  ]
}
```

### Get pattern by chain query

```http
GET https://grammind.herokuapp.com/api/v1?type=symbol pattern&programing_language=c
```

Example:

```JSON
{
  "success": true,
  "totalCount": 60,
  "resultCount": 1,
  "data": [
    {
      "_id": "61cca4cff96ab7ed57c7d30b",
      "slug": "pattern_1_c",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "c",
      "code": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n    scanf(\"%d\", &num);\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "code_input_filter": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n\n    while (!(scanf(\"%d\", &num) == 1) || num <= 0)\n    {\n        num = getchar();\n        printf(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n    }\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "onlinegdb_id": "eEQsag_h-",
      "onlinegdb_id_input_filter": "0px7fWMv4",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:11:27.788Z",
      "__v": 0
    }
  ]
}
```

### Get pattern by slug

```http
GET https://grammind.herokuapp.com/api/v1/pattern_1_c
```

Example:

```JSON
{
  "success": true,
  "resultCount": 1,
  "data": [
    {
      "_id": "61cca4cff96ab7ed57c7d30b",
      "slug": "pattern_1_c",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "c",
      "code": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n    scanf(\"%d\", &num);\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "code_input_filter": "#include <stdio.h>\n\nint main(void)\n{\n    int num;\n    printf(\"Enter the number of rows and columns for the square: \");\n\n    while (!(scanf(\"%d\", &num) == 1) || num <= 0)\n    {\n        num = getchar();\n        printf(\"Must the number be positive, re-enter the number of rows and columns for the square: \");\n    }\n\n    for (int i = 1; i <= num; i++)\n    {\n        for (int j = 1; j <= num; j++)\n        {\n            printf(\"* \");\n        }\n        printf(\"\n\");\n    }\n\n    return 0;\n}",
      "onlinegdb_id": "eEQsag_h-",
      "onlinegdb_id_input_filter": "0px7fWMv4",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:11:27.788Z",
      "__v": 0
    }
  ]
}
```

### Get pattern by language

```http
GET https://grammind.herokuapp.com/api/v1/language/python
```

Example:

```JSON
{
  "success": true,
  "resultCount": 12,
  "data": [
    {
      "_id": "61cca522f96ab7ed57c7d323",
      "slug": "pattern_1_python",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "python",
      "code": "#MAIN PROGRAM STARTS HERE:\nnum = int(input('Enter the number of rows and columns for the square: '))\n\nfor x in range(0, num):\n    for y in range(0, num):\n        print ('* ', end='')\n    print()",
      "code_input_filter": "def checkInput(message):\n    while True:\n        try:\n            userInput = int(input(message))\n        except ValueError:\n            message = 'Must the number be positive, re-enter the number of rows and columns for the square: '\n            continue\n        else:\n            if userInput <= 0:\n                message = 'Must the number be positive, re-enter the number of rows and columns for the square: '\n                continue\n            else:\n                return userInput\n                break\n\n#MAIN PROGRAM STARTS HERE:\nnum = checkInput('Enter the number of rows and columns for the square: ')\n\nfor x in range(0, num):\n    for y in range(0, num):\n        print ('* ', end='')\n    print()",
      "onlinegdb_id": "yI7gc2vPV",
      "onlinegdb_id_input_filter": "twMTgkzYH",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:12:50.498Z",
      "__v": 0
    },
    {
      "_id": "61cca529f96ab7ed57c7d326",
      "slug": "pattern_2_python",
      "pattern": "square",
      "pattern_no": "pattern_2",
      "type": "numeric pattern",
      "programing_language": "python",
      "code": "#MAIN PROGRAM STARTS HERE:\nnum = int(input('Enter the number of rows and columns for the square: '))\n\nfor x in range(0, num):\n    for y in range(0, num):\n        print ('%d ' % (x+1), end='')\n    print()",
      "code_input_filter": "def checkInput(message):\n    while True:\n        try:\n            userInput = int(input(message))\n        except ValueError:\n            message = 'Must the number be positive, re-enter the number of rows and columns for the square: '\n            continue\n        else:\n            if userInput <= 0:\n                message = 'Must the number be positive, re-enter the number of rows and columns for the square: '\n                continue\n            else:\n                return userInput\n                break\n\n#MAIN PROGRAM STARTS HERE:\nnum = checkInput('Enter the number of rows and columns for the square: ')\n\nfor x in range(0, num):\n    for y in range(0, num):\n        print ('%d ' % (x+1), end='')\n    print()",
      "onlinegdb_id": "N1qkVhYYC",
      "onlinegdb_id_input_filter": "PINzAtSP7",
      "example_user_input": 5,
      "example_output": "1 1 1 1 1 \n2 2 2 2 2 \n3 3 3 3 3 \n4 4 4 4 4 \n5 5 5 5 5",
      "createdAt": "2021-12-29T18:12:57.457Z",
      "__v": 0
    },
    .
    .
    .
  ]
}
```

### Get pattern by language and type

```http
GET https://grammind.herokuapp.com/api/v1/language/python/type/symbol pattern
```

Example:

```JSON
{
  "success": true,
  "resultCount": 1,
  "data": [
    {
      "_id": "61cca522f96ab7ed57c7d323",
      "slug": "pattern_1_python",
      "pattern": "square",
      "pattern_no": "pattern_1",
      "type": "symbol pattern",
      "programing_language": "python",
      "code": "#MAIN PROGRAM STARTS HERE:\nnum = int(input('Enter the number of rows and columns for the square: '))\n\nfor x in range(0, num):\n    for y in range(0, num):\n        print ('* ', end='')\n    print()",
      "code_input_filter": "def checkInput(message):\n    while True:\n        try:\n            userInput = int(input(message))\n        except ValueError:\n            message = 'Must the number be positive, re-enter the number of rows and columns for the square: '\n            continue\n        else:\n            if userInput <= 0:\n                message = 'Must the number be positive, re-enter the number of rows and columns for the square: '\n                continue\n            else:\n                return userInput\n                break\n\n#MAIN PROGRAM STARTS HERE:\nnum = checkInput('Enter the number of rows and columns for the square: ')\n\nfor x in range(0, num):\n    for y in range(0, num):\n        print ('* ', end='')\n    print()",
      "onlinegdb_id": "yI7gc2vPV",
      "onlinegdb_id_input_filter": "twMTgkzYH",
      "example_user_input": 5,
      "example_output": "* * * * * \n* * * * * \n* * * * * \n* * * * * \n* * * * *",
      "createdAt": "2021-12-29T18:12:50.498Z",
      "__v": 0
    }
  ]
}
```

### Get pattern by language and pattern no.

```http
GET http://grammind.herokuapp.com/api/v1/language/python/pattern_no/pattern_4
```

Example:

```JSON
{
  "success": true,
  "resultCount": 1,
  "data": [
    {
      "_id": "61cf1eea5a61efe8c91d659d",
      "slug": "pattern_4_python",
      "pattern": "square",
      "pattern_no": "pattern_4",
      "type": "numeric pattern",
      "programing_language": "python",
      "code": "#MAIN PROGRAM STARTS HERE:\nnum = int(input('Enter the number of rows and columns for the square: '))\n\nfor x in range(num, 0, -1):\n    for y in range(num, 0, -1):\n        print ('%d ' % (x), end='')\n    print()",
      "code_input_filter": "def checkInput(message):\n    while True:\n        try:\n            userInput = int(input(message))\n        except ValueError:\n            message = 'Must the number be positive, re-enter the number of rows and columns for the square: '\n            continue\n        else:\n            if userInput <= 0:\n                message = 'Must the number be positive, re-enter the number of rows and columns for the square: '\n                continue\n            else:\n                return userInput\n                break\n\n#MAIN PROGRAM STARTS HERE:\nnum = checkInput('Enter the number of rows and columns for the square: ')\n\nfor x in range(num, 0, -1):\n    for y in range(num, 0, -1):\n        print ('%d ' % (x), end='')\n    print()",
      "onlinegdb_id": "8KWAJB0mh",
      "onlinegdb_id_input_filter": "fG7ON6ZVB",
      "example_user_input": 5,
      "example_output": "5 5 5 5 5 \n4 4 4 4 4 \n3 3 3 3 3 \n2 2 2 2 2 \n1 1 1 1 1",
      "createdAt": "2021-12-31T15:16:58.660Z",
      "__v": 0
    }
  ]
}
```

### Try Live Demo For each pattern

JS Example:

```js
let live_code = `https://onlinegdb.com/${onlinegdb_id}`
let live_code_filter = `https://onlinegdb.com/${onlinegdb_id_input_filter}`
```
