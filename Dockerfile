FROM node:12.2.0-alpine

# set working directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --unsafe-perm --silent

# start app
CMD ["npm", "run", "serve"]
