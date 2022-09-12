FROM node
WORKDIR /app
COPY package*.json ./
RUN npm --verbose install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
