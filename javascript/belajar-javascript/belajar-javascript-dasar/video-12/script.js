//    Math Methods
console.log(Math); // bisa lihat macam-macam method yang lain, diakses melaui console browser
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-2)); // -2  jadi positif 2
console.log(Math.pow(2, 3)); // 8 (2 pangkat 3 atau 2**3)
console.log(Math.sqrt(16)); // 4 (akar dari 16)

//    Metode Pembulatan
console.log(Math.floor(7.9), Math.floor(-7.9)); // 7 (ke bawah)
console.log(Math.ceil(7.1), Math.ceil(-7.1)); // 8 (ke atas)
console.log(Math.round(7.5), Math.round(-7.5)); // 8 (ke nilai terdekat, untuk pecahan 0.5 hasilnya sama dengan yang ceil)

//    Math.ranndom(); menghasilkan bilangan acak antara 0 hingga 1 (termasuk 0, namun tidak termasuk 1)
console.log(Math.random());
console.log(Math.floor(Math.random() * 4) + 20);




// Kita akan membicarakan mengenai objek Math. Apakah itu objek Math? Berikut adalah beberapa informasi yang diambil dari MDN. Math is a built-in object that has properties and methods for matematical contants anda functions. Built-in object artinya Math sudah bisa langsung kita gunakan pada Javascript tanpa perlu instalasi tambahan. Dan Math ini mengandung property dan method yang berhubungan dengan matematika.

// Sebagai contoh, ada sebuah konstanta matematika yang berkaitan dengan perhitungan luas dan keliling dari lingkaran, yaitu PI dengan nilai 3,14. Nilai PI ini bisa kita akses dengan menggunakan kode

// Math.PI;
// Ada beberapa hal yang perlu kita perhatikan dalam menggunakan objek Math. Yang pertama, Math hanya bisa digunakan untuk tipe data Number, belum bisa digunakan untuk tipe data BigInt. Sebagai contoh, misalkan kita memanggil fungsi abs atau absolute. Kalau kita menggunakan argument dengan tipe data number, maka Math berjalan dengan benar. Namun apabila kita menggunakan argument dengan tipe data bigint, yang menggunakan huruf n di bagian akhir angka, maka fungsi ini akan menghasilkan error. Karena sampai saat ini, Javascript masih belum bisa melakukan konversi dari BigInt menjadi Number. Ini masih menjadi PR besar untuk pengembangan Javascript ke depannya.

// Kita lihat lagi informasi berikutnya. Berbeda dengan objek lainnya, Math tidak memiliki constructor. Jadi kalau kita hendak membuat objek String di video sebelumnya, kita menggunakan sintaks let nama_variable = new String();. Namun sintaks seperti ini tidak bisa digunakan untuk objek Math, karena Math tidak memiliki contructor. Semua property dan methods dari Math bersifat statis. Jadi kalau kita hendak menggunakannya, kita tinggal langsung menuliskan saja misalkan Math.PI atau Math.abs();.

// Selanjutnya kita bahas mengenai beberapa metode matematika yang mungkin akan sering kita gunakan dalam pemograman. Yang pertama adalah abs, singkatan dari absolute. Metode ini selalu mengembalikan nilai positif dari argumentnya. Sebagai contoh, kalau kita menuliskan kode

// Math.abs(-5);
// Maka browser mengembalikan nilai positif dari -5, yaitu 5. Sedangkan kalau kita memasukkan argument dengan nilai yang sudah positif seperti 5, maka yang dikembalikan adalah nilai yang sama yaitu 5.

// Metode kedua adalah pow atau power, dengan argument x dan y. Metode ini mengembalikan nilai dari x pangkat y. Sebagai contoh, kalau kita menuliskan kode

// Math.pow(2,3);
// Maka browser mengembalikan nilai 2 pangkat 3, yaitu 8.

// Metode ketiga adalah sqrt atau square root. Metode ini mengembalikan nilai akar dari argumentnya. Sebagai contoh, kalau kita menuliskan kode

// Math.sqrt(4);
// Maka browser mengembalikan nilai akar dari 4, yaitu 2.

