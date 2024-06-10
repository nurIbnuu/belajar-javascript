//    Operator
// 1. Aritmatika [+, -, *, /, %]
// 2. Penugasan [=(ini simbol penugasan), +=, -=, *=, /=, %=]
// 3. Perbandingan [==, !=, ===, !==, <, >, <=, >=]
// 4. Logika [&&, ||, !]
// let age = 25;
// console.log(!((age > 15) && (age < 50))); cara menggunakan logika not
// console.log(!(age === 25)); cara menggunakan logika not

// Di video ini kita akan belajar mengenai operator, yaitu simbol yang dapat kita gunakan untuk melakukan operasi, khususnya di dalam bahasa pemograman Javascript. Berdasarkan jenis operasinya, operator yang akan kita pelajari di dalam video ini dibagi menjadi 4, yaitu:
// 1. Operator Aritmatika, yaitu simbol yang kita gunakan untuk melakukan operasi dasar aritmatika atau matematika, seperti untuk melakukan penambahan, pengurangan, perkalian, dan lain-lain.
// 2. Operator Penugasan. Operator ini telah kita pelajari pada video sebelumnya, yang berfungsi untuk menugaskan variable untuk mengingat suatu nilai. Simbol yang digunakan adalah sama dengan. Dalam video ini kita akan mempelajari lebih lanjut mengenai operator penugasan.
// 3. Operator Perbandingan. Operator ini kita gunakan untuk membandingkan suatu nilai, apakah nilai tersebut sama dengan nilai lain, apakah lebih besar, atau lebih kecil.
// 4. Operator Logika, yaitu operator yang digunakan untuk membandingkan 2 kondisi logika, yaitu logika benar dan logika salah.




// Di video ini kita akan belajar mengenai operator, yaitu simbol yang dapat kita gunakan untuk melakukan operasi, khususnya di dalam bahasa pemograman Javascript. Berdasarkan jenis operasinya, operator yang akan kita pelajari di dalam video ini dibagi menjadi 4, yaitu:

// Operator Aritmatika, yaitu simbol yang kita gunakan untuk melakukan operasi dasar aritmatika atau matematika, seperti untuk melakukan penambahan, pengurangan, perkalian, dan lain-lain.
// Operator Penugasan. Operator ini telah kita pelajari pada video sebelumnya, yang berfungsi untuk menugaskan variable untuk mengingat suatu nilai. Simbol yang digunakan adalah sama dengan. Dalam video ini kita akan mempelajari lebih lanjut mengenai operator penugasan.
// Operator Perbandingan. Operator ini kita gunakan untuk membandingkan suatu nilai, apakah nilai tersebut sama dengan nilai lain, apakah lebih besar, atau lebih kecil.
// Operator Logika, yaitu operator yang digunakan untuk membandingkan 2 kondisi logika, yaitu logika benar dan logika salah.
// Kita mulai dari operator aritmatika terlebih dahulu. Operator ini kita gunakan untuk melakukan operasi dasar aritmatika. Kita bisa menggunakan simbol tanda tambah untuk melakukan operasi penambahan. Tanda kurang untuk melakukan operasi pengurangan. Dan yang perlu diperhatikan disini, untuk melakukan operasi perkalian, kita tidak menggunakan tanda silang ataupun huruf x. Di komputer, biasanya kita menggunakan tanda bintang. Dan kemudian untuk melakukan pembagian, kita menggunakan tanda garis miring.

// Nah, yang terakhir ini adalah operator yang mungkin jarang didengar oleh teman-teman. Ini adalah operator modulo, atau modulus, atau bahasa indonesianya sisa bagi. Operator ini menggunakan simbol persen. Nanti akan kita bahas contoh penggunaannya.

// Kita langsung coba di browser ya. Kita klik kanan, pilih Inspect dan Console. Kita coba melakukan operasi penambahan. Misalkan kita ketik 1+2, lalu tekan Enter. Maka browser mengembalikan nilai 3. Kita coba melakukan operasi pengurangan, misalkan 4 kurang 3. Maka hasilnya adalah 1. Nah, untuk perkalian kita menggunakan tanda bintang ya. Jadi misalkan 3*4, atau dalam bahasa kita adalah 3 dikalikan 4. Maka hasilnya adalah 12.

