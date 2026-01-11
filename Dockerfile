FROM node:24.12.0-alpine

WORKDIR /app

# Instala Ionic CLI
RUN npm install -g @angular/cli @ionic/cli


COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh
# Corrige CRLF → LF
RUN sed -i 's/\r$//' /entrypoint.sh \
    && chmod +x /entrypoint.sh

EXPOSE 8100

ENTRYPOINT ["/entrypoint.sh"]