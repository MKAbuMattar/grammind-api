# Grammind API

Grammind API is devoted entirely to ASCII art pattern programs, and its purpose is to learn how to write ASCII pattern programs in various programming languages such as C, C++, Java, C#, and Python.

> NOTE: work in progress

## Routers or endpoints

```http
# GET all patterns
GET https://grammind.herokuapp.com/api/v1

###

# GET the specific pattern by slug
GET https://grammind.herokuapp.com/api/v1/{slug}

###

# GET patterns by language
GET https://grammind.herokuapp.com/api/v1/language/{language}

###

# GET patterns by type
GET https://grammind.herokuapp.com/api/v1/type/{type}

###

# GET patterns by pattern
GET https://grammind.herokuapp.com/api/v1/pattern/{pattern}

###

# GET patterns by pattern number
GET https://grammind.herokuapp.com/api/v1/pattern_no/{pattern_no}

###

# GET patterns by language and type
GET https://grammind.herokuapp.com/api/v1/language/{language}/type/{type}

###

# GET patterns by language and pattern
GET https://grammind.herokuapp.com/api/v1/language/{language}/pattern/{pattern}

###

# GET patterns by language and pattern number
GET https://grammind.herokuapp.com/api/v1/language/{language}/pattern_no/{pattern_no}
```
