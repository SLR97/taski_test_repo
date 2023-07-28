FROM node
WORKDIR /app
COPY package.json package.
RUN npm install
COPY . . 
EXPOSE 9981
CMD ["node","app.js"]
