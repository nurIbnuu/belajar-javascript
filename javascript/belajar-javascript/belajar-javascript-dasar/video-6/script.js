// document.writeln('String');

let greeting = 'Hello';

// Index[]
console.log(greeting[4]); // atau
console.log(greeting[greeting.length - 1]);

// Property.length
console.log(greeting.length);

// Method()
//    Method yang bisa digunakan meskipun tanpa 'argument'
console.log(greeting.toUpperCase()); // let greeting = 'Hello'; jadi HELLO
console.log(greeting.toLowerCase()); // let greeting = 'Hello'; jadi hello
console.log(greeting.trim()); // let greeting = '   Hello   '; jadi Hello
//    Method yang HARUS menggunakan 'argument'
console.log(greeting.repeat(3)); // let greeting = 'Hello'; jadi HelloHelloHello
console.log(greeting.indexOf('lo')); // let greeting = 'Hello'; 3
console.log(greeting.indexOf('LO')); // let greeting = 'Hello'; -1 karena 'LO' tidak ditemukan
console.log(greeting.slice(1)); // let greeting = 'Hello'; jadi ello ATAU
console.log(greeting.slice(-4)); // let greeting = 'Hello'; jadi ello (diambil dari belakang) ATAU
console.log(greeting.slice(1, 5)); // let greeting = 'Hello'; jadi ello (diambil dari index 1 sampai 4)
console.log(greeting.replace('l', 'L')); // let greeting = 'Hello'; jadi HeLlo, hanya 'l' pertama
console.log(greeting.concat(' ', 'World', '.', ' ', 'Have a nice day', '!')); // let greeting = 'Hello'; jadi Hello World. Have a nice day! ATAU
console.log(greeting + '', 'World.', 'Have a nice day!') // // let greeting = 'Hello'; jadi Hello World. Have a nice day!, koma menambah spasi



// Oke, pembahasan kita mulai dari Index terlebih dahulu. Pada saat kita membuat sebuah string, maka Javascript secara otomatis membuatkan index yang dapat kita gunakan untuk mengakses karakter di dalam string tersebut. Sebagai contoh, kalau kita menjalankan instruksi let greeting = “Hello World”;. Artinya kita membuat string dengan nilai “Hello World”, yang kita simpan di dalam variable dengan nama greeting.

// Javascript secara otomatis membuatkan index pada string “Hello World”, yang dimulai dari angka 0 untuk huruf H besar, kemudian angka 1 untuk huruf e, angka 2 untuk huruf l, dan seterusnya. Perhatikan bahwa karakter spasi tetap mendapatkan satu buah index, yaitu index nomor 5. Kita bisa mengakses karakter apa yang dikandung oleh string, dengan cara menyebutkan indexnya di dalam kurung siku. Sebagai contoh, apabila kita mengetikkan greeting[0], maka kita akan mendapatkan huruf pertama yaitu “H”. Sedangkan kalau kita mengetikkan greeting[4], maka kita mendapatkan huruf keempat yaitu “o”.

// Kita coba di browser. Sebagai contoh kita buat variable baru dengan perintah let name = “Budi”;. Dan kemudian kita coba akses karakter pertama dengan perintah name[0];, maka browser mengembalikan nilai “B”. Dan kalau kita coba name[1]; maka browser mengembalikan huruf “u”. Dan seterusnya.

// Bagaimana bila kita memberikan angka yang terlalu besar pada index? Misalkan kita tulis name[100], maka kita mendapatkan hasil undefined. Artinya tidak ada nilai atau kosong ya, namun arti kosong disini lebih cenderung ke error. Kita juga bisa mencoba memasukkan index dengan nilai negatif ataupun string, dan hasilnya kita juga mendapatkan undefined.

// Selanjutnya kita masuk ke bagian properties. Kebetulan untuk String, kita hanya mendapatkan satu buah property, yaitu length. Property length akan memberitahukan kita berapa jumlah karakter dari sebuah string. Untuk menggunakan property, kita cukup memberikan tanda titik setelah nama variable, dan diikuti dengan nama property-nya seperti length.

// Kita kembali ke browser. Dan kita coba untuk melihat jumlah karakter dari variable name yang barusan kita buat. Kita tinggal ketikkan name.length; dan browser pun memberikan jawaban 4.

