FROM node
WORKDIR /app
COPY package.json package.
RUN npm install
COPY . . 
EXPOSE 9980
CMD ["node","app.js"]
