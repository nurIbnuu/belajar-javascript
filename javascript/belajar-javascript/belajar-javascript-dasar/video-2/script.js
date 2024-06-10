// Cara menulis JavaScript
// In Head or Body
// JavaScript bisa di dalam tag Head atau sebelum tag penutup Body dan pakai metode external (ini yang direkomendasikan agar semua html diload dulu karena browser bekerja dari atas ke bawah)

// Kita sudah memasuki materi terakhir dari front-end development, yaitu bahasa pemograman Javascript. Dan pada playlist ini, kita akan memulai dari pemograman dasarnya terlebih dahulu.

// Front End Development terdiri dari 3 bagian besar, yaitu HTML, CSS dan Javascript. Kita sudah membahas mengenai HTML, yang mengatur struktur dari situs. Dengan menggunakan HTML, kita memberitahukan browser bagian konten mana yang merupakan navigasi, judul, paragraf, daftar, dan lain-lain.

// Setelah itu kita juga telah membahas mengenai CSS, yang mengatur bagaimana cara menampilkan konten tersebut. Jadi dengan menggunakan CSS, kita bisa mengatur agar browser menggunakan warna apa, font apa. Dan kita juga bisa mengatur di posisi mana konten tersebut ditampilkan.

// Pada playlist ini, kita akan membahas mengenai Javascript, yang mengatur Behavior dari situs kita. Dengan menggunakan Javascript, kita bisa mengatur apa yang akan terjadi apabila pengunjung mengklik salah satu tombol di situs kita. Kita juga bisa menggunakan Javascript untuk melakukan validasi terhadap data yang diberikan oleh pengunjung. Nanti akan kita bahas lebih lanjut lagi mengenai apa saja yang akan kita pelajari dan yang bisa kita lakukan dengan menggunakan Javascript.

// Pada awalnya, ada sebuah browser yang bernama Mosaic. Mosaic ini bukanlah browser yang pertama kali diciptakan di dunia, namun merupakan browser yang paling popular pada saat itu. Mengapa bisa popular? Karena Mosaic adalah satu-satunya browser, pada saat itu, yang bisa menampilkan gambar dan teks HTML dalam satu halaman yang sama. Sedangkan browser lain hanya bisa menampilkan teks saja, kalau ada gambar harus ditampilkan di halaman yang terpisah.

// Salah satu programmer pembuat Mosaic bernama Mark Andreesen. Mark sedang kuliah pada saat mengerjakan proyek Mosaic. Setelah tamat kuliah, Mark keluar dari proyek Mosaic dan kemudian mengembangkan browser baru yang diberi nama Netscape Navigator.

// Netscape Navigator pun dengan cepat menjadi popular, karena Netscape Navigator bisa langsung menampilkan bagian awal situs selagi file HTML dan gambarnya hanya berhasil diunduh sebagian. Sementara browser lain harus menunggu hingga seluruh file berhasil diunduh penuh dahulu barulah bisa menampilkan hasilnya. Pada jaman itu internet masih menggunakan koneksi dial up modem, dengan kecepatan maksimal di 56 kbps, sehingga kalau menggunakan browser lain kita harus melihat layar blank selama beberapa menit. Sedangkan kalau menggunakan Netscape Navigator, kita sudah bisa membaca teks di bagian awal situs dalam waktu beberapa detik.

// Nah, pada saat itu browser hanya berfungsi untuk menampilkan halaman situs saja, sementara semua pemrosesan data harus dilakukan di web server. Bahkan hanya untuk perhitungan sederhana saja, browser harus mengirimkan semua datanya ke web server, kemudian web server melakukan perhitungan dan mengembalikan hasilnya ke browser.

// Pengembang Netscape berpikir, alangkah baiknya kalau kita bisa menambahkan script pada browser, sehingga browser bisa melakukan perhitungan secara realtime dan langsung menampilkan hasilnya ke pengunjung. Jadi kita bisa menghemat banyak waktu karena tidak perlu bolak balik ke web server.

