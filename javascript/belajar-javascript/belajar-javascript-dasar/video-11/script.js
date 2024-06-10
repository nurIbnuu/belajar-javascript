// let name1 = 'Budi';
// name1.age = 30;
// console.log(name1.age); undefined // STRING PRIMITIF TIDAK BISA DIBERI DYNAMIC PROPERTY

let name = new String('Budi');
name.age = 30;
console.log(name); // [String: 'Budi'] { age: 30 }
console.log(name['age']); // 30, LEBIH BAIK PAKAI [] DARIPADA titik


// Pada video sebelumnya, kita telah mempelajari mengenai tipe data primitif string. Ternyata, di Javascript, kita juga bisa menyimpan string sebagai object dengan sintaks dan behaviour yang sedikit berbeda. Kalau kita hendak menyimpan string dalam bentuk primitif, kita mengetikkan kode dengan sintaks:

// let name = “Budi”;
// Jadi kita langsung mengetikkan data yang hendak kita simpan dalam tanda kutip tunggal ataupun tanda kutip ganda. Sedangkan apabila kita hendak menyimpan string dalam bentuk objek, maka sintaksnya menjadi:

// let name = new String(“Budi”);
// Disini kita menjalankan constructor untuk membuat objek String, kemudian data yang hendak kita simpan ditaruh di dalam kurung. Sebagai hasilnya, kita mendapatkan variable name dalam bentuk objek, yang menyimpan data “Budi”. Dalam video ini kita akan membahas lebih lanjut mengenai objek String, persamaan dan perbedaannya dengan tipe data primitif string, serta apa saja yang bisa kita lakukan menggunakan objek String.

// Oke, sekarang kita coba langsung di console. Pertama kita buat dahulu variable name1 untuk tipe data primitif string.

// let name1 = “Budi”;
// Untuk memeriksa tipe datanya, kita bisa mengetikkan kode

// typeof(name1);
// Tipe datanya string ya. Selanjutnya kita buat lagi variable name2, untuk tipe data objek String namun menyimpan nilai yang sama yaitu “Budi”.

// let name2 = new String(“Budi”);
// typeof(name2);
// Kita cek tipe data dari variable name2 dan kita mendapatkan jawaban object ya.

// Kalau kita minta browser untuk menampilkan isi data dari variable name1, maka datanya sederhana yaitu “Budi”. Sedangkan kalau kita meminta browser untuk menampilkan isi data dari variable name2, maka browser memberitahukan bahwa ini adalah objek String. Dan kemudian data yang dikandung oleh objek ini diberitahukan dalam kurung kurawal, yaitu “Budi”.

// Kita bahas persamaannya dahulu ya, antara tipe data primitif string dengan objek string. Persamaan-persamaan ini sudah pernah kita pelajari pada video sebelumnya. Jadi kita sambil mengulangi lagi pelajaran sebelumnya ya. Persamaan yang pertama adalah, keduanya sama-sama memiliki index. Ingat, index pada Javascript dimulai dari angka 0.

// Jadi kalau kita panggil index 0 dari name1, maka kita mendapatkan huruf B. Kalau kita panggil index 1 dari name1, maka kita mendapatkan huruf u. Hal yang sama juga terjadi untuk variable name2. Jika kita panggil index 0 dari name2, maka kita mendapatkan huruf B. Kalau kita panggil index 1 dari name2, maka kita mendapatkan huruf u.

// Persamaan yang kedua, keduanya sama-sama bisa memanggil string method. Sebagai contoh, kalau kita mengetik kode

// name1.toUpperCase();
// Maka kita mendapatkan string “BUDI” dalam huruf besar semua. Hal yang sama bisa kita lakukan terhadap variable name2. Dan hasilnya sama ya.

// Persamaan yang ketiga, kita bisa menggunakan tanda + sebagai operator penggabungan string. Sebagai contoh:

// name1 + “man”;
// Hasilnya adalah “Budiman”. Hal yang sama akan kita dapatkan apabila kita menggunakan variable name2.

// Yang perlu diperhatikan disini adalah, pada saat kita menggunakan operator penggabungan string, maka browser membuat string baru “Budiman” sebagai hasilnya. Kalau kita panggil kembali variable name1, maka nilai yang disimpan adalah “Budi”. Sedangkan kalau kita panggil kembali name2, maka nilai yang disimpan adalah objek String dengan nilai “Budi”.

// Bagaimana kalau kita hendak melakukan operasi penggabungan string, dan kemudian kita simpan kembali ke dalam variable yang bersangkutan? Kita sudah belajar di video sebelumnya ya. Kita bisa menggunakan simbol +=. Jadi kalau kita ketikan kode

// name1 += “man”;
// Maka nilai yang disimpan oleh variable name1 sekarang adalah “Budiman”. Dan tipe datanya adalah string.

// Namun, ada satu hal yang penting yang harus kita perhatikan ya, kalau kita melakukannya ke variable name2.

