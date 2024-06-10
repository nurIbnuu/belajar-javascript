//    ini pakai 'if'
let hasil = prompt('Masukkan nilai Anda!\n A/B/C/D').toUpperCase();
if (hasil == 'A') {
  alert('Sangat Baik');
} else if (hasil == 'B') {
  alert('Baik');
} else if (hasil == 'C') {
  alert('Cukup');
} else if (hasil == 'D') {
  alert('Belajar Lagi');
} else {
  alert('Salah Input')
}

//    ini pakai 'switch'
let result = prompt('Input Your Result!\n a/b/c/d').toLowerCase();
switch (result) {
  case 'a':
    alert('Very Good');
    break;
  case 'b':
    alert('Good');
    break;
  case 'c':
    alert('Enough');
    break;
  case 'd':
    alert('Learn Again');
    break;
  default:
    alert('Wrong Input');
    break;
}



// Pada video sebelumnya, kita telah mempelajari mengenai pengkondisian dengan 2 cabang, dengan menggunakan kata kunci if untuk kondisi yang benar dan else untuk kondisi yang salah. Pada video ini, kita akan mempelajari mengenai cara membuat pengkondisian dengan cabang yang banyak.

// Sebagai contoh, alur kerja program kita bisa dilihat di layar. Pertama kita menggunakan fungsi prompt untuk meminta pengunjung memasukkan nilai result ujian, yang kita simpan dalam variable score. Dan kemudian kita menggunakan pengkondisian berdasarkan nilai dari score. Apabila nilainya A, maka kita tulis “Sangat Baik” di console. Apabila nilainya B, maka kita tulis “Baik”. Apabila nilainya C, maka kita tulis “Cukup”. Apabila nilai D, maka kita tulis “Belajar lagi”. Selain itu, artinya nilai selain A B C dan D, maka kita tuliskan “Salah Input”. Setelah keluar dari percabangan, maka kita kembali ke alur normal dan kita menampilkan nilai dari score di console.

// Kita langsung mulai coding ya. Disini saya sudah menyiapkan beberapa file kode. Yang pertama adalah index.html, yang isinya hanya boilerplate, dan ada satu tag image pada body. Setelah itu ada satu tag script yang mengarah ke file if1.js. Untuk file Javascriptnya, saya telah menyediakan if1.js dan if2.js. Jadi dalam video ini, rencananya kita akan membahas mengenai 2 solusi untuk alur kerja script seperti yang kita bahas barusan.

// Kita buka file if1.js. Disini sudah ada 1 baris kode awal kita ya. Kita memanggil fungsi prompt untuk meminta pengunjung memasukkan nilai ujian, dan kemudian kita simpan ke dalam variable score. Nah, di alur kerja normal yang paling bawah, kita akan menampilkan nilai dari variable score. Jadi dibawahnya kita tambahkan kodenya ya:

// console.log(score);
// Nah, sekarang kita masuk ke kode di tengahnya, yaitu percabangan. Kita sudah belajar dari video sebelumnya, untuk membuat percabangan maka kita bisa menggunakan keyword if. Kita buat kondisi pertama ya. Jika nilai score adalah a

// if(score == "a")
// {
// }
// Di ingat-ingat lagi ya untuk sintaks pengkondisian yang benar. Ingat bahwa kita harus menggunakan tanda sama dengan sebanyak 2 kali untuk operator perbandingan. Kemudian ingat lagi untuk menuliskan string huruf a, kita harus menggunakan tanda kutip, boleh kutip tunggal maupun ganda. Kemudian ingat juga posisi dari tanda kurung dan tanda kurung kurawal. Di dalam tanda kurung kurawal, kita menuliskan kode yang akan dijalankan apabila nilai score adalah “a”. Kita tambahkan kodenya

// console.log(“Sangat Baik”);
// Selanjutnya kita tuliskan kode untuk cabang keduanya ya. Yaitu dengan menggunakan keyword else.

