# 📚 Linguaksara (LinguaLeap)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

## 1. Project Definition

### What is this project?
**Linguaksara** adalah sebuah platform *web-app* canggih untuk pembelajaran bahasa, yang didukung oleh teknologi AI. Proyek ini dirancang untuk menyediakan pengalaman belajar yang personal, interaktif, dan *gamified* (menggunakan sistem gamifikasi).

Proyek ini dibangun menggunakan Next.js dan Firebase, dan berfokus pada penciptaan lingkungan belajar yang aman, mudah didekati, dan kreatif.

### The Problem It Solves 🤔
* Pembelajaran bahasa tradisional seringkali kaku, membosankan, dan tidak personal.
* Banyak pelajar merasa kesulitan mempertahankan motivasi dalam jangka panjang.
* Kurangnya kesempatan untuk latihan percakapan praktis (berbicara) tanpa rasa takut dihakimi.
* Sulit untuk mendapatkan umpan balik (feedback) dan koreksi tata bahasa (grammar) secara instan.

### The Solution Provided ✅
Linguaksara mengatasi masalah ini dengan menyediakan platform yang:
1.  **Interaktif & Terstruktur:** Menggabungkan modul Kosakata, Grammar, dan Membaca dengan pelajaran yang jelas.
2.  **Didukung AI:** Menyediakan *chatbot* simulasi percakapan AI dan koreksi grammar otomatis untuk latihan praktis.
3.  **Personalisasi & Gamifikasi:** Menampilkan dashboard personal dengan sistem XP, level, dan leaderboard untuk menjaga motivasi pengguna.
4.  **Mudah Diakses:** Menggunakan sistem autentikasi yang aman dan mudah (Email, Google, Facebook) via Firebase Auth.

---

## 2. Tech Stack 🛠️

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
* **Platform & Backend:** [Firebase](https://firebase.google.com/)
    * **Autentikasi:** Firebase Authentication
    * **Hosting:** Firebase App Hosting
    * *(Kemungkinan juga Firestore/Realtime Database untuk data pengguna)*
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Komponen UI:** [Shadcn/ui](https://ui.shadcn.com/)
* **Fitur AI:** Model AI eksternal (via API) untuk koreksi grammar dan simulasi percakapan.

---

## 3. Key Features ✨

* **Autentikasi Pengguna:** Login/Daftar mudah via Email, Google, atau Facebook menggunakan Firebase Auth.
* **Dashboard Personal:** Menampilkan rencana belajar harian dan statistik progres pengguna.
* **Modul Kosakata:** *Flashcards* interaktif dengan audio pengucapan dan sistem *Spaced Repetition* harian.
* **Modul Grammar:** Pelajaran tata bahasa terstruktur dengan latihan interaktif.
* **Modul Membaca:** Latihan pemahaman bacaan dengan fitur *highlight* kosakata dan definisi instan.
* **Percakapan AI:** *Chatbot* simulasi percakapan untuk melatih kemampuan berbicara, lengkap dengan koreksi grammar AI dan saran kalimat alternatif.
* **Sistem Gamifikasi:** Pengguna mendapatkan XP, naik level, dan bersaing di *leaderboard*.
* **Latihan Interaktif:** Berbagai jenis soal (pilihan ganda, isi bagian kosong, *drag-and-drop*) dengan penilaian otomatis.
* **Pembelajaran Personal:** Latihan disesuaikan oleh AI berdasarkan progres dan tingkat kemampuan pengguna.

---

## 4. Style Guidelines 🎨

Desain UI aplikasi ini mengikuti panduan berikut untuk menciptakan suasana belajar yang tenang dan kreatif:

* **Primary Color:** Sky Blue (`#87CEEB`) - Menciptakan ketenangan dan kepercayaan.
* **Background Color:** Light Cyan (`#E0FFFF`) - Memberikan latar belakang yang bersih dan sejuk.
* **Accent Color:** Lavender (`#E6E6FA`) - Menambah sentuhan kreativitas dan kelembutan.
* **Font (Body/Headline):** 'PT Sans' (sans-serif) - Modern namun tetap hangat.
* **Font (Code):** 'Source Code Pro' - Untuk *snippet* kode jika diperlukan.

---

## 5. Local Setup & Installation 🚀

### Initial Installation
Untuk menjalankan proyek ini di komputer Anda, ikuti langkah-langkah berikut:

1.  **Clone Repositori**
    ```bash
    git clone [https://github.com/Fortotest/Linguaksara.git](https://github.com/Fortotest/Linguaksara.git)
    cd Linguaksara
    ```

2.  **Install Dependensi**
    ```bash
    npm install
    ```

3.  **Setup Firebase**
    * Buat sebuah proyek baru di [Firebase Console](https://console.firebase.google.com/).
    * Dapatkan kredensial konfigurasi Firebase Anda (Firebase SDK snippet).
    * Buat file baru di root proyek bernama `.env.local`.
    * Masukkan kredensial Anda ke dalam file `.env.local` tersebut. Contoh:
        ```
        NEXT_PUBLIC_FIREBASE_API_KEY=...
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
        NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
        NEXT_PUBLIC_FIREBASE_APP_ID=...
        ```

### Running the Application
1.  **Jalankan Development Server**
    ```bash
    npm run dev
    ```

2.  **Buka Aplikasi**
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 6. Credits 👤

### Builder
**Rizky Fadil**
