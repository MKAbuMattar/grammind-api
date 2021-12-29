# Grammind API

Grammind API is devoted entirely to ASCII art pattern programs, and its purpose is to learn how to write ASCII pattern programs in various programming languages such as C, C++, Java, C#, and Python.

> NOTE: work in progress

```http
GET https://grammind.herokuapp.com/api/v1
GET https://grammind.herokuapp.com/api/v1/:slug
```

## API Reference

### Get all patterns

```http
GET https://grammind.herokuapp.com/api/v1
```

Example:

```JSON

```

### Get specific programming language

```http
GET https://grammind.herokuapp.com/api/v1?programing_language=c
```

Example:

```JSON

```

### Get specific pattern

```http
GET https://grammind.herokuapp.com/api/v1?pattern=square
```

Example:

```JSON

```

### Get specific pattern_no on each programming languages

```http
GET https://grammind.herokuapp.com/api/v1?pattern_no=pattern_1
```

Example:

```JSON

```

### Get pattern by type

```http
GET https://grammind.herokuapp.com/api/v1?type=symbol pattern
```

Example:

```JSON

```

### Get pattern by chain query

```http
GET https://grammind.herokuapp.com/api/v1?type=symbol pattern&programing_language=c
```

Example:

```JSON

```

### Get pattern by slug

```http
GET https://grammind.herokuapp.com/api/v1/pattern_1_c
```

Example:

```JSON

```