// else
// {
//   console.log("Baik");
// }
// Kita simpan dan jalankan di browser. Kita masukkan nilai pertama A. Maka kita mendapatkan tulisan “Sangat Baik”. Kita coba B, dan hasilnya “Baik”. Kita coba huruf C, dan hasilnya tetap “Baik”. Hal ini terjadi karena kita menuliskan kodenya menggunakan keyword else ya. Jadi kalau kita memasukkan nilai apapun selain “a”, maka kita mendapatkan hasil “Baik”.

// Sebelum kita memperbaiki alur percabangan, ada baiknya kita bahas mengenai case sensitif terlebih dahulu ya. Javascript bersifat case sensitif. Artinya huruf besar akan dianggap berbeda dari huruf kecil. Misalkan kita ulangi script ini dan saya masukkan huruf A. Maka kita mendapatkan jawaban “Baik”. Hasil ini disebabkan karena huruf A besar tidak sama dengan huruf A kecil, sehingga program akan masuk ke bagian else.

// Nah, untuk memperbaikinya, setelah prompt kita bisa tambahkan method toLowerCase(). Jadi apapun yang dimasukkan oleh pengunjung, akan diubah menjadi huruf kecil. Sekarang kalau kita jalankan lagi script ini dan kita masukkan nilai A. Maka sekarang kita mendapatkan hasil “Sangat Baik”, dan bisa dilihat disini bahwa nilai yang disimpan di dalam score telah diubah menjadi huruf a kecil.

// Oke, sekarang kita lanjutkan untuk memperbaiki kode percabangan kita. Kita lihat lagi pada keyword else. Kode disini akan selalu dijalan untuk semua nilai selain a. Padahal seharusnya hanya dijalankan apabila nilainya b. Oleh karena itu disini kita harus menambahkan kondisi baru. Nah, untuk keyword else ini bisa kita ubah menjadi

// else if(score == "b")
// Jadi kode yang “baik” ini, hanya dijalankan apabila nilai score adalah “b”.

// Keyword else if ini bisa kita gunakan lagi untuk kondisi berikutnya, yaitu nilai c dan d. Maka kode yang bisa kita tambahkan adalah

// else if(score == "c")
// {
//   console.log("Cukup");
// }
// else if(score == "d")
// {
//   console.log("Belajar lagi");
// }
// Dan kabar baiknya disini, keyword else if ini masih bisa kita teruskan tanpa batas. Jadi bisa saja kita teruskan sampai huruf z, atau bahkan kalau masih mau lebih jauh lagi juga bisa. Namun untuk mempersingkat video ini, maka kita hanya mencoba hingga huruf d saja.

// Dan yang terakhir, untuk nilai-nilai selain yang pernah disebutkan dalam kondisi diatas, maka kita menggunakan keyword else.

// else
// {
//   console.log("Salah Input");
// }
// Perhatikan bahwa cara kerja browser untuk if, akan dimulai dari paling atas. Jadi pertama browser akan memeriksa dahulu apakah nilai sama dengan A? Apabila tidak, maka browser turun ke else if dibawahnya. Apakah nilai sama dengan B? Apabila tidak, maka diperiksa lagi berikutnya apakah nilai sama dengan C? Kalau masih tidak sama, diperiksa lagi apakah sama dengan D? Dan yang terakhir apabila tidak ada yang sama, maka browser menampilkan “Salah Input”.

// Kita coba jalan di browser ya. A “Sangat Baik”. B “Baik”. C “Cukup”. D “Belajar Lagi”. Dan selain ini semuanya adalah “Salah Input”. Artinya kita sudah berhasil mengkodekan alur kerja ini. Kodenya sederhana saja ya. If, else if, else if, else if dan else. Apabila teman-teman ingin mengunduh source code ini, bisa melihat deskripsi pada video.

// Sekarang kita lanjutkan ke solusi kedua. Pertama kita buka dahulu kode html dan kita ubah link scriptnya menuju ke file if2.js. Dan kita tambahkan dahulu kode setelah percabangan yaitu