// Selanjutnya kita coba operasi pembagian. Sebagai contoh 6 dibagi 3. Kita tuliskan dengan simbol 6 garis miring 3. Dan hasilnya adalah bilangan bulat 2. Kita coba lagi 10 dibagi 3. Hasilnya adalah 3,333 dan seterusnya. Perlu diingat disini bahwa secara default semua tipe data angka pada Javascript adalah float. Jadi tipe data angka bisa menyimpan bilangan desimal seperti 3,333.

// Nah sekarang kita coba operator modulus ya. Kita coba lagi 6 modulus 3. Hasilnya adalah 0. Karena 6 habis dibagi 3, tidak ada sisa. Selanjutnya kita coba lagi 10 modulus 3. Hasilnya adalah 1 ya. Karena kalau 10 kita bagi dengan 3, maka hasilnya adalah 3 dan sisanya 1. Jadi 10 modulus 3 hasilnya adalah 1. Operator modulus ini nantinya akan sering kita gunakan untuk mencari bilangan genap ganjil dan bilangan prima.

// Pertanyaan berikutnya, bagaimana bila kita menggunakan beberapa operator dalam satu baris kode? Sebagai contoh, 3 + 4 * 5. Berapakah hasilnya?

// Kalau kita jalankan instruksi ini dari kiri ke kanan, maka pertama kita jalankan dahulu 3 + 4, hasilnya 7. Dan kemudian kita kalikan 7 dengan 5, sehingga hasil akhirnya adalah 35.

// Sedangkan kalau kita menjalankan perkalian terlebih dahulu, maka kita kalikan dahulu 4 dengan 5 hasilnya 20. Barulah kita tambahkan hasilnya dengan 3. Sehingga hasil akhir kita adalah 23.

// Nah, apabila kode ini kita jalankan di Javascript, kira-kira yang mana hasilnya? Bagaimana menurut teman-teman?

// Kita jalankan di browser ya. Kita ketik 3 + 4 * 5. Dan ternyata hasilnya adalah 23.

// Mengapa begitu? Karena secara default di Javascript ada yang namanya Operator Precedence. Operator kali dan bagi, tingkatnya lebih tinggi daripada operator tambah dan kurang. Jadi apabila ada operator kali dan bagi di kode yang sama dengan operator tambah dan kurang, maka operator kali dan bagi dijalankan terlebih dahulu. Setelah itu barulah operator tambah dan kurang dijalankan.

// Bagaimana bila kita ingin agar penjumlahan dilakukan terlebih dahulu, setelah itu barulah perkalian? Sebagai solusinya, kita bisa menggunakan tanda kurung. Jadi kode ini bisa kita tulis menjadi (3 + 4) * 5. Nah, yang berada di dalam kurung akan dikerjakan terlebih dahulu. Jadi kalau kita jalankan kode ini, maka hasilnya adalah 35.

// Dalam praktek penulisan kode yang bersih, kita juga bisa menambahkan tanda kurung di bagian perkalian. Jadi kode sebelumnya bisa kita tuliskan menjadi 3 + (4 * 5). Dan hasilnya adalah sama 23. Walaupun Operator Precedence menjalankan perkalian terlebih dahulu, namun kita tetap memberikan tanda kurung pada kode perkalian. Tujuannya adalah agar kode kita menjadi lebih mudah untuk dibaca.

// Selanjutnya kita masuk ke jenis operator penugasan. Pada video sebelumnya, kita sudah mempelajari mengenai operator sama dengan, yang berfungsi untuk menyimpan nilai ke dalam suatu variable. Nah, di video ini kita mempelajari lebih lanjut mengenai operator sama dengan, yang digabungkan dengan operator aritmatika yang kita pelajari barusan.

// Sebagai contoh, kita bisa melihat baris kedua, disini ada operator tambah sama dengan. Cara pemakaiannya adalah x += y. x disini adalah nama variable. Sedangkan y bisa berupa variable ataupun bisa berupa nilai. Dan sintaks x += y ini bisa kita artikan sebagai x = x + y. Pertama kita jumlahkan dahulu nilai x dan y, kemudian kita simpan ke dalam variable x.

