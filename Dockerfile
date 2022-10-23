FROM node:18-alpine
WORKDIR /usr/app
COPY . /usr/app/
CMD ["node", "/usr/app/dist/page-builder/server/main.js"]