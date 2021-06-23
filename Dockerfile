FROM node:10.19
WORKDIR /egg-server
COPY . /egg-server
RUN npm install
CMD npm start