// Kita coba di browser ya. Pertama kita buat dahulu variable baru dengan nama x dan kita isikan dengan nilai 5.

// let x = 5;
// Kemudian kita coba misalkan variable x kita tambahkan dengan nilai 3.

// x + 3;
// Hasilnya adalah 8. Namun disini perlu diperhatikan lagi ya, kalau kita tanyakan ke browser berapakah nilai x. Maka browser mengembalikan nilai 5. Karena nilai 8 tadi tidak disimpan ke dalam variable x.

// Kalau kita ingin menyimpan nilai 8 ke dalam variable x, maka kodenya menjadi:

// x = x + 3;
// Jadi hasil dari x + 3 akan disimpan kembali ke dalam variable x. Dan sekarang kalau kita tanyakan ke browser, berapakah nilai x? Maka jawabannya adalah 8.

// Nah, kode x = x + 3 ini bisa kita singkat dengan menggunakan operator +=. Sebagai contoh, kita kembalikan dahulu nilai x menjadi 5.

// x = 5;
// Dan sekarang kita jalankan kodenya x += 3. Artinya kita menambahkan nilai x dengan angka 3, dan kemudian hasilnya disimpan ke dalam variable x. Kita jalankan ya. Kemudian kita cek berapa nilai x? Jawabannya adalah 8.

// Nanti teman-teman bisa mencoba sendiri untuk operator-operator lainnya seperti kurang sama dengan, kali sama dengan dan bagi sama dengan.

// Selanjutnya kita masuk ke materi operator Increment dan Decrement. Simbol yang digunakan adalah ++ untuk Increment dan – untuk Decrement. Sebenarnya operator ini masih sama fungsinya dengan operator += dan -=. Perbedaan utamanya disini adalah nilai yang bisa kita gunakan disini hanyalah nilai 1. Jadi kalau kita menuliskan kode x++, maka artinya kita menambahkan variable x dengan nilai 1, dan kemudian menyimpan hasilnya ke dalam variable x. Begitu juga untuk decrement atau --.

// Yang uniknya dari operator ++ ini, ada 2 cara untuk menggunakannya. Yang pertama adalah kita tuliskan dahulu nama variablenya, setelah itu baru kita tuliskan simbol ++. Atau cara kedua, kita tuliskan dahulu simbol ++, setelah itu barulah kita sebutkan nama variablenya. Hasilnya tetap sama, nilai yang disimpan di dalam variable akan ditambahkan dengan angka 1. Mari kita lihat contoh penggunaannya langsung di browser.

// Untuk mencoba operator Increment dan Decrement, kita tidak menggunakan console. Secara console membatasi kita hanya bisa menulis satu baris kode dan langsung menjalankannya. Berhubung kita ingin menulis beberapa baris sekaligus dan kemudian baru menjalakannya sekaligus, maka kita bisa menggunakan Snippet. Posisi Snippets ini agak tersembunyi sehingga tidak banyak orang yang tau. Untuk mengakses Snippets, kita bisa memilih bagian Sources. Lalu pada bagian kirinya, kita pilih lagi Snippets. Apabila di browser teman-teman tidak kelihatan Snippets, bisa dicari dibagian ini. Kita tambahkan Snippet baru.

// Kita tuliskan kode Javascript kita di dalam Snippet. Pertama kita deklarasikan dahulu variable x dengan perintah let x = 5. Artinya nilai awal dari variable x adalah 5 ya. Kita coba tampilkan ke console dengan perintah console.log(x).

// Kemudian kita coba gunakan operator increment dengan perintah x++. Dan kita tampilkan lagi hasilnya di console dengan perintah console.log(x). Kita jalankan Snippet ini dengan menekan tombol play dibawahnya, atau dengan cara menekan tombol Ctrl+Enter.

// Hasilnya yang pertama adalah lima. Ini adalah console.log pertama kita setelah deklarasi variable x. Dan kemudian setelah kita jalankan x++, maka nilai dari variable x berubah menjadi 6.

