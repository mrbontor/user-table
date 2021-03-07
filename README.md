# USER TABLE TRX
USER TABLE TRX

## Requirements

- docker
- docker-compose
- node js

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- docker
- docker-compose
- node js
- npm


## Settings

### Configuring

#### app config

The default path for config file is `./configs/config.users.table.dev.ini`, you can explicitly add config file in `--config` or `-c` argument.

```ini
[app]
host	= 0.0.0.0
port	= 2021

; log Configuration
[log]
path                    = var/log/
level                   = debug
filename                = log-users-table
type                    = both

```

#### database config

Sql config path is `./configs/config.json`,
The sql config is used to multiple connection, you can add a lot sql connections by following the model in `./model`


### docker-compose.yml

### ./db/example.sql

1. change `db/female_dayli.sql` to your sql file.

2. modify the `db/Dockfile`

```sh
FROM mysql:8.0.21

COPY ./female_dayli.sql /docker-entrypoint-initdb.d
```

## Testing && Deployment

### Running the test

Running tests requires you to have mocha and chai

    npm install mocha chai mochawesome supertest

After which you can run

    npm test

or

    npm run test

`mochawesome` is used to make reports of the test that u can find in `reports/mochawesome`
the file will be in HTML file.

To open the result of test using

    npm reports


### Deployment && Usage


```sh
# start
$ docker-compose up -d

# stop
$ docker-compose down

# remove
$ docker-compose down -v
```

## API && endpoint

there are 3 main endpoints on this service

1. List user's transactions

* *GET*    http://localhost:port/api/user/trx/list
> contentType: `application/json`
> response

```json
{
    "status" : "Boolean",
    "message" : "String",
    "data": []
}
```
2. List user's transactions using pivot function

* *GET*    http://localhost:port/api/user/trx/pivot
> contentType: `application/json`
> response

```json
{
    "status" : "Boolean",
    "message" : "String",
    "data": []
}
```

3. Dashboard | home

* *GET*    http://localhost:port