// Yang perlu diingat disini adalah bahwa perhitungan index dimulai dari angka 0, sedangkan perhitungan length dimulai dari angka 1. Jadi apabila kita hendak mengakses karakter terakhir dari String, kita tidak bisa menggunakan name[name.length]; karena kode ini akan memberikan hasil undefined. Karakter terakhir selalu berada di length dikurangi 1. Oleh karena itu kodenya menjadi name[name.length – 1];.

// Nah, kita telah memasuki ke bagian terakhir dari video ini. Kita akan mempelajari mengenai String Methods. Javascript telah menyediakan banyak fungsi siap pakai, yang bisa membantu kita dalam bekerja dengan string. Di layar ada beberapa contohnya ya, seperti concat, indexOf, repeat dan lain-lain. Perhatikan bahwa untuk menggunakan method, kita harus menambahkan tanda kurung setelah nama methodnya.

// Kita kembali ke browser. Sebagai contoh, kita bisa menggunakan kembali variable name tadi. Kita ketik name.toUpperCase();. Maka browser akan mengembalikan nilainya, yaitu BUDI namun semuanya dalam huruf besar.

// Perhatikan bahwa BUDI disini adalah string yang baru, yang dihasilkan oleh method toUpperCase(). Sedangkan data yang kita simpan di variable name, tetap sama yaitu Budi. Kalau misalkan kita ingin agar string yang huruf besar semua ini disimpan di variable name, maka kita harus menggunakan operator assignment. Kodenya menjadi name = name.toUpperCase();.

// Selain toUpperCase() yang mengubah string menjadi huruf besar semua, juga terdapat toLowerCase() yang berfungsi untuk mengubah string menjadi huruf kecil semua. Kita coba ya, name.toLowerCase();. Maka hasilnya adalah budi dalam huruf kecil semua.

// Yang penting untuk diingat disini adalah untuk mengeksekusi method, kita harus menggunakan tanda kurung dibelakangnya. Kalau misalkan kita hanya menuliskan name.toLowerCase tanpa tanda kurung, maka Javascript hanya memberitahukan bahwa toLowerCase ini adalah function atau method dimana untuk menjalankannya kita harus menambahkan tanda kurung. Tidak ada pesan error apa-apa, hanya tidak dijalankan saja.

// Selanjutnya kita membahas method trim(), yang berfungsi untuk menghilangkan karakter spasi dibagian awal dan akhir string. Sebagai contoh, kita jalankan instruksi let greeting = “ Hello World “;. Kalau kita lihat isi dari variable greeting, perhatikan pada bagian awal dan akhir dari string Hello World memiliki spasi. Kita panggil method greeting.trim();, maka hasilnya adalah Hello World tanpa spasi dibagian awal dan akhirnya. Namun di bagian tengah tetap ada spasi ya. Method ini akan sering digunakan pada saat kita melakukan validasi terhadap input yang diberikan oleh pengunjung.

// Selanjutnya kita membahas mengenai method yang memerlukan argument. Jadi untuk memanggil method ini, kita harus memberikan beberapa nilai di dalam tanda kurungnya. Sebagai contoh, kita coba ke method yang mudah terlebih dahulu, yaitu method repeat. Fungsinya adalah untuk mengulangi string sebanyak nilai yang kita masukkan sebagai argument. Sebagai contoh, kita ketik name.repeat(3), maka hasilnya adalah BUDIBUDIBUDI. Kata BUDI diulangi sebanyak 3 kali. Teman-teman bisa mencoba sendiri memasukkan nilai lainnya sebagai argument.

// Method lain adalah IndexOf, berfungsi untuk mencari string di dalam string. Method ini akan mengembalikan nilai index dari string pertama yang berhasil ditemukan, atau mengembalikan nilai -1 apabila tidak berhasil ditemukan. Sebagai contoh, kita memiliki variable name dengan nilai BUDI. Kita akan mencari huruf DI di dalam BUDI. Kita tuliskan kodenya name.indexOf(“DI”);. Dan hasilnya adalah 2. Javascript menemukan huruf DI pada huruf ketiga kata BUDI, namun ingat berhubung nilai index dimulai dari 0, maka nilai yang dikembalikan adalah tiga dikurangi satu, yaitu dua. Kalau kita coba lagi mencari di dengan huruf kecil, maka Javascript mengembalikan nilai -1 karena tidak berhasil ditemukan. Pada Javascript, huruf besar dan huruf kecil adalah 2 nilai yang berbeda.