// Kalau misalkan kita ganti kode x++ menjadi ++x. Pertama kita clear console terlebih dahulu. Kemudian kita jalankan lagi. Maka hasilnya sama ya. Nilai awalnya 5, dan nilai berikutnya 6. Jadi apa bedanya x++ dengan ++x?

// Kita coba lagi ya, dengan kode yang sedikit lebih rumit. Setelah kita membuat variable x, kita buat lagi variable y dengan perintah let y = x++ * 2. Jadi dalam satu baris kode ini kita menjalankan dua perintah ya. Yang pertama adalah nilai x dikalikan dengan 2 dan disimpan ke dalam variable y. Dan yang kedua adalah nilai variable x ditambahkan dengan 1.

// Selanjutnya untuk perintah console.log kita ubah sedikit ya, menjadi “x = “ + x untuk menampilkan nilai dari variable x. Dan console log yang kedua adalah console.log(“y = “ + y) untuk menampilkan nilai dari variable y. Kita clear console terlebih dahulu. Kemudian kita jalankan Snippet.

// Kita mendapatkan hasil bahwa nilai x adalah 6, sedangkan nilai y adalah 10. Kita lihat lagi ke kode kita. Pada baris pertama, kita menyimpan nilai 5 ke dalam variable x. Dan kemudian pada baris kedua, nilai x yang pada saat itu adalah 5, dikalikan dengan 2 sehingga hasilnya 10. Nilai 10 ini disimpan ke dalam variable y. Setelah itu kita melakukan increment pada x, sehingga nilai x berubah menjadi 6. Maka hasil akhirnya nilai x adalah 6 dan nilai y adalah 10.

// Sekarang kita ganti kode kita dari x++ menjadi ++x. Kita clear console. Dan kita jalankan snippet ini. Kita mendapatkan hasil x = 6 dan y = 12.

// Kenapa bisa bagitu? Kita lihat lagi ke kode kita. Di baris pertama, kita memasukkan nilai 5 ke dalam variable x. Dan kemudian di baris kedua, berhubung operator increment berada di depan, maka increment pada variable x dilakukan terlebih dahulu. Nilai x berubah menjadi 6, dan kemudian baru dikalikan dengan 2 sehingga nilai yang disimpan di dalam y adalah 12.

// Jadi itulah perbedaannya antara x++ dan ++x ya. Increment x++ dilakukan setelah kode dijalankan. Sedangkan increment ++x langsung dilakukan sebelum kode dijalankan.

// Teman-teman dapat mencoba sendiri untuk operator decrement-nya. Nantinya operator increment dan decrement ini akan sering kita gunakan pada saat kita membuat looping atau pengulangan.

// Selanjutnya kita masuk ke jenis operator perbandingan. Operator ini berfungsi untuk membandingkan dua buah operand, dan selalu menghasilkan nilai yang berupa boolean, yaitu benar atau salah. Apa saja yang termasuk operator perbandingan? Nah, untuk membandingkan apakah suatu nilai sama dengan nilai yang lain, maka kita menggunakan simbol dua buah sama dengan. Untuk membandingkan apakah nilainya tidak sama dengan nilai yang lain, maka kita menggunakan simbol tanda seru sama dengan. Kemudian ada operator strict sama dengan yang menggunakan simbol tiga buah sama dengan, dan operator strict tidak sama dengan yang menggunakan simbol tanda seru dan dua buah sama dengan. Nanti akan kita bahas lebih lanjut apa yang dimaksud dengan strict. Dibawahnya lagi ada operator lebih besar, lebih kecil, lebih besar sama dengan dan lebih kecil sama dengan.

// Kita coba langsung di browser. Kita buka kembali console. Pertama kita buat dahulu variable n dengan nilai 5.

// let n = 5;
// Sekarang kita coba bandingkan ya. Apakah n = 5? Kodenya adalah

// n == 5;
// Jawabannya adalah true. Nah, bagi teman-teman yang baru belajar coding, disini mesti diperhatikan ya. Kalau kita hendak melakukan perbandingan, maka tanda sama dengan harus kita tuliskan dua kali. Disini sering terjadi kesalahan tipo dimana tanda sama dengannya hanya ditulis satu kali saja. Kalau kita tulis n = 5, ini artinya sudah menjadi operator penugasan. Artinya kita meminta browser untuk memasukkan nilai 5 ke dalam variable n.