// Kita coba praktekkan di browser. Untuk mengetahui lebih lanjut mengenai objek Math, kita bisa mengetikkan Math dengan huruf M besar di console. Browser mengembalikan objek Math, yang kalau kita klik bisa memperlihatkan apa saja konstanta dan methodnya.

// Sebagai contoh, kalau kita ingin mengakses konstanta PI, maka kita bisa coba mengetikkan PI dengan huruf besar di console. Ternyata hasilnya error ya. Cara kerja Javascript tidak seperti itu. Kalau kita ingin mengakses konstanta PI dari objek Math, maka kita harus mengetikan Math.PI, barulah kita bisa mendapatkan nilai dari konstanta tersebut.

// Sekarang kita coba ya beberapa metode yang barusan kita bahas pada slide. Yang pertama adalah absolute, yang selalu mengembalikan nilai positif dari argumentnya. Kita coba ketikkan kode

// Math.abs(-5);
// Hasilnya adalah nilai 5.

// Sedangkan kalau kita coba memberikan argument nilai positif

// Math.abs(5);
// Maka hasilnya adalah 5, atau sama persis dengan nilai argumentnya.

// Kita coba metode kedua yaitu power. Sebagai contoh, kita ketikkan:

// Math.pow(2,3);
// Maka hasilnya adalah 2 pangkat 3, yaitu 8. 2 pangkat 3 ini artinya kita mengalikan 2 dengan 2 sebanyak 3 kali. 2*2*2. Sedangkan kalau kita memasukkan argument 2, 5, artinya kita mengalikan 2 dengan 2 sebayak 5 kali.

// Sebenarnya pada Javascript ada operator khusus untuk metode power, yaitu tanda * sebanyak 2 kali. Sebagai contoh kalau kita ketikkan 2 ** 5, maka hasilnya sama dengan Math.pow(2,5).

// Metode ketiga adalah sqrt atau square root. Metode ini menghasilkan akar dari argumentnya. Sebagai contoh.

// Math.sqrt(4);
// Hasilnya 2.

// Math.sqrt(25);
// Hasilnya 5.

// Selanjutnya kita akan membahas mengenai 3 metode yang bisa kita gunakan untuk mengubah bilangan desimal menjadi bilangan bulat. Yang pertama adalah metode floor atau lantai untuk melakukan pembulatan ke bawah. Berapapun nilai yang berada di belakang koma, metode ini akan mengambil bilangan bulat terdekat dengan nilai yang lebih kecil. Sebagai contoh, apabila kita memanggil metode floor dengan argumen 7,5, maka kita mendapatkan hasil 7.

// Metode kedua adalah ceil atau langit-langit, untuk melakukan pembulatan ke atas. Sebagai contoh, apabila kita memanggil metode ceil dengan argumen 7,5, maka kita mendapatkan hasil 8.

// Dan metode ketiga adalah round, untuk melakukan pembualatan ke bilangan bulat terdekat. Sebagai contoh, bila kita memanggil metode round dengan argumen 7,5, maka kita mendapatkan hasil 8.

// Kita langsung coba di browser. Pertama kita coba metode floor terlebih dahulu. Berapapun nilai yang kita taruh di belakang koma, maka metode ini selalu membulatkan ke bawah. Kita coba contohkan ya, misalkan kita panggil Math.floor dengan nilai 7.1, 7.5, dan 7.9 maka hasilnya selalu 7.

// Nah, berhubung disini nilainya selalu 7, teman-teman jangan mengambil kesimpulan bahwa floor hanya mengambil bilangan bulat di depan saja ya. Karena definisi ini salah. Definisi yang benar dari floor adalah membulatkan ke bawah. Apa bedanya? Kita coba menggunakan metode ini di bilangan negatif. Kita masukkan Math.floor dengan nilai -7.1. Maka kita mendapatkan hasil -8. Mengapa bukan nilai -7? Karena floor membulatkan ke bawah. Nilai -8 berada dibawah -7.

// Kita coba metode kedua, yaitu metode ceil. Kita coba masukkan nilai 7.1, 7.5, dan 7.9 maka hasilnya selalu 8. Karena metode ini selalu melakukan pembulatan ke atas. Sekarang kita coba dengan nilai negatif. Misalkan -7.1. Maka hasilnya adalah -7.

