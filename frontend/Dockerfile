FROM node:20-alpine
WORKDIR /app
COPY package*.json .
RUN npm update
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run","dev"]