// name2 += “man”;
// Perhatikan bahwa nilai yang disimpan oleh variable name2 sekarang adalah “Budiman”. Kita periksa lagi tipe datanya. Ternyata sudah berubah menjadi string primitif. Jadi sekarang variable name2 sudah bukan objek string lagi.

// Sekarang kita membahas mengenai apa yang bisa kita lakukan dengan objek String. Yang utama adalah kita bisa menambahkan dynamic property ke dalam variable. Yang dimaksud dengan property adalah kita menyimpan nilai dengan menggunakan kunci. Dan kunci ini nantinya harus kita gunakan lagi untuk mengakses nilai tersebut.

// Sebagai contoh, misalkan kita membuat variable name yang isinya objek String “Budi”. Dan kemudian kita memiliki satu informasi lagi mengenai Budi. Misalkan umur Budi adalah 30 tahun. Dan data ini ingin kita simpan di variable yang sama, yaitu variable name. Maka disini kita menggunakan umur atau age sebagai kunci, sedangkan datanya adalah 30. Sintaks adalah:

// name.age = 30;
// Pada bagian awal kode, name adalah nama variable kita. Untuk menambahkan properti, kita tambahkan simbol titik, diikuti dengan kunci-nya, yaitu age. Kemudian kita menggunakan operator assignment tanda sama dengan, untuk menyimpan nilai 30 ke dalam property tersebut. Yang dimaksud dynamic disini adalah kita bisa dengan bebas menambahkan properti baru ke dalam objek kita, tanpa dibatasi oleh struktur data dari objek tersebut.

// Kita langsung coba di browser ya. Browser telah saya refresh dan kita mesti mengetikkan ulang kode kita dari awal. Pertama kita coba tipe data primitif string terlebih dahulu.

// let name1 = “Budi”;
// Sekarang kita coba tambahkan property age dengan sintaks:

// name1.age = 30;
// Nah, disini adalah kekurangan dari Javascript yang paling mengganggu bagi saya. Jadi bila teman-teman perhatikan di layar, tidak terjadi error dan tidak pesan kesalahan. Namun kalau kita lihat kembali isi dari variable name1, isinya hanya string “Budi” saja. Property umur yang kita masukkan tidak tersimpan. Kalau kita ketik name1.age, maka hasilnya adalah undefined.

// Bagi kita-kita yang mengerti, kita tau bahwa tipe data primitif tidak bisa menyimpan property. Namun yang disayangkan disini adalah browser tidak menunjukkan error dan tidak menuliskan pesan kesalahan sama sekali. Jadi teman-teman yang tidak mengerti salahnya adalah dimana, akan menjadi bingung sekali dalam situasi seperti ini.

// Oke, sekarang kita lanjutkan ya, ke tipe data objek string. Kita refresh dahulu halaman kita. Dan kita buat variable baru.

// let name = new String(“Budi”);
// Kita coba lagi tambahkan property age:

// name.age = 30;
// Kita lihat kembali isi dari variable name dan kita mendapatkan hasil yang menarik ya.

// String {‘Budi’, age: 30}
// Jadi disini kelihatan bahwa objek string telah menyimpan nilai lain. Apakah nilai lainnya? Jadi disini ada kunci age, yang diikuti dengan tanda titik dua, dan kemudian nilai yang disimpannya adalah 30. Kalau kita ingin mengakses nilai 30, kita bisa menuliskan nama variablenya diikuti titik dan diikuti lagi oleh kuncinya.

// name.age;
// Dan browser pun mengembalikan nilai yang disimpan oleh property age, yaitu 30.

// Nah, pada Javascript ada cara lain untuk mengakses property pada objek, yaitu dengan menggunakan simbol tanda kurung siku []. Kunci dari property bisa kita tuliskan sebagai string di dalam tanda kurung siku. Sebagai contoh, apabila kita ingin mengakses property umur, kita bisa tuliskan dengan kode

// name[“age”];
// Cara mengakses property menggunakan tanda kurung siku ini memiliki fleksibilitas yang tidak dimiliki oleh tanda titik. Sebagai contoh pertama, kita bisa menggunakan angka sebagai kunci. Misalkan

// name[123] = “Angka Bagus”;
// Kita bisa mengakses kembali property 123 dengan menggunakan tanda kurung siku.

// name[123];
// Namun kalau kita akses dengan menggunakan tanda titik, maka kita akan mendapatkan error. Karena ada aturan pada Javascript bahwa nama variable tidak boleh didahului oleh angka.

// Fleksibilas kedua adalah, kita bisa menggunakan variable sebagai kunci. Sebagai contoh, misalkan saya membuat variable baru dengan nama key, yang mengandung kata “age”.

// let key = “age”;
// Kemudian variable key ini bisa kita gunakan untuk mengakses property age dengan menggunakan tanda kurung siku.

// name[key];
// Namun cara ini tidak bisa kita gunakan pada tanda titik.

