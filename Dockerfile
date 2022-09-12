FROM node:16.17.0
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install npm@8.19.1
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
