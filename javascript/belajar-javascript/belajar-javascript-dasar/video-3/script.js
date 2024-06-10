let myName = "nurIbnuu";
console.log(myName);
alert(myName);
//    Variable = kita memesan tempat di memori komputer yang diberi nama myName, 'nurIbnuu' merupakan nilai yang hendak kita simpan dalam memori tersebut, setelah instruksi ini kita memiliki tempat penyimpanan data yang diberi nama myName setelah itu jika kita menulis kembali nilai myName maka komputer akan mengembalikan nilai 'nurIbnuu'. Atau kotak kosong yang diberi nama myName lalu kita isi dengan 'nurIbnuu'.
// let adalah Keywords;
// myName adalah Name;
// = adalah Operator;
// 'nurIbnuu' adalah Value;
//    Sifat dari variable
// - Nilai disimpan di dalam memori
// - Nilai bisa kita gunakan kembali pada kode berikutnya
// - Nilai masih bisa diganti
// - Nilai akan hilang pada saat kita reload
// Keyword 'let' hanya boleh dituliskan sekali untuk memesan tempat di memori
// Variable hanya disimpan selama browser belum direlaod atau masih mengakses halaman yang sama
// Variable bersifat Case Sensitive
// Nilai const tidak bisa diganti, gunakan UPPER_SNAKE_CASE
// Untuk menulis variable gunakan keyword 'let' jangan pakai 'var'


// Pada video ini kita akan membahas mengenai variable, yang bisa kita gunakan untuk meminta browser mengingat suatu nilai. Nilai ini nantinya bisa kita gunakan lagi pada kode kita di baris berikutnya.

// Kita bisa langsung praktekkan di browser. Kita buka halaman kosong. Lalu kita buka developer tools dengan cara klik kanan dan pilih Inspect. Kemudian kita bisa memilih tab Console. Disini kita bisa langsung menuliskan kode Javascript, dan akan langsung dijalankan oleh browser.

// Sebagai contoh, saya ingin browser mengingat bahwa nama saya adalah David. Cara menuliskan kodenya, pertama kita gunakan kata kunci let untuk membuat variable baru. Kemudian diikuti dengan nama variablenya, misalkan nama saya disini saya tulis menggunakan bahasa inggris menjadi myName. Nah, untuk memasukkan nilai ke dalam variable, kita menggunakan operator sama dengan. Lalu diikuti dengan nilainya yaitu David dalam tanda kutip ganda. Pada bagian paling akhir dari setiap kode, jangan lupa menuliskan titik koma.

// Kita tekan tombol Enter dan browser langsung menjalankan kode yang kita tulis barusan. Berhubung kata kunci let tidak memberikan return value, maka browser menuliskan hasilnya undefined. Selanjutnya kita bisa mengambil kembali nilai yang disimpan oleh variable nama saya dengan cara mengetikkan nama variable-nya, yaitu myName. Dan browser pun merespon dengan nilai dari variable tersebut, yaitu “David”.

// Kita juga bisa menggunakan variable kita sebagai parameter fungsi. Misalkan fungsi alert seperti contoh pada video sebelumnya. Kita ketikkan alert, lalu buka kurung. Kita tuliskan nama variablenya myName. Lalu tutup kurung dan titik koma. Kita tekan enter. Kemudian browser pun menampilkan popup yang isinya adalah “David”.

// Oke, pelajaran kita mulai dari sintaks untuk membuat variable dalam bahasa Javascript. Sintaks lengkapnya adalah let year = 2021;. Kata pertama let adalah kata kunci yang memberitahukan browser bahwa kita hendak membuat variable. Kata kedua year adalah nama dari variable yang hendak kita buat. Kemudian diikuti dengan tanda sama dengan yang merupakan sebuah operator, atau lebih tepatnya adalah assigment operator. Dan bagian keempat 2021 adalah nilai yang hendak kita simpan di dalam variable. Terakhir, jangan lupa di setiap akhir instruksi Javascript, kita harus menuliskan tanda titik koma.

// Apakah arti dari instruksi ini? Nah sebagai gambaran, dua kata pertama let year berarti kita memesan tempat di memory komputer, yang kita beri nama year. Sebagai ilustrasinya, ibarat kita meminta komputer untuk menyediakan satu buah kotak yang kita beri label nama year. Pada instruksi berikutnya, yaitu tanda sama dengan 2021, artinya kita memiliki nilai 2021 yang hendak kita simpan ke dalam kotak tersebut. Setelah instruksi ini, kita memiliki satu buah tempat penyimpanan data pada memory, yang kita beri nama year. Selanjutnya apabila kita menyebutkan nama variable year, maka komputer akan mengakses kembali data yang tersimpan dan mengembalikan nilai 2021.

