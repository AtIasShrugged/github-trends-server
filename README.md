# GitHub Trend Repository API

Nestjs application that saves trending github repositories to Mongodb every X minutes and provides access to them through a public API.

## Installation

Create a .env file with PORT, GITHUB_TRENDS_URL, MONGO_USER, MONGO_PASS and MONGO_DBNAME values.

Use the package manager [npm](https://www.npmjs.com/) to install all dependencies.

```bash
npm install
```

## Usage

```bash
npm start
```

## Public API's

- **_/trends_** - get all trend repositories from db
- **_/trends/:id_** - get trend repository from db by id
  - **_/trends/:id?filter=name_** - optional. get trend repository from db by name
- **_/trends/sync_** - reset the internal request timer to the github trends api
