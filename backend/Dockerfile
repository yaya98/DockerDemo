FROM node:20.9.0-alpine3.18
WORKDIR /Docker_Compose/backend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]