// Mereka pun mencari beberapa alternatif untuk mewujudkan hal ini, salah satunya adalah dengan bekerja sama dengan Sun Microsystem yang sedang popular dengan bahasa pemograman Java. Namun sebagai keputusan akhirnya, Netscape menyewa programmer yang bernama Brendan Eich untuk membuat bahasa pemograman baru yang syntax-nya mirip dengan Java. Namun kriteria yang lebih pentingnya adalah bahasa pemograman ini harus gampang untuk digunakan, sehingga orang yang tidak memiliki latar belakang IT ataupun programming tetap bisa menuliskan kode sederhana. Dan kisah ini pun menjadi legenda karena hanya dalam waktu 10 hari, Brendan Eich berhasil menciptakan bahasa pemograman baru yang pada saat itu dinamakan LiveScript.

// Selanjutnya, untuk memasarkan LiveScript, Netscape bekerja sama dengan Sun Microsystems. Awalnya Sun menawarkan untuk menggunakan bahasa pemograman Java di browser. Namun Netscape menolak karena kriteria yang dianggap paling penting adalah mudah untuk digunakan oleh non-programmer, sedangkan bahasa pemograman Java dianggap terlalu rumit. Bagi yang sudah mengenal bahasa pemograman Java pasti sudah tau ya, karena di bahasa Java itu kita harus mengerti yang namanya Struktur Data, Object Oriented Programming, dan lain-lain, sehingga memang terlalu rumit untuk orang biasa.

// Akhirnya kedua perusahaan mencapai suatu kesepakatan. Untuk keperluan marketing, maka nama LiveScript diubah menjadi Javascript. Jadi strateginya hanya menambahkan kata Java saja, karena pada saat itu kata Java sedang sangat popular di barat. Dan strategi ini sangat berhasil. Javascript berkembang menjadi bahasa pemograman yang paling banyak digunakan hingga saat ini.

// Sebagai informasi tambahan, trademark dari nama Javascript dipegang oleh Sun Microsystems. Dan berhubung Sun Microsystems sudah diakuisisi oleh Oracle, maka sekarang trademark Javascript dipegang oleh Oracle.

// Melihat kesuksesan Netscape, perusahaan lain tidak tinggal diam. Banyak yang turut membuat browser untuk menyaingi Netscape. Salah satu saingan yang paling besarnya adalah Microsoft, dengan produk Internet Explorer. Microsoft bahkan melakukan rekayasa terbalik terhadap JavaScript dan membuatnya menjadi bahasa pemograman baru JScript. Netscape sangat terpukul oleh Microsoft, karena pada saat itu sistem operasi Microsoft Windows paling banyak digunakan di PC. Dan Internet Explorer sudah secara otomatis terinstall di setiap Windows.

// Ditengah sulitnya persaingan antar browser, Netscape mulai menyadari akan pentingnya melakukan suatu standarisasi terhadap Javascript, sehingga seluruh pengembang browser harus mengikuti standar tersebut. Netscape pun mencari organisasi yang bersedia melakukan standarisasi dan akhirnya menemukan ECMA, singkatan dari European Computer Manufactures Association. ECMA adalah organisasi nonprofit yang membuat standarisasi untuk hardware komputer, komunikasi dan bahasa pemograman.

// Setelah diserahkan ke ECMA, sebenarnya nama Javascript sudah tidak berlaku lagi dan seharusnya diganti menjadi ECMAScript. Namun para programmer sudah terbiasa dan lebih suka dengan nama Javascript sehingga keterusan menggunakan nama tersebut. Apabila kita menanyakan versi berapakah Javascript yang sedang digunakan? Maka kita mendapatkan jawaban seperti ES6. Perhatikan bahwa huruf depannya adalah ES, singkatan dari ECMAScript, bukan JS Javascript.

// Nah, ini adalah perkembangan dari versi ECMAScript, dimulai dari ES1 di tahun 1997. Kemudian versi 2 dibuat pada tahun 1998 dan versi 3 di tahun 1999. Namun kemudian perkembangannya melambat, dan bahkan ES4 di tahun 2003 dianggap gagal karena ada penolakan dari pengembang browser lainnya. Terutama dari Microsoft karena pada saat itu Internet Explorer sedang berada di atas angin, dan Microsoft juga memiliki kepentingan untuk memasarkan bahasa pemogramannya sendiri seperti JScript dan .NET.