// Bagaimana sifat dari Varible. Yang pertama adalah nilai dari variable disimpan di dalam memory. Nah, ini penting ya. Kita mesti tahu bahwa di dalam sebuah komputer itu terdapat beberapa bagian. Saat ini bagian penting dari komputer adalah CPU, GPU, memory dan storage. Dan berhubung jaman sekarang semua komputer harus bisa terhubung ke internet, maka network pun sudah menjadi salah satu bagian pentingnya. Pada saat kita melakukan pemograman, kita harus tau bagian mana dari komputer yang sedang kita gunakan. Dalam hal ini, variable menggunakan bagian memory. Dan nantinya sifat-sifat dari variable ini juga mengikuti sifat dari memory.

// Oke, sifat kedua dari variable ada nilai yang telah kita simpan dapat kita gunakan lagi pada kode berikutnya. Jadi kalau kita sudah menjalankan instruksi pertama let year = 2021;. Maka kita telah membuat variable dengan nama year dan menyimpan nilai 2021 di dalamnya. Di kode berikutnya, apabila kita menyebutkan nama variablenya, yaitu year, maka komputer akan mengembalikan nilainya yaitu 2021.

// Selanjutnya sifat yang ketiga dari variable adalah nilai yang telah disimpan masih bisa kita ganti. Jadi kalau misalkan ada perubahan nih, rupanya tahunnya bukan 2021, melainkan 1990. Maka kita mengganti nilai yang disimpan dengan menggunakan instruksi year = 1990;. Artinya kita melakukan assignment nilai baru, yaitu 1990, ke dalam variable dengan nama year.

// Perhatikan bahwa disini kita sudah tidak menggunakan keyword let lagi ya. Karena keyword let hanya boleh digunakan satu kali untuk memesan tempat pada memory. Berhubung kita sudah memiliki tempat tersebut, maka kita tidak perlu memesan ulang, kita bisa langsung menggunakannya. Setelah itu, kalau kita memanggil kembali variable year, maka komputer hanya menampilkan nilai yang terbaru saja, yaitu 1990. Sedangkan nilai sebelumnya sudah dihapus dari memory.

// Nah, sifat terakhir dari variable ini sangat berhubungan dengan memory. Nilai yang kita simpan di dalam variable, tidak disimpan untuk selamanya. Jadi nilai hanya disimpan untuk ruang lingkup tertentu saja ya. Biasanya variable hanya disimpan selama browser masih mengakses halaman HTML yang bersangkutan. Variable akan hilang apabila browser pindah ke halaman lain, atau melakukan reload pada halaman yang sama. Sebagai contoh, apabila kita klik kanan dan pilih reload. Setelah itu kita ketik nama variable year, maka komputer akan mengembalikan nilai undefined. Karena kita sudah tidak memiliki variable year.

// Sekarang kita akan membahas mengenai aturan-aturan yang harus kita ikuti untuk menuliskan nama variable. Yang pertama dan paling penting adalah nama variable tidak boleh mengandung spasi. Jadi kalau kita hendak menuliskan nama variable myName seperti contoh awal video, kita tidak boleh menuliskannya sebagai my spasi name. Komputer akan menganggapnya sebagai error.

// Aturan kedua, nama variable boleh terdiri dari huruf, angka, tanda underscore dan tanda dollar. Selain itu tidak boleh. Jadi tidak boleh menggunakan simbol yang aneh-aneh ya. Hanya dua tanda yang boleh digunakan, yaitu underscore dan dollar. Jadi untuk kasus nama variable myName, kita bisa menuliskannya sebagai my_name atau my$name. Bisa tapi tidak disarankan untuk digunakan ya. Pada slide berikutnya kita akan mempelajari mengenai cara menuliskan nama variable yang baik.

// Aturan ketiga, nama variable boleh diawali oleh huruf, tanda underscore dan tanda dollar. Jadi kalau kita mau menuliskan nama variable _myName, boleh. Atau kalau kita hendak menuliskan nama variable $myName, agar mirip dengan bahasa pemograman PHP, itu juga boleh. Namun saya sarankan jangan seperti ini ya. Berhubung kita sedang menuliskan kode dalam bahasa Javascript, lebih baik kita gunakan cara yang lazim digunakan oleh programmer Javascript. Jangan membawa-bawa PHP ke kandangnya Javascript.

