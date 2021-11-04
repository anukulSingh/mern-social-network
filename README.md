### All the URL endpoints can be categorized under following:
- [Posts](#posts)
- [Profiles](#profiles)
- [Users and Auth](#users-and-auth)

### Endpoints with Authorization header requires users's Sign-in and registration
### Any raw data packet received from the client side should be in JSON format<hr/>

# Posts

## Indices

- [Add a post](#1-add-a-post)
- [Delete a comment](#2-delete-a-comment)
- [Delete a post by id](#3-delete-a-post-by-id)
- [GET a post by id](#4-get-a-post-by-id)
- [Get all posts](#5-get-all-posts)
- [Like a post](#6-like-a-post)
- [Comment on a post](#7-comment-on-a-post)
- [Unlike a post](#8-unlike-a-post)

---

### 1. Add a post

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/posts
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTM3NTQ2ODY2YTY0MjQwNGFlNzBjIn0sImlhdCI6MTYwODYzODk5MCwiZXhwIjoxNjA4OTk4OTkwfQ.bhgd7Q1dIrrsvIYECTof9I_rkfiSxaT1jK9fr3aDPJk |             |

**_Body:_**

```js
{
    "text": "Some content to be posted !"
}
```

### 2. Delete a comment

**_Endpoint:_**

```bash
Method: DELETE
Params: ["postId", "commentId"]
URL:http://localhost:5000/api/posts/comment/5fe1e43f5445ca5c28a440f1/5fe203c3e1524a0cd08d5102
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTM3NTQ2ODY2YTY0MjQwNGFlNzBjIn0sImlhdCI6MTYwODYzODk5MCwiZXhwIjoxNjA4OTk4OTkwfQ.bhgd7Q1dIrrsvIYECTof9I_rkfiSxaT1jK9fr3aDPJk |             |

### 3. Delete a post by id

**_Endpoint:_**

```bash
Method: DELETE
Params: ["postId]
URL:http://localhost:5000/api/posts/5fe1e9bcf1f917509c9cdbba
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTM3NTQ2ODY2YTY0MjQwNGFlNzBjIn0sImlhdCI6MTYwODYzODk5MCwiZXhwIjoxNjA4OTk4OTkwfQ.bhgd7Q1dIrrsvIYECTof9I_rkfiSxaT1jK9fr3aDPJk |             |

### 4. GET a post by id

**_Endpoint:_**

```bash
Method: GET
Params: ["postId"]
URL:http://localhost:5000/api/posts/5fe1e43f5445ca5c28a440f1
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTM3NTQ2ODY2YTY0MjQwNGFlNzBjIn0sImlhdCI6MTYwODYzODk5MCwiZXhwIjoxNjA4OTk4OTkwfQ.bhgd7Q1dIrrsvIYECTof9I_rkfiSxaT1jK9fr3aDPJk |             |

### 5. Get all posts

**_Endpoint:_**

```bash
Method: GET
URL: http://localhost:5000/api/posts
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTM3NTQ2ODY2YTY0MjQwNGFlNzBjIn0sImlhdCI6MTYwODYzODk5MCwiZXhwIjoxNjA4OTk4OTkwfQ.bhgd7Q1dIrrsvIYECTof9I_rkfiSxaT1jK9fr3aDPJk |             |

### 6. Like a post

**_Endpoint:_**

```bash
Method: PUT
Params: ["postId"]
URL:http://localhost:5000/api/posts/like/5fe1e3975445ca5c28a440f0
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTM3NTQ2ODY2YTY0MjQwNGFlNzBjIn0sImlhdCI6MTYwODYzODk5MCwiZXhwIjoxNjA4OTk4OTkwfQ.bhgd7Q1dIrrsvIYECTof9I_rkfiSxaT1jK9fr3aDPJk |             |

### 7. Comment on a post

**_Endpoint:_**

```bash
Method: POST
Type: RAW
Params: ["postId"]
URL:http://localhost:5000/api/posts/comment/5fe1e43f5445ca5c28a440f1
```

**_Headers:_**

| Key           | Value                                                                                                                                                            | Description |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZlNDVhMGU0ODE0MTUzMTY0Y2ExYjg3In0sImlhdCI6MTYwODgwMDc4Mn0.D46uiT9KmaHbBebNxnD1-szN8QieCZgcCzhUpz6lF6s |             |

**_Body:_**

```js
{
    "text": "some random comment on a post!"
}
```

### 8. Unlike a post

**_Endpoint:_**

```bash
Method: PUT
Params: ["postId"]
URL:http://localhost:5000/api/posts/unlike/5fe1e3975445ca5c28a440f0
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTM3NTQ2ODY2YTY0MjQwNGFlNzBjIn0sImlhdCI6MTYwODYzODk5MCwiZXhwIjoxNjA4OTk4OTkwfQ.bhgd7Q1dIrrsvIYECTof9I_rkfiSxaT1jK9fr3aDPJk |             |

<br/><hr/>

# Profiles

## Indices

- [get profiles of all users](#1-get-all-profiles)
- [get a user profile by id](#2-get-user-by-id)
- [add education for a user](#3-add-profile-education)
- [add experience for a user](#4-add-profile-experience)
- [create/update profile](#5-create-update-profile)
- [delete one's profile and account](#6-delete-profile-and-users)
- [delete education from profile](#7-delete-profile-education)
- [delete experience from profile](#8-delete-profile-experience)

---

### 1. Get all profiles

**_Endpoint:_**

```bash
Method: GET
URL: http://localhost:5000/api/profile
```

### 2. Get a user's profile by id

**_Endpoint:_**

```bash
Method: GET
Params: ["userId"]
URL:http://localhost:5000/api/profile/user/5fb537546866a642404ae70c
```

### 3. Add profile education

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: http://localhost:5000/api/profile/education
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTM3NTQ2ODY2YTY0MjQwNGFlNzBjIn0sImlhdCI6MTYwNjU3MDYwNiwiZXhwIjoxNjA2OTMwNjA2fQ.Mdk6mB_ySyTOPI77zM382oOO4NSe79PeTEoapbmNNmI |                   |
                                                                                                                                                                   

**_Body:_**

```js
{
    "school": "Holy test",
    "degree": "Associate degree",
    "fieldofstudy": "Computer science",
    "from": "8-04-2003",
    "to": "9-5-2006",
    "description": "associates in computer science"
}
```

### 4. add profile experience

**_Endpoint:_**

```bash
Method: PUT
Type: RAW
URL: http://localhost:5000/api/profile/experience
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTM3NTQ2ODY2YTY0MjQwNGFlNzBjIn0sImlhdCI6MTYwNjU3MDYwNiwiZXhwIjoxNjA2OTMwNjA2fQ.Mdk6mB_ySyTOPI77zM382oOO4NSe79PeTEoapbmNNmI |                   |


**_Body:_**

```js
{
    "title": "junior dev",
    "company": "ToolSpy",
    "location": "LA",
    "from": "8-04-2014",
    "current": true, (working currently or not)
    "description": "some random stuffs"
}
```

### 5. Create/Update profile

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/profile
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTM3NTQ2ODY2YTY0MjQwNGFlNzBjIn0sImlhdCI6MTYwNTcxMTcwMSwiZXhwIjoxNjA2MDcxNzAxfQ.vkPzkoZx2-iPf-6gBLjOG6mMVqolnzQqxZbOUYzhwY8 |                   |


**_Body:_**

```js
{
    "status": "Instructor",
    "skills": "HTML,CSS, Wordpress,  PHP,python",
    "company": "razorBOx",
    "website": "https://www.jdsingh.com",
    "bio": "I am as instructor",
    "githubusername": "johnDoe",
    "twitter": "some another url",
    "facebook": "some url",
    "youtube": "some url"
}
```

### 6. Delete one's account and hence profile

**_Endpoint:_**

```bash
Method: DELETE
URL: http://localhost:5000/api/profile
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTNkYjM1ZTk3MjQzYjA0MmJhMDZkIn0sImlhdCI6MTYwNTcxMzMzMiwiZXhwIjoxNjA2MDczMzMyfQ.1uN0c0BCbP88wLlYn3jNLc71vSVSoN6GUHsHYIJo_g4 |             |

### 7. Delete profile education

**_Endpoint:_**

```bash
Method: DELETE
Params: ["profileId"]
URL:http://localhost:5000/api/profile/education/5fc25bdf78d34915845e3229
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTM3NTQ2ODY2YTY0MjQwNGFlNzBjIn0sImlhdCI6MTYwNjU3MDYwNiwiZXhwIjoxNjA2OTMwNjA2fQ.Mdk6mB_ySyTOPI77zM382oOO4NSe79PeTEoapbmNNmI |             |

### 8. Delete profile experience

**_Endpoint:_**

```bash
Method: DELETE
Params: ["profileId"]
URL: http://localhost:5000/api/profile/experience/5fb548000054112ac8dbb411
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                   | Description |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiNTM3NTQ2ODY2YTY0MjQwNGFlNzBjIn0sImlhdCI6MTYwNjU3MDYwNiwiZXhwIjoxNjA2OTMwNjA2fQ.Mdk6mB_ySyTOPI77zM382oOO4NSe79PeTEoapbmNNmI |             |

# Users and Auth

## Indices

- [Get my credentials](#1-get-my-credentials)
- [Get logged in user's profile](#2-get-logged-in-users-profile)
- [Login for a user](#3-login-user)
- [Register a user](#4-register-user)
---

### 1. Get my credentials

**_Endpoint:_**

```bash
Method: GET
Type: RAW
URL: http://localhost:5000/api/auth
```

**_Headers:_**

| Key           | Value                                                                                                                                                                                          | Description |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWZiM2E2MTVhNmIwNzEwNjkwYTZkYjA3In0sImlhdCI6MTYwNTYwODk4MiwiZXhwIjoxNjA1OTY4OTgyfQ.E6PYsjezSAV0CbCrVXhuQm0oT4XpxNA6RLgv-B6VQz0 |             |

**_Body:_**

```js
{
    "name": "anukul",
    "email": "anukulsingh125@gmail.com",
    "password": "password"
}
```

### 2. Get logged in user's profile

**_Endpoint:_**

```bash
Method: GET
URL: http://localhost:5000/api/profile/me
```

**_Headers:_**

| Key          | Value                                                                                                                                                                                   | Description |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWY3ZWQxOTliOWNiZDIzMDM0YTRlOWRlIn0sImlhdCI6MTYwMjI0MDU2MCwiZXhwIjoxNjAyNjAwNTYwfQ.q4YKxWCyUHRG_nprvnpmHEJHaCOIRBysMIZwPIMPJyM |             |

### 3. Login user

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/auth
```

**_Headers:_**


**_Body:_**

```js
{
    "email": "jdoe125@gmail.com",
    "password": "password"
}
```

### 4. Register user

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/users
```

**_Body:_**

```js
{
    "name": "anukul kumar",
    "email": "anukulsingh125@gmail.com",
    "password": "password"
}
```


