let yourName = prompt("MASUKKAN NAMA ANDA");

yourName =
  yourName[0].toUpperCase() +
  yourName.slice(1, yourName.length).toLocaleLowerCase();

alert(yourName);



// Di video ini kita akan latihan untuk membuat Title Case. Sebagai contoh, kita mendapatkan nama anDi yang salah ketik sehingga menggunakan huruf D besar. Tugas kita disini adalah menuliskan script yang dapat memperbaiki nama Andi sehingga menjadi menggunakan huruf A besar. Cara penulisan nama seperti ini kita sebut dengan Title Case. Adapun aturan dari Title Case adalah huruf pertama menggunakan huruf besar, sedangkan huruf kedua dan seterusnya menggunakan huruf kecil. Data nama pada latihan ini dibatasi hanya mengandung satu kata tanpa spasi.

// Source code untuk mengerjakan latihan ini cukup sederhana ya. Pertama kita siapkan file index.html yang isinya hanya Boilerplate. Kita hanya perlu memberikan judul Latihan Membuat Title Case, dan satu keterangan singkat lihat hasil menggunakan console. Yang paling penting dari bagian HTML ini adalah tag script dengan source titlecase.js.

// Sedangkan kalau kita buka titlecase.js, baris pertamanya adalah kita mendeklarasinya variable name dengan nilai “anDi”. Kemudian ada tempat kosong untuk menuliskan script Title Case. Dan di akhir script, kita menuliskan nilai dari variable name di console dan kita mengharapkan hasilnya adalah Andi.

// Bagi yang ingin mengunduh source code ini bisa melihat deskripsi pada video. Pause terlebih dahulu video ini dan coba untuk mengerjakannya di video masing-masing. Kita bisa menggunakan ilmu yang kita pelajari pada video sebelumnya untuk mengerjakan latihan ini.

// Kita coba analisa sebentar soal latihan kita ya. Sebagai programmer, kita diharapkan bisa memecahkan masalah dengan cara membaginya menjadi langkah-langkah kecil. Untuk memecahkan masalah Title Case, ada 5 langkah yang mesti lakukan. Apa saja langkahnya? Sebenarnya sudah dituliskan di lembar soal.

// Langkah pertama adalah kita mengambil huruf pertama. Langkah kedua, kita ubah menjadi huruf besar. Langkah ketiga, kita mengambil huruf kedua dan seterusnya. Langkah keempat, kita ubah menjadi huruf kecil. Dan langkah kelima, kita gabungkan huruf pertama dengan huruf berikutnya.

// Sekarang kita buka browser dan kita jalankan source code awal latihan kita. Untuk melihat hasilnya kita harus menggunakan console. Jadi kita bisa klik kanan dan pilih Inspect. Kemudian pilih console. Dan kita lihat hasilnya pada saat ini adalah “anDi”.

// Kita buka source code Javascript. Dan kita mulai dari langkah pertama. Kita mesti mengambil huruf pertama dari variable name. Caranya gampang ya. Ingat bahwa string secara otomatis memiliki index. Dan untuk mengakses karakter tertentu di dalam string, kita tinggal menyebutkan nomor indexnya di dalam kurung siku. Jadi kalau kita mau mengambil huruf pertama dari name, kita tinggal menuliskan name[] di dalamnya kita tambahkan index 0. Ingat index dimulai dari angka nol ya. Kita simpan huruf pertama ini ke dalam variable name.

// Kita lihat hasilnya di browser. Sekarang browser hanya menampilkan huruf a saja. Artinya kita sudah berhasil melakukan langkah pertama.

// Kita masuk ke langkah kedua. Kita mesti mengubah huruf a menjadi huruf besar. Caranya sudah pernah kita pelajari dari video sebelumnya ya. Kita bisa menggunakan method toUpperCase(). Jadi setelah kurung siku, kita bisa langsung tambahkan .toUpperCase(). Jangan lupa untuk memanggil method harus menggunakan tanda kurung ya.

// Kita lihat hasilnya di browser. Sekarang hasilnya sudah huruf A besar.

// Langkah ketiga, kita mesti mengambil huruf kedua dan seterusnya dari variable name. Kita komentari terlebih dahulu source code awal kita. Kita buat baris baru dengan name =. Nah, untuk mengambil huruf kedua dan seterusnya, kita bisa menggunakan method slice ya, dengan memasukkan argument nomor index dari huruf kedua. Berhubung index dimulai dari angka nol, maka nomor index dari huruf kedua adalah satu. Jadi kita bisa tuliskan kodenya adalah name.slice(1).

// Kita lihat hasilnya di browser. Sekarang kita sudah berhasil mengambil huruf “nDi”.

// Langkah keempat, kita ubah hasilnya menjadi huruf kecil. Kita tinggal tambahkan method .toLowerCase().

// Kita lihat lagi hasilnya. Sudah oke ya.

// Dan langkah terakhir, kita tinggal menggabungkan string dari langkah kedua dan string dari langkah keempat. Disini kita bisa menggunakan operator tanda tambah. Source code akhir kita menjadi

// name = name[0].toUpperCase() + name.slice(1).toLowerCase();
// Kita simpan dan lihat hasilnya di browser. Dan sekarang browser pun sudah menampilkan nama Andi menggunakan Title Case.