// Selanjutnya, nama variable tidak boleh diawali oleh angka. Apabila kita hendak membuat variable nama pertama, nama kedua, dan seterusnya. Kita tidak boleh menuliskan angkanya di bagian depan seperti 1name. Namun kita boleh menggunakan angka di bagian belakang, jadi kita boleh membuat nama variable seperti name1, name2, dan seterusnya.

// Aturan berikutnya adalah nama variable bersifat case sensitif. Artinya sistem akan membedakan antara huruf besar dan huruf kecil. Jadi misalkan kita menjalankan perintah let year = 2021;. Perhatikan bahwa nama variable yang kita gunakan adalah huruf kecil semua. Jadi apabila kita ingin memanggil kembali variable tersebut, maka kita harus menuliskan year sama persis dengan huruf kecil semua. Apabila kita menggunakan huruf besar di salah satu hurufnya, misalkan huruf Y besar, maka sistem sudah tidak mengenali nama variable tersebut. Karena sudah dianggap sebagai nama lain.

// Dan aturan terakhir, nama variable tidak boleh sama dengan keyword. Di pelajaran ini kita sudah mempelajari keyword let. Jadi kalau misalkan kita membuat variable dengan nama let, maka sintaksnya menjadi let let = 2021;, maka sistem akan memberikan pesan error. Masih ada beberapa keyword lain yang tidak boleh kita gunakan, seperti for, if, else, const, var, dan lain-lain. Kedepannya akan kita bahas satu per satu fungsi dari keyword ini.

// Selanjutnya kita akan mempelajari mengenai Naming Convention, yaitu cara menuliskan nama variable yang paling banyak digunakan oleh programmer Javascript. Naming Convention ini tidak wajib, artinya boleh saja kita tidak mengikutinya dan kode Javascript kita tetap berjalan lancar tanpa error. Namun apabila kita mengikuti aturan Naming Convention ini, maka kode kita menjadi lebih gampang untuk dibaca dan dipelajari oleh kita sendiri ataupun orang lain yang harus melanjutkan pekerjaan kita.

// Naming Convention yang paling penting adalah gunakan camelCase. CamelCase disini artinya semua kata dalam variable digabung tanpa spasi, dan setiap huruf pertama dalam kata menggunakan huruf besar, kecuali huruf pertama variable. Sebagai contoh, apabila saya ingin menuliskan nama teman, maka saya tuliskan sebagai friendName. Kata pertama friend huruf kecil semua. Kata kedua Name menggunakan N besar. Ini adalah cara yang paling lazim digunakan dalam bahasa Javascript.

// Mengapa tidak menggunakan huruf kecil semuanya saja? Atau lebih lazim disebut lower case. Ya, bisa saja. Kita boleh menuliskan nama variable kita sebagai friendname. Tidak error. Namun ada kasus-kasus tertentu yang menyebabkan nama variable kita menjadi rancu dan bisa disalahartikan. Sebagai contoh, saya bisa membuat nama variable therapistfinder. Namun orang lain bisa membacanya sebagai the rapist finder.

// Bagaimana kalau setiap kata kita pisahkan dengan menggunakan tanda underscore? Bisa. Ini namanya adalah snake case. Jadi kita bisa menuliskan nama variable sebagai friend_name. Tidak error. Namun snake case ini biasanya digunakan di bahasa pemograman lama. Sedangkan jaman now, orang lebih banyak menggunakan camel case.

// Naming convention berikutnya adalah jangan menggunakan tanda underscore maupun tanda dollar di bagian awal nama variable. Walaupun secara sistem memperbolehkan hal ini, namun jangan dilakukan.

// Aturan ketiga adalah gunakan kata-kata yang bermakna sesuai dengan variable. Misalkan kita hendak menyimpan data yang berupa nama, maka kita menggunakan nama variable name. Jangan menggunakan nama seperti address, phone, atau city. Kalau kita menggunakan nama yang tidak sesuai, ibaratnya kita memiliki kotak yang kita beri label gula, namun kita isi dengan teh. Hal-hal seperti ini bisa menyebabkan kesalahan pada kode yang kita tulis berikutnya.

