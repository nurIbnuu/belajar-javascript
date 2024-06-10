//    Tahun Kabisat

//  Spesific to General
// let year = parseInt(prompt('Masukkan Angka!'));
// if (year % 400 === 0) {
//   alert(`${year} = Tahun Kabisat`);
// } else if (year % 100 === 0) {
//   alert(`${year} != Tahun Kabisat`);
// } else if (year % 4 === 0) {
//   alert(`${year} = Tahun Kabisat`);
// } else {
//   alert(`${year} != Tahun Kabisat`);
// }

//  General to Spesific
// let year = parseInt(prompt('Masukkan Angka!'));
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       alert(`${year} = Tahun Kabisat`);
//     } else {
//       alert(`${year} != Tahun Kabisat`);
//     }
//   } else {
//     alert(`${year} = Tahun Kabisat`);
//   }
// } else {
//   alert(`${year} != Tahun Kabisat`);
// }




// Pada video ini, kita akan latihan menuliskan logika untuk menentukan apakah suatu tahun itu merupakan tahun kabisat atau bukan. Apakah yang dimaksud dengan tahun kabisat? Tahun kabisat adalah tahun yang mendapatkan tambahan 1 hari, yaitu tanggal 29 Februari.

// Bagaimana cara menentukan apakah suatu tahun merupakan kabisat atau bukan? Nah, ini adalah aturan mainnya ya. Setiap tahun yang merupakan kelipatan 4 adalah tahun kabisat. Kecuali, tahun yang habis dibagi 100 bukanlah tahun kabisat. Kecuali lagi tahun yang habis dibagi 400 adalah tahun kabisat.

// Oke, saya sudah menyediakan source code awal untuk mengerjakan latihan ini. Source code terdiri dari 2 file yaitu index.html dan leapyear.js. Bagian html hanya berisi boilerplate, dan yang paling pentingnya adalah sebelum tag penutup body kita harus menambahkan tag script dengan source leapyear.js.

// Sedangkan pada leapyear.js saya sudah menuliskan 3 baris kode. Yang pertama kita meminta pengunjung untuk memasukkan suatu nilai tahun, dan kita simpan di dalam variable year.

// let year = prompt("Masukkan tahun");
// Sedangkan di baris berikutnya kita menuliskan di console bahwa tahun sekian yang dimasukkan oleh pengunjung adalah tahun kabisat. Lalu di baris berikutnya tahun sekian bukan tahun kabisat.

// Silahkan tambahkan logika pada source code ini, dengan menggunakan kata kunci if dan else, sehingga browser bisa menentukan apakah tahun yang bersangkutan adalah tahun kabisat atau bukan, dan menuliskan hasil yang benar di console. Pause terlebih dahulu video ini dan coba kerjakan di komputer masing-masing. Kita akan lanjutkan kembali dengan jawaban latihan.

// Kita mulai kerjakan latihannya ya. Kita mulai dari definisi yang paling atas. Setiap tahun yang merupakan kelipatan 4 adalah tahun kabisat. Bagaimana caranya kita bisa menentukan apakah tahun tersebut merupakan kelipatan 4 atau bukan? Caranya gampang ya. Kita bisa menggunakan operator modulo, dengan simbol %. Apabila tahun kita modulo dengan 4 dan hasilnya adalah 0, maka tahun tersebut adalah kelipatan 4, atau berdasarkan soal ini artinya tahun kabisat.

// Jadi ini adalah diagramnya ya. Setelah kita mendapatkan angka tahun dari pengunjung, maka kita membuat kondisi apakah year % 4 hasilnya sama dengan 0? Apabila benar, maka tahun kabisat. Sedangkan bila salah artinya bukan tahun kabisat.

// Kita langsung coding. Setelah kode pertama prompt, kita tambahkan logika if sesuai dengan diagram ya.

// if(year % 4 == 0)
// Kemudian log yang tahun kabisat kita pindahkan ke dalam if. Sedangkan log yang bukan tahun kabisat kita pindahkan ke dalam else. Oke. Solusinya simple ya. Kita coba di browser.

