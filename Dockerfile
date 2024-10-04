FROM node:20-alpine

# Buat direktori app di dalam image
WORKDIR /app

# Salin package.json dan package-lock.json ke direktori app
COPY package*. ./
# Install dependensi dari package.json
#RUN npm install
# RUN npm install bcrypt --build-from-source

# Salin seluruh kode sumber aplikasi ke dalam image
COPY . .

# Expose port 3000 pada image
EXPOSE 5000

# Jalankan aplikasi saat container dimulai
CMD [ "npm", "start" ]