// Dan metode ketiga, yaitu round, melakukan pembulatan ke bilangan bulat yang terdekat. Khusus untuk nilai pecahan 0,5, maka metode round akan mengikuti hasil dari metode ceil. Kita coba ya. Kalau kita panggil metode round dengan argumen 7.1, maka hasilnya adalah 7 karena bilangan bulat yang paling dekatnya adalah 7. Kalau kita menggunakan argumen 7.9 maka hasilnya adalah 8 karena bilangan bulat terdekatnya adalah 8. Kalau argumennya 7.5, maka hasilnya adalah 8 karena mengikuti ceil.

// Kita coba untuk nilai negatif. Round untuk nilai -7.1 menghasilkan nilai -7. Round untuk nilai -7.9 menghasilkan nilai -8. Karena ini adalah nilai bulangan bulat yang paling dekatnya ya. Sekarang yang menarik adalah nilai untuk round -7.5, ternyata hasilnya adalah -7, karena khusus untuk nilai pecahan 0.5, round mengikuti hasil dari ceil.

// Nah, kita sampai di ujung pelajaran dari video ini, yaitu metode Math yang akan paling sering digunakan dalam pemograman, yaitu metode untuk menghasilkan bilangan acak. Disini kita menggunakan metode random(), dan kita akan mendapatkan bilangan desimal acak diantara 0 hingga 1, dimana ada kemungkinan bahwa kita bisa mendapatkan bilangan bulat 0, namun tidak mungkin mendapatkan bilangan bulat 1. Kita bisa melihat contoh di layar, setiap kali kita memanggil metode random, maka kita mendapatkan bilangan desimal acak.

// Namun di dalam pemograman, kita akan jarang sekali membutuhkan bilangan desimal acak diantara 0 dan 1. Kita lebih sering membutuhkan bilangan bulat yang acak. Sebagai contoh, bilangan bulat acak diantara 0 hingga 4. Nah, berbeda dari bahasa pemograman lainnya, pada Javascript kita perlu menambahkan beberapa kode untuk mendapatkan hasil seperti ini.

// Pertama, kita harus menghitung dulu berapa total bilangan bulat yang bisa keluar sebagai hasil acak. Dari bilangan 0 hingga 4, terdapat 5 buah bilangan. Kemudian metode Math.random kita kalikan dengan 5, dan kita bulatkan ke bawah dengan menggunakan metode Math.floor. Kode kita menjadi

// Math.floor(Math.random() * 5);
// Kita langsung coba di browser. Kita coba dahulu Math.random(), yang setiap kali kita panggil akan memberikan bilangan desimal acak diantara 0 hingga 1.

// Sekarang kita coba kode pada slide barusan, untuk menghasilkan bilangan bulat acak diantara 0 hingga 4.

// Math.floor(Math.random() * 5);
// Setiap kali kita menjalankan kode ini, maka bilangan bulat yang keluar adalah acak, dan nilainya berada diantara 0 hingga 4.

// Misalkan kita ingin membuat bilangan acak diantara 1 hingga 5, maka kita menambahkan kode +1 setelah metode floor.

// Math.floor(Math.random() * 5) + 1;
// Dan sekarang hasil yang kita dapatkan berada diantara 1 hingga 5.

// Sekarang kita masuk ke soal latihan untuk pelajaran pada video ini. Tuliskan kode untuk menghasilkan bilangan bulat acak diantara 20 hingga 23. Silahkan pause terlebih dahulu video ini dan kerjakan pada komputer masing-masing.

// Oke, sekarang kita akan membahas solusi dari soal latihan ini. Pertama kita harus menghitung terlebih dahulu ada berapa buah bilangan bulat diantara 20 hingga 23. Totalnya ada 4 buah ya. Artinya metode Math.random() kita kalikan dengan angka 4. Dan kemudian berhubung bilangan acaknya dimulai dari 20, maka kita perlu menambahkan kode +20. Kode akhir dari soal latihan ini adalah:

// Math.floor(Math.random() * 4) + 20;