FROM node

RUN mkdir /appdata

COPY server.js run.sh /appdata/
COPY build /appdata/build

WORKDIR /appdata

RUN npm install express http-proxy-middleware

ENTRYPOINT [ "/bin/sh" ]
CMD [ "run.sh" ]