// console.log(score);
// Nah, sekarang kita membuat kode percabangan dengan menggunakan keyword lainnya ya. Kalau tadinya kita menggunakan keyword if dan else. Sekarang kita menggunakan keyword dan sintaks yang berbeda, yaitu switch dan case. Bagaimana cara menggunakannya? Pertama kita sebutkan dahulu keyword switch diikuti dengan tanda kurung. Dan kemudian kita sebutkan nama variable yang menjadi kondisi, yaitu score. Setelah itu kita berikan kurung kurawal.

// Di dalam kurung kurawal, kita sebutkan nilai-nilai yang menjadi kondisi dengan menggunakan keyword case diikuti dengan tanda titik dua. Dan kemudian diakhiri dengan keyword break. Jadi kodenya menjadi seperti ini

// case "a":
// 	console.log("Sangat Baik");
// 	break;
// Kita bisa lanjutkan lagi case untuk nilai b, c dan d.

// case "b":
// 	console.log("Baik");
// 	break;
// case "c":
// 	console.log("Cukup");
// 	break;
// case "d":
// 	console.log("Belajar Lagi");
// 	break;
// Dan di bagian terakhir, untuk nilai yang tidak pernah dibahas dalam case, kita menggunakan keyword default.

// default:
// 	console.log("Salah Input");
// 	break;
// Kita simpan dan coba jalankan di browser. Hasilnya sama ya. A Sangat Baik. B Baik. C Cukup. Dan D Belajar Lagi. Dan sisanya Salah Input.

// Perhatikan lagi ya kode dari switch. Disini ada sintaks yang berbeda dari sintaks yang pada umumnya digunakan pada Javascript. Perhatikan pada kode if. Semua kode yang akan dijalankan browser apabila kondisinya benar, dimulai dan diakhiri oleh kurung kurawal. Sedangkan pada kode switch. Semua kode yang akan dijalankan apabila kondisinya benar, dimulai dengan tanda titik dua. Dan diakhiri dengan keyword break.

// Apa yang akan terjadi apabila kita lupa menaruh break? Maka browser akan bablas dan menjalankan kode di case berikutnya. Sebagai contoh, kita hapus break pada case “a”. Nantinya pada saat kita memberikan input “a”, pertama browser menjalankan dahulu kode tulis Sangat Baik. Dan kemudian browser melanjutkan ke kode berikutnya, yaitu menulis Baik. Dan setelah itu browser ketemu keyword break, maka browser keluar dari switch dan melanjutkan ke kode menulis score. Kita coba di browser ya. Kita input a. Maka tulisan yang keluar di console adalah “Sangat Baik”, “Baik”, dan “a”. Kita kembalikan keyword break agar source code kembali normal.

// Oke ya. Jadi pada video ini kita telah membahas mengenai 2 cara untuk membuat pengkondisian dengan banyak cabang. Yang pertama menggunakan if else. Dan yang kedua menggunakan switch case. Di kenyataannya kita akan lebih banyak menggunakan if else, karena cara penulisan kode ini jauh lebih flexible. Pada if, kita bisa menuliskan kondisi dengan menggunakan operator perbandingan lebih besar dan lebih kecil, dan kita bisa menggabungkannya dengan operator logika seperti AND OR. Sedangkan pada switch, kita hanya bisa membuat case hanya dengan operator sama dengan. Jadi kita tidak bisa membuat kondisi seperti nilai lebih besar dari 5.

// Kemudian kita perhatikan lagi pada sintaks else if, disini kita memasukkan lagi kondisi baru, disini bisa saja kita memasukkan kondisi baru yang sama sekali berbeda dari kondisi pertama if. Misalkan pada if pertama kita mengkondisikan bila score = “a”, pada kondisi else if kita bisa saja memasukkan kondisi seperti age > 20. Jadinya 2 kondisi yang sangat berbeda. Kondisi pertama kita kita membicarakan mengenai variable score, sedangkan di kondisi kedua kita membicarakan mengenai variable age.

// Kode seperti ini bisa jalan pada keyword if. Namun tidak bisa jalan pada keyword switch. Karena pada switch, kita sudah mematok mati ke variable score. Semua case di dalam switch harus merujuk ke variable score. Tidak bisa case pertama merujuk ke variable score sedangkan case kedua merujuk ke variable age. Jadinya malah error.