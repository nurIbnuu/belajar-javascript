let stringAndNumber = '25' + 10;
// 1. 10 diubah ke string
// 2. + menjadi operator concatenation string
console.log(stringAndNumber);



// Saya sudah membuatkan contoh script sederhana yang bisa kita lihat di layar. Baris pertamanya adalah

// let age = prompt(“Masukkan umur Anda”);
// Disini ada fungsi baru yang belum pernah kita pelajari ya, yaitu prompt. Prompt ini mirip dengan alert, fungsinya sama-sama menampilkan dialog box dalam bentuk popup. Namun ada sedikit perbedaan ya. Kalau kita lihat pada kode kita, nantinya prompt akan menampilkan tulisan Masukkan umur Anda, dan kemudian meminta pengunjung situs untuk memasukkan suatu nilai. Nilai ini akan disimpan di dalam variable age atau umur.

// Kita lihat ke baris kedua

// age = age + 10;
// Artinya kita menambahkan umur yang dimasukkan oleh pengunjung dengan angka 10. Dan kemudian kita simpan lagi hasilnya ke dalam variable age.

// Dan baris ketiga

// alert(“10 tahun lagi umur Anda adalah “ + age);
// Artinya kita menampilkan popup yang isinya tulisan 10 tahun lagi umur Anda adalah. Kemudian diikuti dengan nilai variable age. Berhubung kita menambahkan nilai yang dimasukkan oleh pengunjung dengan angka 10, artinya nanti mestinya angka yang ditampilkan di akhir kode ini sudah bertambah 10 ya.

// Kita jalankan script sederhana ini. Masukkan umur Anda. Sebagai contoh, saya masukkan 25. Dan kita lihat hasil berikutnya. 10 tahun lagi umur Anda adalah 2510.

// Kenapa bisa begini ya? Seharusnya 25 ditambah 10 adalah 35. Tapi disini browser malah menunjukkan angka 2510.

// Nah, hal ini disebabkan karena pada saat saya memasukkan 25 di kode baris pertama, nilai yang disimpan ke dalam variable age adalah 25 dalam bentuk string. Dan di baris kedua, pada saat saya menambahkan age dengan angka 10, berhubung variable age berupa string, maka operator tanda + disini berubah fungsi. Bukan lagi sebagai operator aritmatika, melainkan menjadi operator string concatenation.

// Kejadian seperti ini nantinya akan sering kita temui pada saat kita menuliskan kode Javascript. Oleh karena itu, sangat penting sekali pemahaman kita mengenai tipe data yang telah kita bahas pada video sebelumnya. Pada video ini, kita akan membahas lebih lanjut mengenai interaksi antar tipe data. Sebagai contoh string ditambahkan dengan number, hasilnya menjadi apa? Dan kemudian kita juga akan mempelajari mengenai cara melalukan konversi atau mengubah tipe data, seperti tipe data string menjadi number, dan sebaliknya.

// Oke, sekarang kita buka dahulu console dengan cara klik kanan, pilih Inspect. Lalu kita pilih tab Console. Jadi disini kita bisa langsung menuliskan kode Javascript.

// Nah, simbol tanda tambah di Javascript ini sifatnya unik. Mengapa? Karena satu simbol yang sama bisa memiliki 2 fungsi yang berbeda. Yang pertama adalah sebagai operator aritmatika. Sebagai contoh, kalau saya ketikkan 25 + 10, maka hasilnya adalah 35. Ini adalah hasil yang diharapkan dari 3 baris contoh kode ini.

// Fungsi kedua dari simbol tanda tambah adalah string concatenation. Sebagai contoh, saya memiliki string pertama “Hello” yang saya tambahkan dengan string kedua “World”. Maka hasilnya adalah string gabungan yaitu “HelloWorld”. Jadi disini, string yang kedua tinggal kita tempelkan saja di bagian belakang dari string pertama, sehingga hasilnya “HelloWorld”.

// Kita lihat contoh berikutnya. Saya buat string yang isinya angka “25”. Dan saya tambahkan dengan string yang isinya angka lagi “10”. Hasilnya? Ya string gabungan “2510”. Jadi string yang “10” ini tinggal digabung saja dibelakang “25”. Jadinya “2510”.

// Sekarang muncul pertanyaan berikutnya. Bagaimana kalau kita menambahkan tipe data string dengan number? Kita lihat contoh pertama ya. “25” + 10. Maka hasilnya “2510”. Artinya angka 10 disini diubah menjadi String, dan kemudian tanda tambah disini berubah menjadi operator penggabungan string.

// Contoh kedua. Bagaimana kalau yang didepannya angka 25, dan saya tambahkan dengan “10”. Jadi disini posisi number dan string-nya dibalik ya. Jadi number di depan, lalu string di belakang. Dan hasilnya tetap “2510”. Jadi kesimpulannya, jika ada salah satu operand-nya berupa string, tidak peduli di depan atau di belakang, maka tanda tambah berubah menjadi operator penggabungan string.