// Kita coba 1, bukan kabisat. 2 bukan kabisat. 3 bukan kabisat. Dan 4 adalah tahun kabisat ya, karena 4 habis dibagi dengan 4. Kalau kita coba 7 bukan tahun kabisat. Sedangkan kita coba 8 adalah tahun kabisat ya, karena 8 habis dibagi 4.

// Sekarang kita coba kondisi kedua. Kita masukkan angka 100. Ternyata 100 adalah tahun kabisat ya, karena 100 habis dibagi 4. Sedangkan kalau kita lihat di soal, semua yang kelipatan 100 adalah pengecualian, sehingga bukan tahun kabisat.

// Artinya gimana? Berarti logika pada diagram kita ini salah. Apabila tahun habis dibagi 4, hasilnya belum tentu tahun kabisat. Yang benarnya seperti apa?

// Nah, setelah kita mendapatkan angka yang habis dibagi 4, kita harus memeriksa lagi apakah angka tersebut habis dibagi 100? Apabila habis, maka bukan tahun kabisat. Sedangkan kalau tidak habis dibagi 100, maka artinya tahun kabisat.

// Kita kembali ke coding. Jadi di dalam if, kita harus kembali melakukan pemeriksaan kondisi apakah tahun tersebut habis dibagi 100? Kita tambahkan lagi kodenya

// if(year % 100 == 0)
// Jika hasilnya benar, maka bukan tahun kabisat. Kita copy saja kode dari kode pada else ya. Sedangkan kalah hasilnya salah, maka tahun kabisat.

// Kita lihat kembali kode kita. Ternyata di dalam if, masih ada if lagi. Nah, logika seperti ini kita sebut dengan nama percabangan bersarang. Kita coba hasilnya di browser.

// 3 bukan tahun kabisat. 4 adalah tahun kabisat. Kemudian kalau kita coba 100. Maka hasilnya adalah 100 bukan tahun kabisat. Sekarang kita lihat lagi kondisi ketiga pada soal ya. Semua tahun yang habis dibagi 400 adalah tahun kabisat. Kita coba pada script kita, 400 adalah.... ternyata bukan tahun kabisat ya, karena 400 habis dibagi 100.

// Artinya percabangan kita salah lagi. Tahun yang habis dibagi 100 belum tentu bukan tahun kabisat. Yang benarnya kita harus membuat kondisi lagi, apakah tahun tersebut habis dibagi 400? Apabila benar, artinya tahun kabisat. Sedangkan kalau salah artinya bukan tahun kabisat.

// Kita kembali lagi ke kode. Sekarang di dalam if tahun habis dibagi 100, kita tambahkan lagi kode

// if(year % 400 == 0)
// Jika hasilnya benar, maka tahun kabisat. Sedangkan bila hasilnya salah, maka bukan tahun kabisat.

// Kita coba di browser ya. Jika 3, maka bukan tahun kabisat. 4 adalah tahun kabisat. 100 bukan tahun kabisat. Sedangkan 400 adalah tahun kabisat.

// Oke, sekarang kita sudah berhasil mengerjakan soal latihan kita. Jadi seperti inilah proses menulis kode untuk sebuah program ya. Menulis kodenya sih gampang. Yang sulit itu adalah menentukan logikanya. Dan setelah itu kita masih harus melalui tahap testing dan debugging untuk kode yang telah kita tulis. Oleh karena itu penting sekali bagi kita untuk mempelajari dengan seksama fundamental dari pemograman, sehingga kita bisa dengan lebih cepat menuliskan logika pemogramannya, dan bisa terhindar dari banyak bugs yang tidak diperlukan.

