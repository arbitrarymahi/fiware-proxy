#base image
FROM node:alpine

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /usr/app
COPY ./ ./
RUN npm install

#Default commandd
CMD ["npm","start"]