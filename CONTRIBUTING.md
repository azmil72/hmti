# 🤝 Panduan Kontribusi

Terima kasih telah tertarik untuk berkontribusi pada repository **HMTI** 🎉  
Kami sangat menghargai setiap bentuk kontribusi, baik berupa laporan bug, pengajuan fitur, perbaikan dokumentasi, maupun pengembangan kode.

Dokumen ini dibuat untuk memastikan proses kontribusi berjalan **terstruktur, konsisten, dan profesional** sesuai standar proyek open-source.

---

## 📌 Daftar Isi
- [Kode Etik](#-kode-etik)
- [Cara Berkontribusi](#-cara-berkontribusi)
- [Melaporkan Bug](#-melaporkan-bug)
- [Mengajukan Fitur Baru](#-mengajukan-fitur-baru)
- [Workflow Pengembangan](#-workflow-pengembangan)
- [Standar Penulisan Kode](#-standar-penulisan-kode)
- [Standar Commit Message](#-standar-commit-message)
- [Pull Request](#-pull-request)
- [Struktur Branch](#-struktur-branch)
- [Bantuan & Dukungan](#-bantuan--dukungan)

---

## 📜 Kode Etik

Dengan berkontribusi pada repository ini, setiap kontributor diwajibkan untuk:

- Bersikap sopan, profesional, dan saling menghargai
- Tidak melakukan pelecehan, diskriminasi, atau ujaran kebencian
- Menghormati pendapat dan kontribusi orang lain
- Menjaga suasana kolaborasi yang sehat dan konstruktif

Pelanggaran terhadap kode etik dapat menyebabkan kontribusi ditolak atau akses dibatasi.

---

## 🚀 Cara Berkontribusi

### 1️⃣ Fork Repository
Fork repository ini ke akun GitHub kamu.

### 2️⃣ Clone Repository Fork
```bash
git clone git@github.com:username/hmti.git
cd hmti
```

### 3️⃣ Tambahkan Remote Upstream
```bash
git remote add upstream git@github.com:azmil72/hmti.git
```

### 4️⃣ Sinkronisasi Branch Utama
```bash
git fetch upstream
git checkout development
git pull upstream development
```

---

## 🐞 Melaporkan Bug

Gunakan Issue Template – Bug Report dan sertakan informasi berikut:

Deskripsi bug

Langkah reproduksi

Perilaku yang diharapkan

Perilaku yang terjadi

Screenshot atau video (jika ada)

Informasi lingkungan (OS, browser, versi aplikasi)

Issue tanpa informasi yang jelas berpotensi ditutup tanpa tindak lanjut.

---

## ✨ Mengajukan Fitur Baru

Gunakan Issue Template – Feature Request dengan mencantumkan:

Masalah yang ingin diselesaikan

Solusi yang diusulkan

Alternatif solusi (jika ada)

Manfaat fitur bagi pengguna atau organisasi

Catatan tambahan (jika ada)

---

## 🔄 Workflow Pengembangan

Pastikan branch lokal up-to-date

Buat branch baru dari development

```bash
git checkout -b feature/nama-fitur
```

Lakukan pengembangan

Commit perubahan

Push ke repository fork
```bash
git push -u origin feature/nama-fitur
```

Buat Pull Request ke branch development

---

## 🧩 Standar Penulisan Kode

Ikuti struktur folder yang telah ditentukan

Gunakan penamaan variabel dan fungsi yang deskriptif

Hindari duplikasi kode

Pastikan kode mudah dibaca dan dipelihara

Tambahkan komentar bila logika cukup kompleks

Pastikan tidak ada error sebelum membuat Pull Request

---

## 📝 Standar Commit Message

Gunakan format **Conventional Commits** untuk menjaga riwayat perubahan tetap rapi:

Format: `type: deskripsi singkat perubahan`

Jenis Type:
- `feat`: Penambahan fitur baru
- `fix`: Perbaikan bug
- `docs`: Perubahan dokumentasi
- `style`: Perubahan format (spasi, titik koma, dll)
- `refactor`: Perubahan kode tanpa mengubah logika
- `test`: Penambahan atau perbaikan test
- `chore`: Tugas rutin (update dependency, dll)

---

## 🔀 Pull Request

Sebelum membuat Pull Request, pastikan:

Branch tidak memiliki konflik

Kode sudah diuji

Sudah mengikuti standar commit

Menggunakan Pull Request Template

Pull Request akan:

Direview oleh maintainer

Diberikan feedback jika diperlukan

Di-merge setelah memenuhi standar kualitas

---

## 🌳 Struktur Branch

| Branch | Deskripsi |
|--------|-----------|
| `main` | Versi stabil / produksi |
| `development` | Integrasi dan pengembangan |

---

## 🆘 Bantuan & Dukungan

Jika mengalami kendala:

Gunakan GitHub Issues

Sertakan error log dan konteks

Jelaskan tujuan yang ingin dicapai secara jelas

---

## ❤️ Terima Kasih

Terima kasih telah berkontribusi pada repository HMTI.
Kontribusi kamu sangat berarti untuk keberlanjutan dan kualitas proyek ini 🙌

---