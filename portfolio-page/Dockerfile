FROM node:16
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]