// Sebagai bonus dalam video ini saya akan memberikan satu buah solusi lagi untuk logika tahun kabisat dengan menggunakan pendekatan yang berbeda. Kalau kita lihat lagi ke soalnya, setiap tahun yang merupakan kelipatan 4 adalah tahun kabisat. Ini adalah kondisi yang generik atau umum. Kondisi berikutnya, kecuali tahun yang habis dibagi 100 bukanlah tahun kabisat. Ini adalah kondisi yang lebih spesifik, karena seharusnya 100 habis dibagi 4, namun dikecualikan menjadi bukan tahun kabisat. Dan kondisi yang ketiga menjadi lebih spesifik lagi, karena tahun yang habis dibagi 400 mendapatkan pengecualian lagi.

// Nah, cara penulisan kode kita sebelumnya adalah pendekatan dari generik menuju spesifik. Jadi pada kode kita di bagian paling atas, kita melakukan pengecekan apakah tahun habis dibagi 4?

// Sekarang kita hendak menuliskan kode dengan pendekatan yang dibalik, yaitu dari spesifik menuju generik. Jadi kita melakukan pengecekan dari kondisi yang paling spesifik terlebih dahulu, yaitu apakah tahun habis dibagi 400?

// Dan diagram kita pun jadinya seperti ini. Setelah kita memanggil fungsi prompt dan menyimpannya ke dalam variable year. Yang pertama kita cek adalah apakah year habis dibagi 400? Apabila iya, maka hasilnya sudah pasti “Tahun Kabisat”. Sudah tidak ada pengecualian ya. Karena kondisi ini adalah yang paling spesifik.

// Selanjutnya, apakah yang terjadi bila tidak habis dibagi 400? Maka kita memeriksa ke kondisi berikutnya, yaitu apakah year habis dibagi 100? Apabila hasilnya iya, maka hasilnya sudah pasti “Bukan Tahun Kabisat”. Perhatikan bahwa kita melakukan pengecekan habis dibagi 100 setelah melakukan pengecekan habis dibagi 400. Jadi yang merupakan kondisi true disini adalah bilangan yang habis dibagi 100 namun tidak habis dibagi 400.

// Selanjutnya, apabila tidak habis dibagi 100, maka kita melakukan pengecekan terakhir. Apakah year habis dibagi 4? Perhatikan bahwa bilangan yang dicek pada kondisi terakhir ini sudah pasti bukan kelipatan 100, dan bukan kelipatan 400. Jadi hasil akhirnya sudah pasti. Kalau true artinya tahun kabisat dan kalau false artinya bukan tahun kabisat.

// Kita masuk ke source code dan sekarang saya sedang menulis di file leapyear2.js. Dan ini adalah source code pertama kita di awal latihan. Isinya hanya 3 baris kode, yang pertama untuk meminta input berubah angka tahun. Dan kemudian browser akan menuliskan bahwa tahun ini adalah tahun kabisat dan tahun ini bukan tahun kabisat. Karena belum ada logika if, maka browser akan menyebutkan kedua kalimat.

// Kita coba jalankan di browser ya. Kita masukkan misalkan angka 4. Maka browser menjawab Tahun 4 adalah tahun kabisat dan tahun 4 bukan tahun kabisat.

// Sekarang kita masukkan logikanya, dimulai dari kondisi pertama apakah tahun habis dibagi 400?

// if(year % 400 == 0)
// Jika benar maka tahun kabisat. Jika salah, kita langsung melakukan pengecekan selanjutnya yaitu apakah tahun habis dibagi 100? Kodenya adalah

// else if(year % 100 == 0)
// Jika benar, maka bukan tahun kabisat. Jika salah maka kita melakukan pengecekan terakhir apakah tahun habis dibagi 4.

// else if(year % 4 == 0)
// Jika benar maka tahun kabisat, dan jika salah maka bukan tahun kabisat.

// Kita coba hasilnya di browser ya.

// Tahun 1 bukan tahun kabisat
// Tahun 3 bukan tahun kabisat
// Tahun 4 adalah tahun kabisat
// Tahun 7 bukan tahun kabisat
// Tahun 8 adalah tahun kabisat
// Tahun 100 bukan tahun kabisat
// Tahun 400 adalah tahun kabisat
// Oke, penulisan logikanya sudah benar ya. Dan ini adalah source code akhir dari latihan kita.