// Dan ada satu trik yang akan berguna nantinya pada saat kita hendak membuat script yang cukup rumit. Sebagai contoh, misalkan Budi memiliki 2 buah mobil, yaitu “Toyota” dan “Honda”. Dan kedua mobil ini kita simpan sebagai property car1 dan car2.

// name[“car1”] = “Toyota”;
// name[“car2”] = “Honda”;
// Dan misalkan pada saat ini, key kita adalah angka 1.

// key = 1;
// Kemudian kita mengakses property car dengan menggunakan tanda siku. Namun apakah kita hendak mengakses mobil pertama atau kedua, akan bergantung dari nilai yang sedang dikandung oleh variable key. Jadi kita menulis kodenya menjadi seperti ini:

// name[“car” + key];
// Jadi kata “car” dengan nilai variable key akan diproses terlebih dahulu menjadi “car1”. Setelah itu barulah digunakan sebagai kunci untuk mengakses property pada variable name. Dengan fleksibilitas penulisan kode seperti ini, kita bisa menuliskan beberapa kode terlebih dahulu untuk menentukan mobil mana yang hendak kita akses dengan menggunakan variable key.

// Selanjutnya kita akan membahas mengenai perbedaan cara manajemen memory antara tipe data primitif dengan tipe data objek. Pertama kita lihat dahulu tipe data primitif. Pada saat kita mengetikkan kode:

// let name1 = “Budi”;
// Maka komputer menyiapkan tempat di memory, menyimpan nilai “Budi”, dan memberi nama tempat tersebut name1.

// Selanjutnya pada saat kita menjalankan kode baru:

// let name2 = name1;
// Maka komputer menyiapkan tempat kedua di memory. Lalu komputer mengcopy isi dari variable name1 dan menyimpannya di dalam variable name2. Jadi di dalam memory terdapat 2 “Budi” yang berbeda.

// Selanjutnya kita mengubah isi dari variable name1 dengan kode:

// name1 = “Dewi”;
// Maka komputer mengganti nilai yang disimpan oleh variable name1 menjadi “Dewi”. Perhatikan bahwa variable name2 tetap menyimpan nilai “Budi”.

// Kita langsung coba di browser ya. Kita ketik dahulu kode awalnya.

// let name1 = “Budi”;
// let name2 = name1;
// Kita lihat nilai yang disimpan oleh variable name1 dan name2. Keduanya sama-sama Budi.

// Selanjutnya kita ubah nilai dari variable name1.

// name1 = “Dewi”;
// Kita cek lagi nilai yang disimpan oleh variable name1 dan name2. Sekarang name1 mengandung nilai “Dewi”, sedangkan name2 tetap bernilai “Budi”.

// Sekarang kita akan membahas cara manajemen memory untuk tipe data Objek. Pada saat kita menjalankan kode:

// let name1 = new String(“Budi”);
// Artinya komputer memesan tempat di bagian memory lain yang biasanya disebut dengan nama heap, untuk menyimpan objek String yang mengandung data “Budi”. Kemudian komputer juga menyiapkan tempat di memory dengan nama name1, dan mengisinya dengan pointer yang menunjuk ke tempat penyimpanan objek String.

// Pada saat kita menjalankan kode kedua:

// let name2 = name1;
// Maka komputer menyediakan tempat lagi di memory dengan nama name2, yang isinya di-copy dari variable name1. Perhatikan disini berhubung isi dari variable name1 adalah pointer, maka nilai yang dicopy ke variable name2 adalah pointernya. Dan sekarang kedua variable, baik name1 dan name2, menunjuk ke objek String yang sama.

// Lalu kita jalankan kode ketiga:

// name1.age = 30;
// Disini kita menambahkan properti baru pada variable name1, dengan kunci age atau umur dan nilai 30. Perhatikan berhubung name2 menunjuk ke objek String yang sama, artinya sekarang variable name2 juga memiliki property age.

// Kita langsung coba di browser ya. Kita langsung ketik kode awalnya.

// let name1 = new String(“Budi”);
// let name2 = name1;
// Kita lihat isi dari kedua variable. Isinya sama-sama objek String dengan data “Budi”.

// Selanjutnya kita tambahkan property baru pada variable name1:

// name1.age = 30;
// Dan kita lihat lagi isi dari kedua variable. Isinya tetap sama ya. Jadi penambahan property yang kita lakukan melalui variable name1, akan turut merubah variable name2. Bahkan kita bisa mengakses nilainya dengan cara mengetikkan kode

// name2.age;
// Dan kalau kita coba ubah property age pada variable name2:

// name2.age = 100;
// Lalu kita lihat isi property age dari variable name1:

// name1.age;
// Maka sekarang nilai yang disimpan pada property age adalah 100.

// Jadi inilah perbedaan dari cara manajemen memory untuk tipe data primitif dan tipe data objek. Pada tipe data primitif, perubahan pada variable name1 tidak menyebabkan perubahan pada variable name2. Sedangkan pada tipe data objek, perubahan objek yang kita lakukan pada variable name1 turut merubah variable name2.