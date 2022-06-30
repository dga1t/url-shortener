## Quick Start

1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)
3. Install [Docker Compose](https://docs.docker.com/compose/install/)
4. Clone the app:

```bash
git clone git@github.com:dga1t/url-shortener.git
```

5. Install npm packages

```bash
cd url-shortener
yarn install --frozen-lockfile
```

6. Build app localy.

```bash
yarn start:dev
```

Or build and run the Docker image.

```bash
yarn docker-compose:dev
```

7. Access the app at http://localhost:3000.

### Main routes