// Saran penamaan berikutnya adalah jangan menggunakan singkatan yang tidak lazim. Sebagai contoh, nama variable nama disingkat menjadi satu huruf n. Perlu diingat bahwa kita menuliskan kode Javascript bukan hanya untuk kita sendiri pada saat ini. Bisa saja dalam waktu beberapa bulan kedepan, kita sendiri atau mungkin ada rekan kerja kita harus melihat kembali kode yang kita tulis sekarang. Dan pada saat itu, kita melihat nama variable n, mungkin kita akan bingung sendiri. Apa maksud dari variable n ini? Jadi lebih baik kita menuliskan nama dengan satu kata lengkap, agar lebih gampang untuk dimengerti.

// Saran selanjutnya, selain jangan menyingkat nama variable, jangan juga membuatnya menjadi terlalu panjang, seperti menggunakan satu kalimat. Sebagai contoh, saya ingin menyimpan variable dengan nama myClassmateAddressWhoWorkInBogor. Namanya terlalu panjang ya. Untuk mengetikkan namanya saja kita sudah cape dan memerlukan waktu lama. Dan nantinya juga kode kita menjadi panjang dan susah untuk dibaca ulang. Lebih baik kita menggunakan kata kuncinya saja sebagai nama variable, misalkan classmateAddress.

// Dan saran terakhir, ini adalah dari saya pribadi, berhubung kita di Indonesia menggunakan bahasa Indonesia. Nah, kita sebenarnya termasuk beruntung karena Bahasa Indonesia masih menggunakan abjad abcde yang sama persis dengan yang digunakan oleh Bahasa Inggris, sehingga kita bisa dengan cepat belajar dan menyesuaikan diri dengan Bahasa Inggris. Namun kita mesti tetap mengingat bahwa kode Javascript dirancang menggunakan bahasa Inggris. Semua keyword dan fungsi standart yang akan kita gunakan adalah dalam bahasa Inggris. Oleh karena itu untuk menuliskan nama variable, saya menyarankan untuk mengikuti, dalam bahasa Inggris juga.

// Selain itu, kata-kata dalam bahasa Indonesia juga biasanya lebih panjang dibandingkan dengan kata-kata dalam bahasa Inggris. Sebagai contoh, variable yang dalam bahasa Inggris bisa kita beri nama isGameOver, dalam bahasa Indonesia menjadi apakahPermainanBerakhir.

// Nah, untuk menyimpan nilai di dalam memory, kita bisa menggunakan cara lain yang bernama Constant. Sintaksnya adalah const YEAR = 2021;. Kalau kita bandingkan dengan sintaks variable, yang berbeda hanya keywordnya saja. Jika tadinya variable menggunakan keyword let, sekarang contant menggunakan keyword const.

// Apa perbedaan dari variable dengan constant? Pada dasarnya variable sama dengan constant, hanya ada 1 sifat yang berbeda. Pada constant, kita hanya boleh mengisikan nilainya satu kali saja. Jadi kalau misalkan kita sudah mengisikan nilai constant YEAR dengan 2021, dan kemudian kita ingin ganti menjadi 1990, maka sistem akan menampilkan pesan error. Karena nilai pada constant tidak bisa diganti.

// Nah, untuk naming convention dari constant juga sama dengan variable. Yang berbeda hanyalah pada constant kita menggunakan UPPER_SNAKE_CASE. Semua kata dituliskan dengan menggunakan huruf besar, dan dipisahkan dengan tanda underscore. Dengan mengikuti naming convention ini, maka kita bisa membedakan yang mana variable dan yang mana constant. Sehingga kita terhindar dari kesalahan karena mencoba untuk mengubah nilai constant.

// Keyword let dan const ini diperkenalkan mulai dari versi ES6 di tahun 2015. Sebelumnya, hanya ada 1 keyword untuk variable, yaitu var. Jadi kalau teman-teman melihat video lama, atau sedang membaca source code lama, mungkin teman-teman akan menemukan sintaks seperti var year = 2021;. Kalau teman-teman hendak membuat variable dengan menggunakan keyword var di browser versi terbaru, kode tetap bisa berjalan lancar tanpa error.

// Keyword let memiliki fitur manajemen memory yang lebih baik dibandingkan dengan var. Namun sayangnya pembahasan mengenai apa perbedaan antara var dan let terlalu dalam untuk pelajaran Javascript Dasar. Kita akan kembali ke materi ini setelah kita memasuki tahap mahir. Untuk sementara, kita cukup tahu bahwa let lebih baik daripada var. Dan untuk membuat variable, kita mesti menggunakan keyword let.