// Sekarang kita membahas mengenai method slice, yang berfungsi untuk mengambil sebagian dari nilai string. Contohnya, pertama kita simpan dahulu variable greeting dengan nilai “Hello World”. Kodenya adalah greeting = “Hello World”;. Nah, misalkan kita hendak mengambil nilai greeting, namun hanya dari huruf ketiga dan belakangnya. Maka kita bisa memanggil method greeting.slice(2);. Ingat nilai yang dimasukkan ke argument ini adalah index yang perhitungannya dimulai dari 0.

// Kita juga bisa memasukkan nilai negatif, untuk mengambil bagian string dari belakang. Sebagai contoh, kita masukkan greeting.slice(-5);, artinya mengambil 5 karakter dari belakang yaitu World.

// Selain itu, kita juga bisa menggunakan argument kedua untuk membatasi jumlah karakter yang hendak kita ambil. Sebagai contoh, misalkan kita masukkan greeting.slice(2. Untuk menggunakan argument kedua, kita bisa tambahkan tanda koma. Kemudian kita masukkan nilai index akhir yang hendak kita ambil. Sebagai contoh kita masukkan 7. Maka Javascript mengembalikan karakter string yang berada dari index 2 hingga ke index 6. Index yang ketujuh tidak termasuk.

// Selanjutnya, kita juga bisa menggunakan method replace, untuk mengganti sebagian karakter dari string. Sebagai contoh, kita ketikkan greeting.replace dan buka kurung. Argumen pertama adalah nilai yang hendak kita cari di dalam string, sebagai contoh kita masukkan “l”. Dan kemudian argumen kedua adalah nilai yang hendak kita ganti, sebagai contoh kita masukkan “d”. Kalau kita jalankan, maka Javascript mengembalikan nilai “Hedlo World”. Karena huruf l pertama diganti menjadi d. Perhatikan bahwa huruf l berikutnya tetap berupa huruf l.

// Method terakhir yang kita bahas disini adalah method concat, yang berfungsi untuk menggabungkan beberapa string. Sebagai contoh, kita deklarasikan dahulu variable baru let greeting1 = “Hello”;.

// Kemudian kita panggil methodnya dengan kode greeting1.concat(“World”);. Sebagai contoh kita concat dengan kata World. Maka menghasilkan HelloWorld.

// Perhatikan disini bahwa kata Hello dan World digabung. Javascript tidak secara otomatis memberikan spasi untuk memisahkan dua kata. Spasi disini adalah tugas dari programmer.

// Yang istimewa dari method concat ini adalah kita bisa menggunakan banyak argument sekaligus. Jadi apabila kita hendak memberikan spasi, maka kita bisa mengubah kodenya menjadi greeting1.concat(“ “, “World”);. Maka hasilnya adalah Hello World.

// Kita coba dengan argument yang lebih banyak lagi ya. Kita coba ketikkan kode greeting1.concat(“ “, “World”, “.”, “ “, “Have a Nice Day”, “!”);. Dan hasilnya Javascript akan menggabungkan seluruh string menjadi satu string panjang.

// Selain menggunakan method concat, kita juga bisa menggabungkan string dengan menggunakan operator tanda tambah. Sebagai contoh, kalau kita tulis greeting1 + “World”. Maka hasilnya adalah “HelloWorld” yang digabung. Atau bisa juga kita tuliskan greeting1 + “ “ + “World”, maka hasilnya adalah “Hello World” yang dipisahkan dengan spasi.

// Sebenarnya masih banyak method yang dimiliki oleh String, teman-teman bisa membuka dokumentasinya di MDN. Kemudian kita bisa melihat di sebelah kirinya. Kebetulan properties untuk String hanya ada satu yaitu length, yang telah kita bahas barusan. Namun untuk methodsnya ada banyak ya. Nanti teman-teman bisa membaca dokumentasi disini dan mencoba sendiri di browser.

// Yang perlu diperhatikan disini adalah ada method tertentu yang di bagian depannya ada icon tong sampah dengan warna merah. Ini adalah method yang sudah deprecated, sudah tidak digunakan lagi. Dokumentasi disini hanya bertujuan untuk backward compatibility saja, dan teman-teman disarankan untuk tidak menggunakan method ini lagi.