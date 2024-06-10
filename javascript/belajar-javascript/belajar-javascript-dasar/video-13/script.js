//    Percabangan 1
console.log('Percabangan 1');

console.log('Statement Pertama');
if (true) {
  console.log('Statement Kedua');
}
console.log('Statement Ketiga');

let condition = true;
if (condition === true) {
  console.log('Anda Benar');
}
console.log(typeof (condition) + '\n');


//    Percabangan 2
console.log('Percabangan 2');
let condition1 = false;
if (condition1 === true) {
  console.log('Anda Benar');
} else {
  console.log('Anda Salah');
}
console.log(typeof (condition1) + '\n');


// Truthy; true, non-zero number, 'string', object, function.
// Falsy; false, 0, NaN, '', null, undefined
console.log('Test Truthy & Falsy');
let condition2 = 'string';
if (condition2) {
  console.log('Anda Benar');
} else {
  console.log('Anda Salah');
}
console.log(typeof (condition2));

let condition3 = '';
if (condition3) {
  console.log('Anda Benar');
} else {
  console.log('Anda Salah');
}
console.log(typeof (condition3) + '\n');

let condition4 = new String ('Objek String');
if (condition4) {
  console.log('Anda Benar');
} else {
  console.log('Anda Salah');
}
console.log(typeof (condition4));

let condition5 = new String (''); // tetap dianggap benar karena nilai yang disimpan dalam variabel condition5 adalah pointer
if (condition5) {
  console.log('Anda Benar');
} else {
  console.log('Anda Salah');
}
console.log(typeof (condition5) + '\n');

let condition6;
if (condition6) {
  console.log('Anda Benar');
} else {
  console.log('Anda Salah');
}
console.log(typeof (condition6) + '\n');

//    Menggunakan Operator Logika
console.log('Operator Logika');
let value = Math.floor(Math.random() * 5) + 1;
if (value === 3) {
  console.log('Angka Tengah');
} else {
  console.log('Angka Tepi');
}
console.log(value);



// Pada alur kerja normal, biasanya program bekerja secara berurutan dari atas ke bawah, sebagai contoh mengerjakan statement pertama terlebih dahulu, setelah itu dilanjutkan dengan statement kedua, statement ketiga dan seterusnya.

// Bagaimana bila kita memerlukan percabangan pada alur kerja kita? Sebagai contoh, program mengerjakan statement pertama terlebih dahulu. Kemudian program memeriksa suatu kondisi. Apabila kondisi tersebut benar, maka program mengerjakan statement kedua, setelah itu lanjut ke statement ketiga dan seterusnya. Sedangkan apabila kondisinya salah, maka program langsung meloncat dari statement pertama ke statement ketiga dan seterusnya. Jadi disini ada statement kedua yang tidak dijalankan oleh program apabila kondisinya salah.

// Percabangan seperti ini bisa kita tuliskan pada kode kita dengan menggunakan keyword if, yang diikuti dengan condition di dalam tanda kurung. Setelah itu kita bisa membuat kurung kurawal dan menuliskan statement-statement yang hanya dikerjakan apabila kondisinya benar. Sedangkan bila kondisinya salah, maka program langsung meloncati statement di dalam kurung kurawal dan melanjutkan ke instruksi setelah if.

// Kita langsung coba di browser ya. Saya telah menuliskan kode Javascript sederhana. Yaitu:

// console.log("Statement Pertama");
// if(true)
// {
// 	console.log("Statement Kedua");
// }
// console.log("Statement Ketiga");
// Jadi perhatikan bahwa disini ada tiga buah tulisan statement ya. Yang pertama berada di sebelum if. Yang kedua berada di dalam if. Sedangkan yang ketiga berada setelah if. Kalau kita coba jalankan script ini, maka hasilnya di console adalah:

// Statement Pertama
// Statement Kedua
// Statement Ketiga
// Sekarang perhatikan bagaimana bila kondisi di dalam if saya ubah menjadi false. Maka sekarang hasil di console adalah:

// Statement Pertama
// Statement Ketiga
// Perhatikan bahwa sekarang tidak ada tulisan Statement Kedua. Nah, jadi kesimpulannya seperti ini ya. Kode yang berada di sebelum dan sesudah if, tetap dijalankan bagaimanapun kondisi if. Sedangkan kode yang berada di dalam kurung kurawalnya if, hanya dijalankan apabila kondisinya benar.

// Dan sebenarnya kondisi di dalam if ini sederhana saja ya, hanya benar atau salah saja. Namun biasanya kita tidak tidak menulis kode seperti ini. Biasanya yang menjadi kondisi adalah variable. Dan kita tidak tau apakah isi dari variable tersebut, karena bisa saja diambil dari database, atau kita meminta masukkan dari pengunjung, atau bisa saja kita membuat bilangan acak. Jadi kode disini akan saya ganti sedikit agar menjadi lebih mirip dengan realita pada saat kita benar-benar melakukan pemograman.

