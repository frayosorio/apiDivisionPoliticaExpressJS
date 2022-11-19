# Instalar Node JS
FROM node:16

# Crear la carpeta de la aplicación
WORKDIR /usr/src/app

# Instalar las dependencias
COPY package*.json ./
RUN npm install

# Copiar el codigo fuente
COPY . .

# Configurar el puerto de acceso
EXPOSE 8080
CMD [ "node", "app.js" ]

