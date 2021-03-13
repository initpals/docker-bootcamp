From node:14.15.5-alpine3.10
RUN mkdir -p /node-app/
WORKDIR /node-app
COPY package*.json /node-app/
RUN npm install
COPY . /node-app/
EXPOSE 50511
CMD ["node", "server.js"]








