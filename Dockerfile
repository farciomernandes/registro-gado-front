FROM node:18-alpine

RUN npm install -g @angular/cli http-server

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN ng build --configuration=production

WORKDIR /app/dist/sistema-gado-registro

EXPOSE 4200

CMD ["http-server", "-p", "4200"]