// Sekarang kita coba lagi bandingkan variable n dengan nilai lain, misalkan 6.

// n == 6;
// Maka hasilnya adalah false. Karena nilainya tidak sama ya.

// Sekarang kita coba operator tidak sama dengan. Operator ini merupakan kebalikan dari sama dengan, sehingga yang tadinya kita mendapatkan jawaban true akan menjadi false. Sedangkan yang tadinya mendapat jawaban false akan menjadi true. Simbol yang digunakan adalah tanda seru sama dengan. Kita coba ya. Apakah n tidak sama dengan 5.

// n != 5;
// Jawabannya adalah false. Lalu kita coba apakah n tidak sama dengan 6.

// n != 6;
// Dan jawabannya adalah true. Jadi jawabannya kebalikan dari operator sama dengan ya.

// Pertanyaan berikutnya. Apakah 5 dengan tipe data angka sama dengan “5” dengan tipe data string? Kita coba ya.

// n == “5”;
// Di Javascript, kita mendapatkan jawaban true. Kalau kita coba lagi ya

// 5 == “5”;
// Jawabannya adalah true. Jadi Javascript bisa secara otomatis membandingkan 2 tipe data yang berbeda, dan memberikan jawaban true apabila nilainya sama.

// Apabila kita ingin agar Javascript memeriksa nilainya sama dan tipe datanya harus sama juga, maka kita menggunakan operator strict sama dengan. Simbol yang kita gunakan adalah tanda sama dengan sebanyak 3 kali. Kita coba tuliskan kodenya.

// n === “5”;
// Dan sekarang kita mendapatkan jawaban false. Karena tipe datanya n adalah angka, sedangkan tipe data 5 adalah string. Jadi walaupun nilainya sama, namun tipe datanya berbeda, jawabannya adalah false.

// Oke ya, teman-teman bisa mencoba sendiri operator perbandingan lainnya.

// Sekarang kita masuk ke bagian terakhir dari video ini, yaitu Operator Logika. Ada 3 buah operator Logika, yaitu And, Or, dan Not. Untuk operator And, kita menggunakan simbol tanda “ampersand” sebanyak 2 kali. Untuk operator Or, kita menggunakan simbol tanda pipe sebanyak 2 kali. Di keyboard standart, biasanya tanda pipe ini berada di atas tombol Enter. Untuk operator Not, kita menggunakan tanda seru.

// Kita lihat Truth Table dari Logika AND.

// True dan True menghasilkan True.
// True dan False menghasilkan False.
// False dan True menghasilkan False.
// False dan False menghasilkan False.
// Atau singkatnya, kita hanya bisa mendapatkan nilai True apabila keduanya True. Apabila ada salah satunya saja yang False, maka logika AND akan menghasilkan False.

// Kita masuk ke contoh kasus untuk penggunaan logika AND. Misalkan kita hendak mencari orang dengan usia produktif. Produktif disini maksudnya adalah usia diantara 15 hingga 64 tahun. Maka logika yang bisa kita gunakan adalah age atau umur lebih besar dari 15, dan age lebih kecil dari 64. Apabila umurnya memenuhi kedua kondisi, artinya benar. Apabila ada salah satu kondisi yang tidak terpenuhi, artinya salah.

// Atau logika lain yang bisa kita gunakan adalah age lebih besar sama dengan 15 dan age lebih kecil sama dengan 64. Kita menggunakan logika ini apabila umur tepat 15 tahun dan 64 tahun termasuk ke dalam usia produktif.

// Kita coba di browser. Kita buat variable baru yaitu

// let age = 25;
// Artinya usia ini termasuk produktif ya. Kita coba ketikkan kode logikanya

// (age > 15) && (age < 64)
// Maka kita mendapatkan hasil true. Karena 25 lebih besar dari 15 dan 25 lebih kecil dari 64.

// Apabila kita ubah usia menjadi terlalu muda. Misalkan sekarang age = 10;. Kita bisa menekan tombol anak panah atas agar browser mengulangi perintah yang pernah kita ketik. Kita jalankan kembali kode logika AND. Kita mendapatkan hasil false. Mengapa? Karena 10 > 15 hasilnya adalah false. Jadi walaupun 10 < 64 bernilai true, hasil akhir dari logika AND adalah FALSE.