// Sekarang kita buat contoh yang lebih rumit. Sebagai contoh.

// 10 + 11 + “12”
// Dan hasilnya adalah “2112”. Komputer bekerja dari kiri ke kanan. Awalnya komputer memproses angka 10 ditambah dengan angka 11, maka hasilnya adalah 21. Kemudian angka 21 ditambahkan dengan string “12”, maka yang terjadi adalah penggabungan string. Hasilnya menjadi “2112”.

// Sekarang saya ganti contohnya. Tipe data string saya pindahkan ke paling depan

// “10” + 11 + 12
// Hasilnya adalah “101112”. Awalnya komputer memproses string “10” ditambah dengan angka 11. Hasilnya menjadi string “1011”. Kemudian ditambahkan lagi dengan angka 12. Dan hasil akhirnya adalah “101112”.

// Kita masuk ke materi berikutnya. Bagaimana caranya untuk melakukan konversi tipe data. Misalkan saya memiliki string yang isinya angka 25. Apakah saya bisa mengubahnya menjadi angka 25? Jawabannya adalah bisa. Kita bisa menggunakan fungsi parseInt. Dengan huruf i besar. Int disini singkatan dari Integer, atau bilangan bulat. Sebagai contoh, saya ketikkan kodenya menjadi

// parseInt(“25”);
// Dan hasilnya adalah angka 25. Jadi ini adalah solusi untuk perbaikan kode saya yang sebelumnya. Jadi sebelum saya menambahkan variable age dengan angka 10, saya mesti memanggil fungsi parseInt terlebih dahulu untuk mengubah tipe data age, dari string menjadi number.

// Kita coba lebih lanjut fungsi parseInt ini. Bagaimana kalau kita isi dengan bilangan pecahan? Misalkan “25.5”. Berhubung disini kita menggunakan bahasa Inggris, maka tanda koma harus diganti menjadi tanda titik ya. Dan hasilnya tetap 25. Jadi yang diambil hanya bilangan bulat sebelum tanda titik saja, sedangkan tanda titik dan belakangnya diabaikan.

// Kita coba lagi. Bagaimana kalau dibelakang bilangan bulat kita tambahkan huruf. Misalnya “25abcd”. Hasilnya juga tetap 25. Jadi Javascript otomatis mengabaikan semua karakter yang menyebabkan error dibelakang angka.

// Bagaimana kalau karakternya berada di depan? Kita coba “abcd25”. Maka hasilnya adalah Not a Number. Jadi apabila huruf pertama dari string bukan berupa angka, maka hasilnya adalah Not a Number.

// Nah, sekarang pertanyaan berikutnya. Bagaimana kalau kita perlu mengubah string yang berupa bilangan desimal? Disini kita bisa menggunakan fungsi parseFloat. Sebagai contoh, kita panggil parseFloat dengan argumen string “25.5”. Maka kita mendapatkan hasil angka 25,5.

// Sekarang kita masuk ke materi terakhir dari video ini. Bagaimana kalau kita memiliki data berupa angka dan kita ingin mengubahnya menjadi String? Nah, disini kita bisa memanggil fungsi dengan nama String dengan huruf S besar.

// Sebagai contoh, kalau kita memiliki nilai angka 25 dan ingin mengubahnya menjadi string. Maka kodenya menjadi

// String(25);
// Dan kita mendapatkan string “25”.

// Yang menariknya lagi, fungsi String ini bisa mengubah tipe data apa pun menjadi string, tanpa menyebabkan error. Jadi bisa kita coba ya. Misalkan tipe data boolean.

// String(true);
// Tipe data null.

// String(null);
// Dan bahkan tipe data undefined. Kita buat dahulu variable baru yang tipenya undefined.

// let varUndefined;
// typeof(varUndefined);
// String(varUndefined);
// Dan hasilnya adalah string yang isinya “undefined”.

// Kita buka kembali kode Javascript. Apa yang harus diperbaiki disini? Sudah kita bahas barusan ya. Baris kedua menjadi

// age = parseInt(age) + 10;
// Jadi dengan kode seperti ini, kita memastikan bahwa tipe data yang diproses adalah angka ditambah dengan angka. Sehingga tanda tambah disini akan diartikan sebagai operator aritmatika.

// Kita coba hasilnya di browser.

// Pertama kita coba dahulu masukkan angka 25. Dan hasilnya sesuai harapan ya. Angka 35.

// Kita refresh lagi. Kali ini kita coba masukkan huruf “abcd”. Script tetap berjalan normal ya. Tidak berhenti karena fatal error. Namun hasil yang kita dapatkan adalah Not A Number.