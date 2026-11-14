# Latihan CI/CD & Standarisasi Coding

Repositori ini dikembangkan untuk memenuhi tugas mata kuliah Standarisasi Coding, mengimplementasikan otomatisasi *CI/CD pipeline*, *quality gates*, serta pengujian unit *code coverage*.

## 🛠️ Tech Stack & Tools
- **Runtime**: Node.js
- **Linter**: ESLint
- **Formatter**: Prettier
- **Git Hooks**: Husky & lint-staged
- **Testing Framework**: Jest
- **CI/CD Pipeline**: GitHub Actions

---

## 📋 Quality Gates
Pipeline CI dirancang untuk memvalidasi kualitas kode secara otomatis pada setiap `push` dan `pull request` ke branch utama, meliputi:
1. **Linting Check**: Memastikan kode bebas dari error sintaks dan pelanggaran aturan ESLint.
2. **Formatting Check**: Memastikan seluruh berkas kode sesuai dengan standar penataan gaya Prettier.
3. **Unit Testing & Coverage**: Menjalankan pengujian Jest dengan ambang batas minimal *coverage* sebesar **80%**.

---

## 🚀 Cara Menjalankan Secara Lokal

Ikuti langkah-langkah berikut untuk menguji proyek di lingkungan lokal Anda:

### 1. Instalasi Dependensi
Jalankan perintah berikut untuk menginstal seluruh pustaka yang diperlukan:
\`\`\`bash
npm install
\`\`\`

### 2. Menjalankan Linter (ESLint)
Untuk memeriksa apakah ada kesalahan penulisan kode:
\`\`\`bash
npm run lint
\`\`\`

### 3. Pemeriksaan Format Kode (Prettier)
Untuk memeriksa kesesuaian format kode:
\`\`\`bash
npm run format:check
\`\`\`
*(Atau gunakan `npx prettier --write .` untuk memperbaiki format secara otomatis).*

### 4. Menjalankan Unit Test & Coverage (Jest)
Untuk menjalankan pengujian unit beserta laporan cakupan (*coverage*):
\`\`\`bash
npm test -- --coverage
\`\`\`