
# NestJS PostgresSQL URL Shortner
Tuturial by (https://codecov.io/gh/dominicarrojado/nestjs-postgres-url-shortener)

1. Set up the environment:

`Install Node.js && Yarn && Docker && Docker Compose`

2. Clone the app:

```bash
git clone git@github.com:dga1t/url-shortener.git
```

3. Install npm packages

```bash
cd url-shortener
yarn install --frozen-lockfile
```

4. Build app localy or build and run the Docker image.

`NOTE - inside stage.dev.env file set DB_HOST=localhost if running app localy OR if running docker-compose set DB_HOST=db`

```bash
yarn start:dev || yarn docker-compose:dev
```

5. Access the app at http://localhost:3000.

## Endpoints:

### **URL** : `/links`

**Method** : `GET`

#### Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": "7df1462c-dd14-410e-9b19-7f6c2744a14b",
    "name": "longestintheworld",
    "url": "https://llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.co.uk/"
  }
]
```

---

### **URL** : `/links`

**Method** : `POST`

**Data example**

`NOTE - name value is optional, if not provided - it will be generated randomly`

```json
{
  "name": "longestintheworld",
  "url": "https://llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.co.uk/"
}
```

#### Success Response

**Code** : `201 Created`

**Content example**

```json
{
  "name": "longestintheworld",
  "url": "https://llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.co.uk/",
  "id": "3cfcdf05-71a4-439b-afb9-725fa6ba3629"
}
```

#### Error Response

**Condition** : If short name already exists.

**Code** : `409 Conflict`

**Content** :

```json
{
  "statusCode": 409,
  "message": "Short name already exists",
  "error": "Conflict"
}
```

**Condition** : If the URL is not valid.

**Code** : `400 Bad Request`

**Content** :

```json
{
  "statusCode": 400,
  "message": ["url must be an URL address"],
  "error": "Bad Request"
}
```

---

### **URL** : `/links/:id`

**Method** : `DELETE`

#### Success Response

**Code** : `200 OK`

#### Error Response

**Condition** : If link with a given id does not exist.

**Code** : `404 Not Found`

**Content** :

```json
{
  "statusCode": 404,
  "message": "Link with ID: \"7df1462c-dd14-410e-9b19-7f6c2744a14b\" not found",
  "error": "Not Found"
}
```

---

### **URL** : `/links/:id`

**Method** : `PUT`

**Data example**

```json
{
  "name": "shortestintheworld",
  "url": "https://u.nu/"
}
```

#### Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "id": "32b5d526-9eef-4bb2-8564-5e71ed44336f",
  "name": "shortestintheworld",
  "url": "https://u.nu/"
}
```

---
