document.writeln("Tipe Data pada JavaScript");

// 7 Tipe Data Primitif; undefined, null/object, boolean, string, number, bigint, symbol
// typeof 2021 atau typeof(2021)
// tipe data 'undefined' terjadi karena variable yang masih kosong nilainya
// tipe data 'null' sengaja diisi oleh programmer, ketika dicek menggunakan typeof maka munculnya object bukan null
// tanda kutip yang dicopy melalui word processor spt ms.word maka akan menyebabkan error
// Number.MAX_SAFE_INTEGER
// 9007199254740991 === 2**53
// bigint(1n) tidak bisa disatukan dengan number
// Symbol('heart');
// typeof(Symbol('heart'));

// Kita langsung mulai dengan membuka halaman kosong pada Chrome. Dan kita langsung coba coding melalui console.

// Sebelum melanjutkan, ada satu operator yang perlu kita pelajari terlebih dahulu, yaitu operator typeof. Operator typeof akan memberitahu kita tipe data apa yang sedang kita gunakan. Cara penggunaannya gampang. Kita ketikkan saja nama operatornya typeof, diikuti spasi. Lalu bisa diikuti dengan nilai apa yang kita inginkan. Sebagai contoh kita ketik angka 2021. Tekan enter. Dan hasilnya adalah number.

// Atau, kita bisa deklarasikan variable terlebih dahulu. Kita ketik let year = 2021;. Kemudian kita gunakan nama variable year sebagai parameter. Kita ketik typeof year;. Dan hasilnya tetap sama number.

// Selain menggunakan spasi, operator typeof ini juga bisa menggunakan tanda kurung. Sebagai contohnya kita ketik typeof(year);. Dan hasilnya juga masih sama number. Banyak orang lebih ingat cara penggunaan typeof dengan tanda kurung seperti ini, karena mirip dengan cara menggunakan function.

// Nah, sekarang kita masuk ke tipe data pertama kita, yaitu undifined. Tipe data undifined ini hanya memiliki satu nilai saja, yaitu undifined itu sendiri. Yang artinya adalah kosong. Kekosongan disini sering kali terjadi karena kesalahan atau ketidaksengajaan dari programmer. Jadi apabila kita sedang melakukan debug suatu script, dan kita mendapatkan nilai dari variablenya adalah undifined, maka kita mesti berhati-hati. Karena bisa saja variable yang undifined ini akan menyebabkan error di baris berikutnya.

// Sebagai contoh. Misalkan kita tuliskan kode let name;. Kemudian kita ketik typeof name;. Maka kita mendapatkan hasil undefined. Mengapa? Nah, ini adalah kesalahan yang paling sering dilakukan oleh programmer. Karena programmer lupa memberikan nilai untuk variable name. Dan apabila variable ini diproses di baris berikutnya, misalkan data name dikirim ke server, maka akan berpotensi untuk menyebabkan error.

// Nantinya setelah kita mempelajari Javascript lebih dalam, maka kita akan kembali menemukan kesalahan-kesalahan lain yang menyebabkan undifined. Misalnya, kita membuat function dan lupa memberikan return value-nya. Atau contoh lain, kita membuat Array, dan kemudian mengakses data Array tersebut dengan menggunakan index yang terlalu besar. Nanti akan kita bahas lagi ketika kita masuk ke materi tersebut.

// Sekarang kita masuk ke tipe data primitif kedua, yaitu null. Sama seperti undifined, null ini juga hanya memiliki 1 nilai saja, yaitu null. Dan artinya juga sama-sama kosong. Namun kosongnya null ini adalah kekosongan yang disengaja oleh programmer. Artinya programmer telah melakukan inisialisasi, dengan cara memasukkan nilai null ke dalam variable.

// Sebagai contoh, misalkan kita ketikkan kode let address = null;. Artinya kita membuat variable baru dengan nama address, dan dengan sengaja memasukkan nilai null atau kosong ke dalam variable tersebut. Setelah itu, bila kita cek typeof address, nah disini ada perbedaan dengan tipe-tipe data lainnya ya. Typeof tidak menyebut null sebagai ‘null’, melainkan sebagai ‘object’.

// Tipe data primitif ketiga adalah boolean. Tipe data ini juga masih simple ya. Boolean hanya memiliki dua jenis nilai, yaitu benar atau salah. Apabila benar, maka kita menuliskannya dengan kata true. Sedangkan bila salah kita tulis false. Sebagai contoh, bila kita ketik typeof true, maka hasilnya adalah boolean. Dan kalau kita ketik typeof false, maka hasilnya juga boolean. Tipe data boolean ini akan sangat penting, pada saat kita belajar mengenai pengkondisian.

