FROM node:12.15.0-alpine3.11

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 3000 9229

CMD ["npm", "run", "start:debug"]