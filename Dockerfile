FROM node:10

# Create app directory
WORKDIR /project-community

# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./

RUN yarn
RUN yarn build

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]