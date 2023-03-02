# express-prisma-crud

## technology

- express
- typescript
- prisma

## details

### /auth

| Member            | Description |
| ----------------- | ----------- |
| **post** /sign-up | 회원가입    |
| **post** /sign-in | 로그인      |

### /post

| Member          | Description |
| --------------- | ----------- |
| **post** /      | 작성하기    |
| **get** /       | 불러오기    |
| **get** /:id    | 상세보기    |
| **patch** /:id  | 수정하기    |
| **delete** /:id | 삭제하기    |

### /my-page

| Member     | Description               |
| ---------- | ------------------------- |
| **Post** / | 자신이 쓴 게시물 불러오기 |

---

### 로그인 POST /auth/sign-in

#### Body

| Key      | Type   | Description            |
| -------- | ------ | ---------------------- |
| email    | string | 유저의 이메일입니다.   |
| password | string | 유저의 비밀번호입니다. |

#### response

```json
{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY3NzczMjI3NiwiZXhwIjoxNjc3OTQ4Mjc2LCJzdWIiOiJBQ0NFU1NfVE9LRU4ifQ.dkvoCY1asZjqNUYYjAcYVuyedI-znTy3XsUVY0GyNo4",
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY3NzczMjI3NiwiZXhwIjoxNjc3OTQ4Mjc2LCJzdWIiOiJSRUZSRVNIX1RPS0VOIn0.WU2Vi-pPCujRUqti8gsA8KwvfVZAieif9qIV6sjSNGI"
}
```

---

### 회원가입 POST /auth/sign-up

#### Body

| Key      | Type   | Description                   |
| -------- | ------ | ----------------------------- |
| email    | string | 유저가 사용할 이메일입니다.   |
| password | string | 유저가 사용할 비밀번호입니다. |
| name     | string | 유저가 사용할 이름입니다.     |

---

### 글 작성하기 POST /post

#### Body

| Key     | Type   | Description          |
| ------- | ------ | -------------------- |
| title   | string | 게시글의 제목입니다. |
| content | string | 게시글의 내용입니다. |

#### Authorization

| Type         | Type   | Description     |
| ------------ | ------ | --------------- |
| Bearer Token | string | JWT 엑세스 토큰 |

---

### 글 불러오기 GET /post

### response

```json
[
  {
    "id": 2,
    "title": "dwqd",
    "content": "dwqdwq",
    "published": false,
    "authorId": 2
  },
  {
    "id": 3,
    "title": "dqwdqw",
    "content": "dwqwd",
    "published": false,
    "authorId": 2
  }
]
```

---

### 글 상세보기 GET /post/:id

#### response

```json
{
  "id": 2,
  "title": "dwqd",
  "content": "dwqdwq",
  "published": false,
  "authorId": 2
}
```

---

### 글 수정하기 PATCH /post/:id

#### Body

| Key     | Type   | Description          |
| ------- | ------ | -------------------- |
| title   | string | 게시글의 제목입니다. |
| content | string | 게시글의 내용입니다. |

#### Authorization

| Type         | Type   | Description     |
| ------------ | ------ | --------------- |
| Bearer Token | string | JWT 엑세스 토큰 |

---

### 글 삭제하기 DELETE /post/:id

#### Authorization

| Type         | Type   | Description     |
| ------------ | ------ | --------------- |
| Bearer Token | string | JWT 엑세스 토큰 |

---

### 자신 게시글 불러오기 GET /my-page/post

#### Authorization

| Type         | Type   | Description     |
| ------------ | ------ | --------------- |
| Bearer Token | string | JWT 엑세스 토큰 |

#### response

```json
[
  {
    "id": 2,
    "title": "dwqd",
    "content": "dwqdwq",
    "published": false,
    "authorId": 2
  },
  {
    "id": 3,
    "title": "dqwdqw",
    "content": "dwqwd",
    "published": false,
    "authorId": 2
  }
]
```
