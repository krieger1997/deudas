#!/bin/sh

# if [ ! -f "angular.json" ]; then
#   echo "▶ Creando proyecto Angular con CSS..."

#   ng new app \
#     --style=css \
#     --skip-tests

#   cd app

#   echo "▶ Agregando Ionic..."
#   ng add @ionic/angular --skip-confirmation
# else
echo "▶ ENTRANDO A APP Ionic..."
cd app
# fi

# exec sleep infinity
# export CHOKIDAR_USEPOLLING=true
# export CHOKIDAR_INTERVAL=2000
# echo "▶ AGREGANDO POLLING 2000..."

exec ionic serve --host=0.0.0.0 --port=8100 --watch