// Namun kemudian Javascript menciptakan teknik baru yang bernama AJAX, dimana browser dapat menghubungi web server hanya untuk mengambil datanya saja. Hal ini menyebabkan browser dapat menampilkan halaman secara lebih cepat dan dinamis. Pertama browser dapat mengambil halaman situsnya saja terlebih dahulu. Berhubung tidak mengambil data, maka halaman situs dapat ditampilkan lebih cepat. Dan kemudian dengan menggunakan AJAX, barulah halaman situs menarik datanya. Halaman situs juga bisa berganti ke data berikutnya tanpa perlu melakukan reload.

// Menyadari betapa pentingnya fitur ini bagi masa depan pemograman web, akhirnya semua pengembang browser setuju untuk bersatu dan kembali mengikuti standart ECMAScript. Lahirlah ES5 di tahun 2009. Dan kemudian perkembangan ECMAScript pun menjadi lancar, hingga ES12 di tahun 2021.

// Berhubung kalah bersaing dengan Microsoft Internet Explorer, akhirnya Netscape tutup pada tahun 2003. Kemudian teknologi yang digunakan oleh Netscape di daur ulang oleh Mozilla, dan dilahirkan kembali sebagai browser Mozilla Firefox. Mozilla adalah komunitas open-source yang didirikan oleh anggota Netscape pada tahun 1998. Sang pencipta LiveScript, Brendan Eich, termasuk salah satu pendiri Mozilla.

// Sampai sekarang Mozilla masih tetap memegang peranan penting dalam pemograman web. Salah satu bagian dari situs Mozilla, yaitu Mozilla Developer Network atau MDN, merupakan referensi yang paling banyak digunakan oleh programmer, termasuk saya sendiri.

// Oke, sampai disini dulu pembahasan kita mengenai sejarah Javascript. Selanjutnya kita akan membahas mengenai Javascript. Pertama kita mesti tau terlebih dahulu. Apakah itu Program atau Script? Program atau Script adalah sekumpulan instruksi yang harus dijalankan oleh komputer untuk memecahkan suatu masalah.

// Sebagai contoh, kita ingin memecahkan masalah bagaimana cara pergi ke rumah teman. Disini kita sudah memiliki peta, kita sudah mengetahui dimana posisi rumah teman kita dan kita juga mengetahui dimana posisi mobil kita sekarang. Jadi kita tinggal memberikan instruksinya agar mobil kita bisa pindah ke rumah teman. Nah, kalau kita harus menuliskan program atau script untuk memecahkan masalah ini, maka kita tinggal memberikan tiga instruksi sederhana, yaitu lurus, belok kanan dan lurus. Kalau ketiga instruksi ini diikuti dengan benar maka kita akan tiba di rumah teman.

// Kalau misalkan instruksinya salah. Lurus, lurus, baru belok kanan. Maka kita akan nyasar. Padahal hanya kesalahan kecil yaitu urutan instruksi kedua dan ketiganya terbalik. Jadi dari contoh ini kelihatan ya, bahwa tugas penting dari programmer adalah menuliskan instruksi dengan benar. Sekumpulan instruksi ini kita sebut dengan nama source code.

// Pertanyaan berikutnya, apa bedanya Program dengan Script? Kalau pada program, source code dapat kita compile menjadi Binary. Dan kemudian Binary bisa dijalankan langsung pada sistem operasi. Sebagai contoh, apabila kita memiliki source code bahasa pemograman c#, bisa kita compile menggunakan Microsoft Visual Studio dan menghasilkan file binary dengan extension .exe. File binary ini bisa kita jalankan pada sistem operasi Windows.

// Sedangkan kalau kita melakukan pemograman menggunakan script, maka source code kita hanya bisa dijalankan di program tertentu. Sebagai contoh, Javascript hanya bisa dijalankan di browser. Dalam video tutorial saya saat ini kita menggunakan browser Google Chrome. Namun apabila teman-teman lebih lebih suka menggunakan browser lainnya, seharusnya hasilnya tetap sama ya, karena para pengembang browser sudah menyetujui untuk mengikuti standar dari ECMAScript.

