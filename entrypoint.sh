#!/bin/sh

if [ ! -f "angular.json" ]; then
  echo "▶ Creando proyecto Angular con CSS..."

  ng new app \
    --style=css \
    --skip-tests

  cd app

  echo "▶ Agregando Ionic..."
  ng add @ionic/angular --skip-confirmation
else
  cd app
fi

exec sleep infinity