// let condition = true;
// if(condition)
// {
// 	console.log("Anda Benar");
// }
// console.log(typeof(condition));
// Statement pertama kita ganti menjadi deklarasi variable dengan nama condition, yang kita inisialisasi dengan nilai true. Lalu kondisi if kita ganti menjadi variable condition. Di dalam if, kita ganti tulisan “Statement Kedua” menjadi “Anda Benar”. Sedangkan tulisan “Statement Ketiga” kita ganti menjadi typeof condition. Kita coba jalankan script ini dan hasilnya adalah:

// Anda Benar
// boolean
// Sekarang kita ganti nilai awal variable condition menjadi false. Dan hasilnya menjadi:

// boolean
// Berhubung kondisinya salah, maka tidak ada tulisan “Anda Benar”. Hanya ada tulisan tipe data “boolean”.

// Nah, sekarang kita masuk ke percabangan kedua. Kalau tadinya di percabangan pertama hanya ada bila kondisinya benar, maka kita menjalankan statement kedua. Sekarang kita tambahkan lagi apabila kondisinya salah, maka kita menjalankan statement ketiga.

// Jadi sekarang ada 2 cabang alur program ya. Apabila kondisi benar, maka browser menjalankan statement pertama, statement kedua, dan statement keempat. Artinya statement ketiga tidak dikerjakan. Sementara bila kondisinya salah, maka browser menjalankan statement pertama, ketiga dan keempat. Statement kedua tidak dijalankan.

// Bagaimana cara menuliskan kode percabangan seperti ini? Nah, setelah kurung kurawal if, kita tambahkan lagi kata kunci else dan kurung kurawal. Semua instruksi yang berada di dalam kurung kurawal else, hanya dijalankan apabila kondisi salah.

// Kita langsung coba di browser ya. Kodenya sederhanya saja. Setelah kurung kurawal penutup if, kita tambahkan lagi kode:

// else
// {
// 	console.log("Anda Salah");
// }
// Pertama kita coba dahulu bila nilai variable condition adalah true. Nah, pada console keluar tulisan Anda Benar dan boolean. Artinya kode yang dijalankan oleh browser adalah console.log(“Anda Benar”), dan kemudian meloncat ke console.log(typeof condition).

// Sekarang kita ubah nilai variable condition menjadi false. Dan sekarang pada console keluar tulisan Anda Salah dan boolean. Jadi kode yang dijalankan adalah console.log(“Anda Salah”) dan console.log(typeof condition).

// Jadi perhatikan ya, disini ada percabangan if dan else, dimana pada hasil akhir program kita, hanya bisa keluar salah satu tulisan diantara “Anda Benar” dan “Anda Salah”. Yang keluar pasti salah satu tulisan saja. Tidak mungkin “Benar” dan “Salah” keluar bersamaan.

// Untuk tipe data boolean, kita sudah tau ya kalau nilai true artinya benar, dan nilai false artinya salah. Namun pada javascript masih ada beberapa tipe data lainnya. Bagaimana kalau kita memasukkan tipe data lain sebagai condition? Apakah artinya benar atau salah? Nah, disini ada yang namanya truthy dan falsy ya. Bisa kita lihat di layar. Semua yang termasuk ke dalam truthy artinya benar, sedangkan semua yang masuknya ke dalam falsy artinya salah.

// Untuk tipe number, nilai 0 dan NaN artinya salah. Selebihnya artinya benar.

// Untuk tipe data string, string kosong artinya salah. Sedangkan string dengan isi apa pun dianggap benar.

// Untuk tipe data object, kalau kita sudah menjalankan contructornya artinya benar. Sedangkan kalau kita inisialisasi dengan nilai null artinya salah.

// Untuk variable yang masih belum diinisialisasi, maka tipe datanya adalah undefined, akan dianggap salah.

// Dan yang terakhir, variable yang isinya pointer ke function, dianggap benar. Sampai saat ini kita masih belum pernah membahas mengenai pointer ke function, karena topik ini adalah pemograman Javascript di tingkat mahir. Jadi pembahasannya mesti menunggu nanti ya, kalau kita sudah memasuki materi tingkat mahir.

// Kita langsung coba di browser ya. Kita sudah coba untuk tipe data boolean. Sekarang kita coba dahulu untuk tipe data Number. Pertama kita coba falsy dahulu ya. Untuk tipe data Number, falsy-nya adalah angka 0 dan NaN. Kita coba isi dengan angka 0. Kita jalankan. Keluar tulisan “Anda Salah” ya. Kita coba lagi dengan NaN, dan ternyata salah juga.

// Selanjutnya kita coba dengan angka 25. Dianggap benar. Kalau saya ubah menjadi -25. Tetap benar. Kalau saya ubah lagi menjadi bilangan desimal 0,25. Dan tetap benar ya. Jadi angka berapa pun selain 0 dan NaN dianggap sebagai benar.

