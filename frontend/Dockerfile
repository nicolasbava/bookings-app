# frontend/Dockerfile
FROM node:20.11.1-slim

WORKDIR /app

# Copia los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instala solo dependencias necesarias para producción
RUN npm ci --omit=dev && npm cache clean --force

# Copia el resto del código
COPY . .

# Construye la app
RUN npm run build

# Expone el puerto
EXPOSE 3000

# Arranca el server de producción
CMD ["npm", "run", "start"]


# # Frontend Dockerfile
# FROM node:20.11.1-bullseye

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# RUN npm run build

# EXPOSE 3000
# CMD ["npm", "run", "start"]
