FROM node:latest
# Crear carpeta para la aplicación
WORKDIR /usr/src/app

# Instalar dependencias
# Se usa un comodín para garantizar que ambos package.json Y package-lock.json sean copiados
COPY package*.json ./

RUN npm install
# Si se está construyendo para producción
# RUN npm ci --only=production

# fuente de la aplicacion completo
COPY . .

EXPOSE 3030
CMD [ "node", "app.js" ]