// Selanjutnya kita masuk ke tipe data String. String adalah kumpulan dari karakter. Karakter disini bisa berupa huruf, angka maupun simbol. Kita sudah pernah mencoba tipe data string beberapa kali sebelumnya ya. Untuk membuat data String, kita harus membungkusnya menggunakan tanda kutip. Sebagai contoh, apabila kita hendak menuliskan data “Budi”, maka kita tidak bisa menuliskan kata Budi langsung enter. Akan terjadi error. Karena Javascript mengganggap kata budi ini sebagai instruksi script, bukan data string. Untuk mengubahnya menjadi data, kita bisa membungkusnya dengan tanda kutip satu seperti ‘budi’. Atau kita bisa juga menggunakan tanda kutip ganda, seperti “budi”.

// Pada Javascript, kita bebas menggunakan tanda kutip satu atau ganda. Yang penting kita konsisten. Apabila membuka data string menggunakan tanda kutip satu, maka kita harus menutupnya dengan tanda kutip satu juga. Jangan menutupnya dengan tanda kutip ganda, karena menyebabkan error.

// Berhubung saya belajar dari video yang menggunakan bahasa Inggris, mereka lebih menyarankan untuk menggunakan tanda kutip ganda. Mengapa? Ya, mungkin karena di dalam bahasa Inggris, ada banyak kata-kata yang menggunakan tanda kutip. Sebagai contoh, kalimat “He is going home”, kalau hendak kita singkat menjadi “He’s going home”. Kalau kita coba tulis di Javascript menggunakan tanda kutip satu, maka terjadi error. Karena sistem hanya menganggap data string hanya terdiri dari dua huruf he ini saja, dan kata-kata berikutnya dianggap sebagai instruksi yang tidak dikenal.

// Jika kita menjumpai kondisi seperti ini, maka solusi paling gampangnya adalah menggunakan tanda kutip ganda sebagai pembuka dan penutup string. Atau solusi lainnya adalah kita menggunakan escape character, yaitu tanda backslash, sebelum tanda kutip yang merupakan bagian dari data string.

// Kita yang menggunakan bahasa Indonesia tidak menggunakan tanda kutip sebanyak English, oleh karena itu kita bebas saja memilih untuk menggunakan tanda kutip satu ataupun ganda. Mungkin saja teman-teman lebih suka tanda kutip satu, karena untuk menuliskannya lebih gampang, tidak perlu menekan tombol shift pada keyboard. Bebas saja ya.

// Dan ada satu hal lagi yang perlu diperhatikan. Kalau kita menuliskan string di dalam software word processor seperti microsoft word, perhatikan bahwa tanda kutip kita secara otomatis diubah menjadi tanda kutip pembuka dan tanda kutip penutup. Kemudian pada saat kita mengcopy string ini ke console, akan menyebabkan error. Karena Javascript sudah tidak mengenal tanda kutip yang digunakan. Hal-hal seperti ini perlu diperhatikan, apabila teman-teman sedang melakukan copy source code dari word, dan memindahkannya ke text editor, tanda kutipnya berpotensi untuk menyebabkan error.

// Kita masuk ke tipe data berikutnya yaitu Number. Bahasa pemograman lain biasanya memiliki banyak tipe data untuk angka, seperti integer untuk bilangan bulat, float dan double untuk bilangan pecahan. Namun Javascript hanya memiliki satu tipe data Number, yang merupakan float 64 bit. Dari 64 bit ini, tidak semuanya digunakan untuk menyimpan nilai angka, karena masih ada bit tertentu yang digunakan untuk menyimpan nilai spesial dan sebagai flag. Hanya 53 bit yang digunakan untuk menyimpan nilai angka. Oleh karena itu kita hanya bisa menyimpan bilangan bulat secara tepat, maksimal hanya sebanyak 15 digit.

// Untuk melihat nilai maksimal yang bisa disimpan oleh Number, kita bisa mengakses ke constant Number.MAX_SAFE_INTEGER. Disini kita akan mendapatkan angka 9.007 triliun, atau 9 kuadriliun. Nilai bilangan bulat dibawah ini dapat tersimpan dengan benar pada tipe data Number, sedangkan diatasnya mungkin akan mengalami pembulatan.

// Dari manakah nilai 9.007 triliun ini? Kita bisa membuka kalkulator scientific. Lalu kita hitung 2 dipangkat 53. Hasilnya angkanya sama ya. Hanya selisih 1 karena komputer selalu memulai perhitungan dari angka 0.

