FROM docker-spv.artifactory.gscorp.ad/nginx-spv:1.20.0

RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./nginx/default.conf /etc/nginx/conf.d/

RUN mkdir -p /usr/share/nginx/html/obe/modulos/host/
COPY ./dist/fe-obe-host/ /usr/share/nginx/html/obe/modulos/host/
COPY settings.json /usr/share/nginx/html/settings.json

EXPOSE 80