// Contoh script lainnya adalah ActionScript, yang hanya bisa dijalankan di dalam program Adobe Flash.

// Apa saja yang akan kita pelajari pada playlist belajar Javascript Dasar? Yang pertama kita akan belajar mengenai variable. Variable ini digunakan agar komputer dapat mengingat suatu nilai. Sebagai contoh, saya meminta komputer untuk menyimpan nama saya adalah David. Berikutnya kalau saya menanyakan kembali ke komputer siapa nama saya, maka komputer akan menjawab David.

// Selanjutnya kita akan mempelajari mengenai jenis nilai apa saja sih yang bisa diproses oleh Javascript? Ada beberapa jenis nilai ya, dari yang paling gampang adalah angka, dan kemudian bisa berupa kata-kata atau dalam dunia pemograman lebih dikenal dengan nama string. Bisa juga berupa boolean, yaitu benar atau salah. Dan masih ada beberapa tipe data lainnya.

// Kemudian kita akan mempelajari mengenai cara menggunakan operator untuk memproses data. Dimulai dari yang paling mudah yaitu operator aritmatika untuk melakukan perhitungan matematika seperti tambah, kurang, kali, bagi.

// Perlu diperhatikan disini bahwa operator yang sama bisa saja memberikan hasil yang berbeda tergantung dari tipe datanya. Sebagai contoh, kalau kita menggunakan operator tambah pada tipe data angka, maka satu ditambah satu akan menghasilkan angka dua. Sedangkan kalau kita menggunakan operator yang sama pada tipe data string, maka satu ditambah satu akan menghasilkan sebelas. Makanya kita harus menguasai terlebih dahulu konsep tipe data, sehingga nantinya kalau kita menuliskan script dan menghasilkan bugs seperti ini, maka kita bisa dengan mudah mengetahui bahwa kesalahannya berada di tipe datanya.

// Materi berikutnya adalah pengkondisian. Dengan menggunakan pengkondisian, kita bisa menyuruh komputer untuk melakukan instruksi yang berbeda, bergantung dari datanya. Sebagai contoh, kita sedang menulis instruksi untuk ke toilet. Jika jenis kelamin pengunjung adalah wanita, maka gunakanlah toilet di sebelah kanan. Selain itu, gunakan toilet di sebelah kiri. Jadi dengan memberikan instruksi seperti ini, maka kita bisa memisahkan toilet pria dengan wanita.

// Dengan menggunakan pengulangan, maka kita bisa menyuruh komputer untuk menjalankan sejumlah instruksi secara berulang-ulang. Sebagai contoh, misalkan kita memiliki uang dengan nilai awal 10.000. Kemudian kita menyuruh komputer untuk melakukan perulangan sebanyak 5 kali, dengan instruksi tambahkan nilai uang sebanyak 1.000. Artinya secara total uang kita bertambah sebanyak 5.000 ya. Jadi kalau kita cek ke komputer, berapa nilai uang kita sekarang? Maka komputer akan memberikan nilai 15.000.

// Bila ada sejumlah instruksi yang akan kita gunakan beberapa kali dalam script kita, maka kita bisa mengubahnya menjadi function. Sebagai contoh, kita bisa membuat function goToilet untuk script pengkondisian yang tadi. Jika wanita maka gunakan toilet di sebelah kanan, selain itu gunakan toilet di sebelah kiri. Dengan menuliskan function seperti ini, maka selanjutnya kita bisa memanggil fungsi goToilet secara berulang-ulang. Sebagai contoh misalkan kita panggil goToilet dengan parameter “wanita” maka hasilnya adalah kanan. Dan kalau kita panggil goToilet dengan parameter “pria”, maka hasilnya adalah kiri.

// Oke, ini adalah sejumlah materi yang akan kita bahas dalam playlist Belajar Javascript Dasar. Dan sebagai informasi tambahan, materi-materi yang dibahas disini adalah konsep dasar pemograman. Artinya kalau kita sedang mempelajari bahasa pemograman lain seperti Java, Python, atau C#, maka yang harus kita pelajari kurang lebih sama seperti ini juga. Yang berbeda palingan hanya cara menuliskan source code-nya saja.