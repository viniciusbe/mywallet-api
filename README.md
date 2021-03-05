<p align="center">
  <a href="https://github.com/viniciusbe/mywallet-api/blob/master/.github/images/readme_logo.svg" rel="noopener">
 <img src="https://github.com/viniciusbe/mywallet-api/blob/master/.github/images/readme_logo.svg" alt="Project logo"></a>
</p>


<p align="center">  API used by <a href="https://github.com/viniciusbe/mywallet">mywallet</a>
</p>

[![GitHub license](https://img.shields.io/github/license/viniciusbe/mywallet?color=%2300adb5)](https://github.com/viniciusbe/mywallet-api/blob/master/LICENSE) [![Badge](https://img.shields.io/badge/made%20by-Vin%C3%ADcius%20Bernardes-%2300adb5)](https://github.com/viniciusbe) ![GitHub repo size](https://img.shields.io/github/repo-size/viniciusbe/mywallet-api?color=%2300adb5) ![GitHub top language](https://img.shields.io/github/languages/top/viniciusbe/mywallet-api)
 

### :crescent_moon: Routes

<p align="center">
  <a href="https://github.com/viniciusbe/mywallet-api/blob/master/.github/images/insomnia.png">
    <img src="https://github.com/viniciusbe/mywallet-api/blob/master/.github/images/insomnia.png" alt="Insomnia" /></a>
</p>


## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [License](#license)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Based on a project created during the [RocketSeat's](https://rocketseat.com.br/) bootcamp GoStack

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the application.

```
Node.js
Yarn
PostgreSQL
Docker (Optional - Recommended)
VS Code (Optional - Recommended)
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Create an instance for postgres on docker : https://hub.docker.com/_/postgres.

Cloning the repository:

```
git clone https://github.com/viniciusbe/mywallet-api
```

Enter the app folder:

```
cd mywallet-api
```

Install the dependencies:
```
yarn
```

config the file ormconfig.json based on your database.
Run the migrations and finally run the application:

```
yarn typeorm migration:run
yarn dev:server
```

The application will run on http://localhost:3333/

> You can test all the routes on [Insomnia](https://insomnia.rest/), just install it and import my [workspace](https://github.com/viniciusbe/mywallet-api/blob/master/.github/mywallet-insomnia.json) 

## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Handlebars](https://handlebarsjs.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Typeorm](https://typeorm.io/#/)
- [CSV-parse](https://csv.js.org/parse/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Cors](https://www.npmjs.com/package/cors)

## ✍️ License <a name = "license"></a>

This project is made available under the [MIT License](https://github.com/viniciusbe/mywallet-api/blob/master/LICENSE)

## Authors <a name = "license"></a> <a name="authors"></a>

<a href="https://github.com/viniciusbe">
  
 <img align="left" width="100" height="100" src="https://avatars.githubusercontent.com/u/61849613?s=460&u=246f8dbe8afcc6dec5999d2a6243121bcd4922be&v=4" alt="avatar"/>

</a>

Made with ❤ by [Vinícius Bernardes](https://github.com/viniciusbe)

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/vinicius-bernardes-santos/)
[![Gmail Badge](https://img.shields.io/badge/-vinicius@vibesa.online-d14836?style=flat-square&logo=Gmail&logoColor=white)](mailto:vinicius@vibesa.online)
[![Twitter Badge](https://img.shields.io/twitter/url?label=Twitter&style=social&url=https%3A%2F%2Ftwitter.com%2FViniciusbern7)](https://twitter.com/Viniciusbern7)
