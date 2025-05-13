# backend/Dockerfile
FROM node:20.11.1-slim

WORKDIR /app

# Instala dependencias
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copia el resto del código
COPY . .

# Expone el puerto
EXPOSE 3001

# Comando de arranque (podés usar start:dev si usás ts-node en desarrollo)
CMD ["npm", "run", "start:dev"]