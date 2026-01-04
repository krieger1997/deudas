# Deuda App (Ionic + Angular + Docker)

Aplicación móvil (Android en el futuro) para gestionar deudas
personales: - Deudas propias hacia terceros - Deudas de terceros hacia
mí - Estados, recordatorios y cálculos básicos - Enfoque local-first
(sin integraciones bancarias)

Proyecto en desarrollo.

------------------------------------------------------------------------

## 🧱 Stack

-   Ionic
-   Angular
-   Docker
-   Node.js
-   CSS (no SCSS)
-   Git (versionamiento en el host)

------------------------------------------------------------------------

## 📁 Estructura general

    .
    ├── app/
    ├── Dockerfile
    ├── docker-compose.yml
    ├── entrypoint.sh
    ├── README.md
    └── .gitignore

------------------------------------------------------------------------

## 🐳 Docker

### Dockerfile

    FROM node:24.12.0-alpine

    WORKDIR /app

    RUN npm install -g @angular/cli @ionic/cli

    COPY entrypoint.sh /entrypoint.sh
    RUN chmod +x /entrypoint.sh

    EXPOSE 8100

    ENTRYPOINT ["/entrypoint.sh"]

### docker-compose.yml

    services:
      ionic:
        build: .
        container_name: ionic-app
        working_dir: /app
        volumes:
          - .:/app
        ports:
          - "8100:8100"

------------------------------------------------------------------------

## 🚀 Primer arranque

### Construir y levantar

    docker compose up --build

### Entrar al contenedor

    docker compose exec ionic sh

### Crear proyecto (una sola vez)

    ng new app --style=css --skip-git --skip-tests
    cd app
    ng add @ionic/angular --skip-confirmation

### Levantar la app

    ionic serve --host=0.0.0.0

Abrir: http://localhost:8100

------------------------------------------------------------------------

## 🎨 Estilos

-   Solo CSS
-   Sin SCSS
-   Sin archivos spec

------------------------------------------------------------------------

## 🔀 Versionamiento

-   Rama principal: main
-   Commits:
    -   feat
    -   fix
    -   chore
    -   refactor

------------------------------------------------------------------------

## 🗺️ Roadmap inicial

-   Modelos
-   Persistencia local
-   CRUD de deudas
-   Recordatorios
-   IA (fase posterior)
-   Build Android

------------------------------------------------------------------------

Proyecto en fase inicial.
