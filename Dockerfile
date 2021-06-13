FROM node:14-alpine
MAINTAINER Leonardo Guimaraes <leonardoguimaraes@nasajon.com.br>

RUN apk -U add git openssh && \
    rm -rf /var/lib/apt/lists/* && \
    rm /var/cache/apk/*