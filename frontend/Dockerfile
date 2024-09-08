# Define foundational image
FROM node:20.9.0-alpine3.18

# Define the working directory inside the container
WORKDIR /Docker_Compose/frontend

# Copy package.json from host directory to the container working directory
COPY package.json .

# Run npm install inside the container
RUN npm install

# Copy the files from the host directory to the container working directory 
COPY . .

# Container will listen to port 4000
EXPOSE 4000

# Run this command when the container starts
CMD ["npm", "run", "start"]