// Kita coba untuk tipe data String. Kita coba dengan string “Acak”. Ternyata benar. Kita coba dengan string yang isinya hanya spasi. Tetap benar ya. Lalu kita coba dengan string kosong, dan ternyata salah. Jadi untuk string apa pun yang ada isinya dianggap benar, sedangkan string kosong dianggap salah.

// Sekarang kita coba untuk tipe data objek. Pertama kita isi null terlebih dahulu. Ternyata dianggap salah. Lalu kita coba membuat objek String ya, pertama kita isi dahulu dengan kata “Acak”. Dan dianggap sebagai benar. Kita coba buat objek String dengan isi string kosong. Dan ternyata dianggap benar ya. Nah ini yang menarik nih. Mengapa bisa benar? Jawabannya sudah pernah dibahas di video sebelumnya mengenai Objek String. Karena yang disimpan di dalam variable condition adalah pointer menuju objek string. Dan berhubung kita sudah menjalankan construktor objek String, maka variable condition ini sudah ada nilainya dan dianggap sebagai true.

// Tipe data terakhir yang kita coba disini adalah undefined. Cara mencobanya sederhana ya. Pada kode let condition langsung kita akhiri dengan titik koma. Jadi tidak ada inisialisasi nilai apa pun. Dan hasilnya dianggap false dan tipe datanya undefined.

// Untuk tipe data pointer to function tidak dibahas disini karena kita belum belajar mengenai sintaks-nya. Namun bagi teman-teman yang sudah mengerti mengenai pointer to function bisa mencoba sendiri di komputer masing-masing ya.

// Nah, yang kita jadikan condition di dalam if, tidak harus berupa variable ya. Kita bisa menggunakan operator perbandingan dan operator logika sebagai kondisi. Sebagai contoh, kode disini mesti saya ubah terlebih dahulu. Pertama nama variablenya saya ganti dari condition menjadi value. Misalkan saya beri nilai awal 5. Sebagai conditionnya, saya ganti misalkan menjadi value == 5. Artinya value harus sama dengan 5. Ingat bahwa untuk menggunakan operator perbandingan, kita harus menggunakan simbol sama dengan sebanyak 2 atau 3 kali.

// Tulisan pada kondisi benar saya ubah menjadi Angka Tengah. Sedangkan tulisan pada saat kondisi salah saya ubah menjadi Angka Tepi. Dan pada kode terakhir, kita sudah tidak perlu typeof condition, karena tipe data yang kita gunakan disini sudah pasti angka ya. Jadi kita tuliskan saja nilai dari angka tersebut berapa. Jadi kode terakhirnya adalah:

// let value = 5;
// if(value == 5)
// {
// 	console.log("Angka Tengah");
// }
// else
// {
//     console.log("Angka Tepi");
// }
// console.log(value);
// Kita coba simpan dan jalankan. Nah, sekarang pada browser keluar tulisan angka tengah dan nilainya 5. Karena nilainya 5 maka kondisinya benar. Kalau misalkan nilainya saya ganti menjadi 4, maka jadinya Angka Tepi.

// Kita juga bisa menggunakan operator perbandingan lain. Misalkan if(value > 3). Kalau kita jalankan. Apakah 4 lebih besar dari 3? Benar. Maka yang keluar adalah Angka Tengah. Kalau misalkan value saya ganti menjadi 3. Maka hasilnya adalah Angka Tepi.

// Kita coba kondisi yang lebih rumit lagi ya. Kalau misalnya angka tengah harus berada diantara 3 dan 8, tidak termasuk angka 3 dan 8-nya. Maka disini kita harus menambahkan lagi kondisi kedua dengan menggunakan operator logika and. Kodenya menjadi:

// if((value > 3) && (value < 8))
// Kalau kita coba. Angka dari 1 hingga 3 adalah Angka Tepi, karena tidak memenuhi kondisi value > 3. Lalu angka 4 hingga 7 menjadi Angka Tengah karena memenuhi kedua kondisi. Sedangkan angka 8 9 10 adalah Angka Tepi lagi karena tidak memenuhi kondisi value < 8.

// Sekarang kita bisa mengganti value menjadi angka acak, dengan menggunakan library Math yang kita pelajari pada video sebelumnya. Kode awal saya ganti menjadi:

// let value = Math.random() * 10;
// Tentunya teman-teman masih ingat ya. Method Math.random() akan mengembalikan bilangan desimal acak diantara 0 hingga kecil dari 1. Kalau kita kalikan dengan 10, maka hasilnya menjadi bilangan acak diantara 0 hingga kecil dari 10.

// Kita coba jalankan. Dan sekarang setiap kali script dijalan, maka kita mendapatkan angka yang berbeda-beda. Dan script akan menuliskan apakah Angka Tepi atau Angka Tengah berdasarkan angka acak tersebut.