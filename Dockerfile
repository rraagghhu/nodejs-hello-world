FROM node:carbon

COPY . .
RUN npm install

EXPOSE 80
CMD ["npm", "start"]