// Nah sekarang kalau kita coba ketik di console, kita ketik angka 9 sebanyak 15 kali. Maka hasil yang ditangkap oleh Javascript masih tetap sama.

// Namun kalau kita mengetikkan angka 9 sebanyak 16 kali. Maka sudah terjadi pembulatan. Hal ini disebabkan karena angka yang kita ketik sudah berada di atas MAX_SAFE_INTEGER.

// Selanjutnya kita coba masukkan bilangan pecahan. Perlu diingat lagi disini bahwa Javascript menggunakan bahasa Inggris, dimana penggunaan tanda titik dan koma pada bilangan bahasa Inggris adalah kebalikan dari cara penggunaannya di bahasa Indonesia. Jadi apabila kita hendak menuliskan bilangan 0,5 di bahasa Indonesia, maka di bahasa Inggris menjadi 0.5. Kita coba ya ketikkan 0.5. Dan bisa diterima oleh browser. Kalau kita coba ketik typeof 0.5 maka hasilnya adalah number.

// Nah, untuk penggunaan bilangan pecahan ini juga terkadang terkena masalah pembulatan. Sebagai contoh, pertama kita coba dahulu 0,1 ditambah 0,1. Tentunya kita sudah tau ya, hasilnya adalah 0,2. Di console juga benar.

// Kemudian kita coba lagi 0,1 ditambah 0,2. Seharusnya hasilnya 0,3 ya. Kita lihat hasilnya di console. Ternyata terjadi pembulatan nol koma nol nol nol nol sekian di bagian belakangnya.

// Namun apabila kita melihat secara keseluruhan, kita tetap dianjurkan untuk menggunakan tipe data number untuk memproses seluruh data kita yang berupa angka. Karena jarang sekali kita perlu memproses bilangan bulat diatas 15 digit. Sementara masalah presisi di bilangan pecahan, nantinya bisa diakali menggunakan fungsi round.

// Kita masuk ke tipe data ke-6 yaitu BigInt. BigInt ini baru diperkenalkan di ES tahun 2020, sehingga hanya compatible di browser versi terbaru saja. Kelebihan dari BigInt adalah dapat menampung bilangan bulat dalam jumlah yang sangat besar, bahkan diatas 16 digit.

// Namun BigInt ini masih memiliki kelemahan yang sangat besar, yaitu tidak compatible dengan Number. Sehingga apabila kita menggunakan BigInt di dalam script kita, maka seluruh angka harus menggunakan BigInt. Tidak bisa separuh BigInt dan separuh Number. Karena sistem akan mengeluarkan error, apabila kita mencoba untuk menambahkan, atau membandingkan antara BigInt dan Number.

// Bagaimana cara menggunakan BigInt? Nah, untuk membedakan BigInt dengan Number, maka pada saat kita menuliskan angka BigInt, kita harus menambahkan huruf n di bagian akhir angkanya. Sebagai contoh, apabila saya hendak menuliskan angka 1 dalam bigint, maka saya menuliskannya sebagai 1n. Apabila kita coba typeof-nya, maka hasilnya adalah bigint.

// Kita coba kembali ya, misalkan kita menuliskan angka 9 sebanyak 16 kali menggunakan tipe data Number, maka terjadi pembulatan. Kalau kita tuliskan menggunakan tipe data BigInt, maka tidak terjadi pembulatan.

// Namun kelemahannya, BigInt tidak bisa dioperasikan bersama Number. Sebagai contoh, bila kita mengetikkan 1 + 1n, maka hasilnya akan terjadi error. Dan kelemahan ini terbawa ke library dan fungsi-fungsi Javascript yang sudah terlanjur dibuat menggunakan Number. Mereka akan menghasilkan error juga. Oleh karena itu, untuk saat ini kita masih tidak disarankan untuk menggunakan tipe data BigInt, kecuali ada kebutuhan yang mengharuskan kita untuk memproses bilangan bulat yang lebih besar dari 15 digit.

// Oke, sekarang tipe data primitif terakhir adalah Symbol. Untuk menggunakannya kita harus menuliskan kata Symbol, diikuti tanda kurung, dan di dalamnya kita harus menuliskan kata kunci dari simbol tersebut dalam bentuk String. Misalkan “heart”. Maka kita akan menghasilkan data yang tipenya simbol. Kalau kita coba ketikkan typeof-nya. Maka hasilnya adalah “symbol”. Sayangnya tipe data symbol ini sangat jarang sekali digunakan dalam pemograman, sehingga tidak kita bahas lebih lanjut.
