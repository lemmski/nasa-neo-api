# NASA NEO API

## npm install && npm start

### Compatible with Node 14.x

## Running the app

```bash
$ NASA_API_KEY=<your_api_key>
$ export NASA_API_KEY
$ npm install && npm start
```

## SonarQube

```bash
$ sudo docker pull sonarqube:latest
$ sudo docker run -d --network=host --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true sonarqube:latest
```

If you don't want to use dockerized scanner, you don't have to use host network argument

Once your instance is up and running, Log in to http://localhost:9000 using System Administrator credentials:

login: admin
password: admin

## Complete the setup wizard

Use shell variable to store token

```bash
NEO_API_SONAR_TOKEN=<your token>
```

Run scanner:

```bash
   $ sudo docker run --network=host --rm -e SONAR_HOST_URL="http://localhost:9000" -e SONAR_LOGIN="${NEO_API_SONAR_TOKEN}" -v "${PWD}:/usr/src" sonarsource/sonar-scanner-cli
```

TODO:

- Check all arrow functions -> change to implicit returns
- Remove duplicate code in data sources
- Unify function names in resolvers.ts
