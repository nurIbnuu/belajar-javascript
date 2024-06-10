// let name1 = 'Andi', name2 = 'Bayu', temporary;

// temporary = name1;
// name1 = name2;
// name2 = temporary;

// console.log('Nama pertama ' + name1);
// console.log('Nama kedua ' + name2);
// console.log(temporary);

let name1 = "Hubab",
  name2 = "Ibnu",
  name3 = "Nur",
  name4 = "Muhammad",
  temporary;

temporary = name1;
name1 = name4;
name4 = temporary;
temporary = name2;
name2 = name3;
name3 = temporary;

console.log(name1, name2, name3, name4);

// Pada video ini, kita akan mempelajari mengenai algoritma pertama kita. Ini adalah algoritma yang paling mudah, dan biasanya dipelajari di awal pelajaran pemograman, yaitu algoritma swap yang kita gunakan untuk menukar nilai yang dikandung oleh dua variable.

// Sebagai contoh, kita memiliki 2 buah variable yaitu nama pertama dengan nilai Andi, dan nama kedua dengan nilai Bayu. Tugas kita adalah menukar nilai dari kedua variable ini, sehingga akhirnya nama pertama menjadi Bayu, sedangkan nama kedua menjadi Andi.

// Saya sudah menyiapkan source code untuk latihan kali ini. Bagi teman-teman yang ingin mengunduh source code ini bisa melihat deskripsi pada video. Source code akan terdiri dari 2 folder, yaitu sebelum dan sesudah. Soal latihan berada di dalam folder sebelum, sedangkan kunci jawabannya berada di dalam folder sesudah. Jadi untuk mengerjakan soal latihan ini, bukalah folder sebelum.

// Saya telah menyiapkan dua buah file sebagai soal latihan. Yang pertama adalah index.html. Yang isinya hanya boilerplate dengan judul Latihan Algoritma Swap. Dan di bagian paling bawahnya ada javascript yang diambil dari file latihan.js.

// Kalau kita buka file latihan.js, pada bagian paling atasnya saya membuat variable nama pertama dengan nilai Andi. Dan kemudian nama kedua dengan nilai Bayu. Kemudian dibawahnya saya menyiapkan tempat agar teman-teman dapat menuliskan algoritma swap disini.

// Di bagian akhir, kita meminta browser untuk menampilkan nilai yang dikandung oleh variable nama pertama dan nama kedua. Namun disini ada sedikit perbedaan dengan video sebelumnya ya. Kalau sebelumnya kita menggunakan fungsi alert, dimana browser akan menampilkan pesan dalam bentuk popup. Sedangkan sekarang kita menggunakan fungsi console.log, dimana nantinya browser akan menampilkan pesan kita di bagian console.

// Kita lihat hasilnya di browser. Untuk melihat tulisan nama pertama dan nama kedua, kita mesti membuka bagian console. Caranya kita klik kanan dan pilih Inspect. Lalu kita pilih bagian console. Disini kita bisa melihat tulisan Nama pertama Andi dari file latihan.js baris 8. Dan Nama kedua Bayu dari file latihan.js baris 9.

// Tugas kita adalah menukar nilai yang dikandung oleh kedua variable ini, sehingga akhirnya browser akan menuliskan Nama pertama Bayu, sedangkan Nama kedua Andi. Namun kita tidak boleh menggunakan cara assignment langsung nilai ke dalam variable. Contohnya. Ini contoh yang tidak boleh ya. Kita langsung masukkan name1 = “Bayu” dan name2 = “Andi”.

// Kalau kita simpan dan refresh, maka browser akan menampilkan hasil yang sesuai dengan tujuan latihan kita. Namun di kenyataannya, hal ini tidak bisa dilakukan, karena biasanya kita tidak tau apa nilai dari variable tersebut. Biasanya kita akan menanyakan kepada pengunjung kita “Nama kamu siapa?” dan kita tidak tau apa yang akan dijawab oleh pengunjung tersebut. Jadi sekarang kita mesti menganggap bahwa kita tidak tau bahwa nilai dari varible nama tersebut adalah “Andi” dan “Bayu”.

// Kita hapus contoh yang salah ini. Dan silahkan teman-teman pause dahulu video ini dan mencoba untuk mengerjakan latihan ini di komputer masing-masing. Nantinya setelah selesai mengerjakan latihan, teman-teman dan melanjutkan kembali video ini dan kita akan membahas kunci jawabannya.

// Oke, sekarang kita akan membahas solusi dari soal latihan ini. Cara berpikir algoritma pada komputer sebenarnya masih sama dengan cara berpikir kita di dunia nyata. Apabila kita memiliki 2 buah stoples dan kita ingin menukar isi dari keduanya, bagaimana caranya? Cara paling mudahnya adalah dengan menggunakan satu stoples tambahan sebagai tempat penampungan sementara, misalkan kita beri nama dengan temporary atau sementara. Kemudian kita melakukan 3 langkah, yang pertama kita pindahkan isi dari stoples pertama ke stoples temporary. Langkah kedua kita pindahkan isi dari stoples kedua ke stoples pertama. Dan yang terakhir kita pindahkan lagi isi dari stoples temporary ke stoples kedua.

// Kita kembali ke source code latihan kita. Kita bisa membuat variable sementara dengan menambahkan kode let temporary, yang kemudian kita isikan dengan nilai pada variable nama pertama, kodenya adalah sama dengan name1. Langkah kedua kita isikan variable nama pertama dengan nilai dari variable nama kedua. Kodenya adalah name1 = name2. Dan langkah terakhir kita isikan variable nama kedua denga nilai dari variable temporary. Kodenya adalah name2 = temporary.

// Kita simpan dan refresh browser. Sekarang nilai dari kedua variable sudah bertukar tempat. Dan teman-teman dapat mencoba sendiri, walaupun kita mengubah nilai dari variable nama pertama dan nama kedua, algoritma ini tetap dapat berfungsi dengan benar.
