FROM node:18-slim

USER node

WORKDIR /home/node/app

COPY --chown=node:node packacge*.json .
RUN npm install

COPY --chown=node:node . .

CMD [ "tail", "-f", "/dev/null" ]
