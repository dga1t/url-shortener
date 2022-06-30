## Quick Start

1. Install dependencies:
 - [Node.js](https://nodejs.org/en/download/)
 - [Yarn](https://yarnpkg.com/lang/en/docs/install/)
 - [Docker Compose](https://docs.docker.com/compose/install/)
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

```bash
yarn start:dev || yarn docker-compose:dev
```
==NOTE - if running app localy DB_HOST=localhost inside stage.dev.env and for docker-composr DB_HOST=db==

5. Access the app at http://localhost:3000.

## Endpoints:

**URL** : `/links`

**Method** : `GET`

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
        "id": "7df1462c-dd14-410e-9b19-7f6c2744a14b",
        "name": "longestintheworld",
        "url": "https://llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.co.uk/"
    },
]
```

***

**URL** : `/links`

**Method** : `POST`

**Data example**

```json
{
  "name": "longestintheworld",
  "url": "https://llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.co.uk/"
}
```
==name is value is optional, if not provided - it will be generated randomly==

### Success Response

**Code** : `201 Created`

**Content example**

```json
{
    "name": "longestintheworld",
    "url": "https://llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.co.uk/",
    "id": "3cfcdf05-71a4-439b-afb9-725fa6ba3629"
}
```

### Error Response

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
    "message": [ "url must be an URL address" ],
    "error": "Bad Request"
}
```

***