// Sekarang kita ubah lagi age menjadi nilai pas 15 tahun. Dan kita tetap mendapatkan hasil false ya. Karena 15 > 15 menghasilkan nilai FALSE.

// Apabila kita ingin agar 15 dan 64 termasuk dalam usia produktif, maka kita mesti mengubah logikanya menjadi

// (age >= 15) && (age <= 64)
// Dan sekarang kita mendapatkan hasil TRUE. Jadi apabila teman-teman bertanya, kapan kita menggunakan tanda lebih besar, dan kapan kita menggunakan tanda lebih besar sama dengan, hal ini disesuaikan lagi dengan soal atau masalah yang hendak kita pecahkan. Apakah nilai yang kita tunjuk termasuk benar atau tidak.

// Sekarang kita masuk ke operator logika OR. Kita lihat ke Truth Tablenya.

// True or True menghasilkan True
// True or False menghasilkan True
// False or True menghasilkan True
// False or False menghasilkan False
// Atau singkatnya, apabila ada salah satu kondisi yang benar, maka kita mendapatkan hasil True. Dan kita hanya bisa mendapatkan False kalau kedua kondisinya salah.

// Kita lihat ke contoh kasus penggunaan Logika OR. Disini kita mencari orang yang usianya non-produktif, yaitu orang dengan usia dibawah 15 tahun atau orang dengan usia diatas 64 tahun. Perhatikan pada gambar. Disini ada 2 daerah yang menghasilkan True, yaitu lebih kecil dari 15 dan lebih besar dari 64.

// Untuk menyelesaikan masalah ini, kita menggunakan logika OR. Kodenya adalah

// (age < 15) || (age > 64)
// Kalau misalkan umur bernilai 10. Pada kondisi pertama, age < 15 menghasilkan true. Pada kondisi kedua age > 64 menghasilkan false. Dan berhubung kita menggunakan logika OR, maka true or false menghasilkan TRUE. Begitu pula apabila umurnya berada di atas 64. Logika ini hanya menghasilkan false apabila umur berada diantara 15 hingga 64.

// Solusi keduanya adalah kita menggunakan operator kecil sama dengan dan besar sama dengan. Kita menggunakan kode ini apabila umur 15 dan 64 termasuk ke kategori benar. Nanti teman-teman bisa mencoba sendiri kode ini langsung di browser.

// Sekarang kita masuk ke operator logika terakhir dari video ini, yaitu operator logika NOT, yang menggunakan simbol tanda seru. Logika NOT ini sederhana saja ya, fungsinya adalah untuk membalikan nilai TRUE menjadi FALSE, dan FALSE menjadi TRUE.

// Kita langsung coba di browser. Misalkan kita tuliskan tanda seru true. Artinya NOT true. Maka kita mendapatkan hasil False. Dan kalau kita berikan tanda seru false, maka kita mendapatkan hasil true.

// Sekarang misalkan nilai age adalah 25. Artinya usia produktif. Kalau kita coba age > 15. Maka kita mendapatkan hasil true. Kalau kita jadikan NOT dengan kode

// !(age > 15)
// Maka hasilnya berbalik menjadi false.

// Kita coba lagi logika usia produktif yang kita pelajari barusan menggunakan logika AND. Hasilnya adalah true.

// (age > 15) && (age < 64)
// Dan sekarang logika ini kita tambahkan NOT. Kodenya menjadi

// !((age > 15) && (age < 64))
// Hasilnya sekarang malah menjadi false. Dan kalau kita mengubah age menjadi 10 dan kita jalankan kembali logika NOT, hasilnya malah menjadi true.

// Artinya kode logika AND yang digunakan untuk mencari usia produktif, kalau ditambahkan logika NOT akan berbalik menjadi logika untuk mencari usia non-produktif. Dan teman-teman bisa mencoba sendiri kode logika OR yang tadinya digunakan untuk mencari usia non-produktif, kalau ditambahkan logika NOT akan berbalik menjadi logika untuk mencari usia produktif.