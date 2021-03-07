FROM node:12-alpine
MAINTAINER mrbontor@gmail.com

# Replace shell with bash so we can source files
RUN ln -s /bin/sh /bin/bash

RUN apk update; apk add tzdata

# create app directory
WORKDIR /app

COPY package.json ./
COPY wait-for-it.sh /
RUN npm install --save

# Bundle app source
COPY . .

# Environment
ENV NODE_ENV development

# Run the command on container startup
ENTRYPOINT ["npm", "start"]
# CMD /wait-for-it.sh db_sql:3306 -- npm start
