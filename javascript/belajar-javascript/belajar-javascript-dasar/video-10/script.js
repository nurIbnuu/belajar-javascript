let product = 'Realme C3',
    qty = 5,
    price = 2000000;

console.log(`Anda telah membeli ${product.toUpperCase()} sebanyak ${qty}, sehingga harga total adalah ${qty * price}.`) // Anda telah membeli REALME C3 sebanyak 5, sehingga harga total adalah 10000000.


// Template literals ini sering juga disebut dengan nama string literals karena sering digunakan untuk menghasilkan string. Walaupun sebenarnya penggunaan template literals ini lebih luas, karena bisa digunakan pada function tanpa menghasilkan string sama sekali. Namun pada video ini penggunaan template literals kita batasi hanya untuk string, dan sebelum kita melanjutkan ada baiknya kita lihat dahulu contoh kode Javascript pada saat belum ada fitur template literals.

// Misalkan kita memiliki beberapa variable, yaitu nama produk, kuantiti dan harganya.

// let product = "Printer Bluetooth Janz MP251";
// let qty = 5;
// let price = 350000;
// Lalu kita perlu membuat string seperti “Anda membeli sekian produk A seharga sekian. Total harganya adalah sekian”. Dan disini kita mesti mengganti beberapa kata dari string menjadi nilai yang dikandung oleh variable. Sebagai contoh, sekian yang pertama harus kita ganti menjadi variable qty. Jadi kita harus membuat tanda kutip penutup, ditambah qty, ditambah lalu kita buka lagi tanda kutipnya.

// Nah, ini baru qty saja. Kita masih harus melanjutkan hingga 3 variable lagi. Setelah qty, kita hendak menyebutkan nama produknya. Jadi disini kita mesti beri lagi tanda tambah, kita tulis nama variable product. Dan disini kuantiti dan nama produknya menyambung ya. Mesti kita beri spasi lagi. Jadi disini mesti kita tambahkan lagi

// + " "
// barulah qty dan productnya terpisah. Dan selanjutnya harga kita ganti menjadi

// " + price + "
// Dan dibagian terakhir adalah nilai total yang merupakan ekspresi perkalian antara price dan qty. Jadi kodenya mesti kita ganti menjadi

// + qty * price
// Dan akhir dari kode kita menjadi seperti ini.

// "Anda membeli " + qty + " " + product + " seharga " + price + ". Total harganya adalah " + qty * price
// Perhatikan bahwa untuk menulis kalimat seperti ini saja, kita harus menggunakan banyak simbol tanda kutip ganda dan tanda tambah. Dan kita juga harus berhati-hati sekali untuk menentukan yang mana yang perlu tanda kutip pembuka dan tanda kutip penutup. Hal ini menyebabkan cara penulisan kode seperti ini menjadi rawan untuk terjadi kesalahan typo. Nah, di video ini kita akan belajar mengenai cara menulis kode seperti ini dengan menggunakan fitur Template Literals sehingga cara menulisnya menjadi lebih gampang, dan kode pun lebih enak untuk dibaca.

// Template literals adalah string yang dibuat menggunakan tanda backticks, dimana kita boleh memasukkan ekspresi yang akan dijalankan sebagai kode Javascript. Jadi kita bisa menuliskan kode Javascript di dalam string, seperti memanggil variable, melakukan operasi aritmatika, atau bahkan kita bisa memanggil fungsi lain di dalam template literals.

// Sebagai contoh, kita memiliki kode Template Literals:

// `Saya punya ${2 + 3} apel`;
// Perhatikan disini ada simbol $ yang diikuti oleh kurung kurawal. Semua yang berada di dalam kurung kurawal ini akan dieksekusi sebagai kode Javascript. Disini 2 + 3 akan menghasilkan 5. Sehingga string hasil dari template literal ini adalah “Saya punya 5 apel”

// Kita langsung praktekkan di browser. Ada beberapa aturan yang harus kita ikuti untuk menggunakan fitur Template Literals. Yang pertama adalah kita membuat string dengan menggunakan simbol backticks. Pada keyboard standart, tombol backticks bisa kita temukan di sebelah kiri angka 1, atau di atas tombol Tab. Perhatikan bahwa simbolnya berbeda ya dengan tanda kutip. Ini adalah backticks (`), sedangkan ini adalah tanda kutip (‘).

// Aturan kedua, semua kode Javascript harus kita tuliskan di dalam simbol tanda dollar kurung kurawal.

// Oke, simple ya. Sekarang kita coba ketik kode seperti contoh pada slide tadi.

// `Saya punya ${2 + 3} apel`;
// Dan kita pun mendapatkan hasil string:

// "Saya punya 5 apel"
// ${2 + 3} dieksekusi sehingga menghasilkan 5.

// Perhatikan bahwa ini adalah template literal yang menggunakan backticks. Kalau kita ganti simbolnya menjadi tanda kutip, maka hasilnya menjadi:

// "Saya punya ${2 + 3} apel"
// Tanda ${2 + 3} dianggap sebagai bagian dari string.

// Dan simbol backtick ini bisa kita gunakan juga untuk membuat string biasa ya. Sebagai contoh

// `Hello World`;
// Dan hasilnya tetap string biasa. Namun kita tidak disarankan untuk menggunakan backtick karena backtick ini memerlukan proses lebih lanjut sehingga kode Javascript kita menjadi lebih berat.

// Kita kembali ke kode awal kita.

// "Anda membeli " + qty + " " + product + " seharga " + price + ". Total harganya adalah " + qty * price
// Dengan menggunakan Template Literals, maka kode ini bisa kita tulis menjadi:

// `Anda membeli ${qty} ${product} seharga ${price}. Total harganya adalah ${qty*price}`
// Coba bandingkan kode sebelum Template Literals dengan yang menggunakan Template Literals. Kode menggunakan Template Literals menjadi jauh lebih sederhana ya. Dan lebih enak untuk dibaca. Dan kita juga bisa memanggil fungsi di dalam Template Literals. Sebagai contoh, berhubung product disini adalah tipe data String. Maka kita bisa memanggil methodnya dengan menuliskan product.toUpperCase().

// Untuk informasi lebih lanjut mengenai Template Literals, kita bisa search google dengan kata kunci “Javascript Template Literals”. Dan tentunya kita melihat referensi dari situs favorit kita, yaitu MDN. Disini ada cara penggunaan Template Literals lebih lanjut, seperti cara menggunakannya sebagai function. Nanti teman-teman bisa belajar dan mencoba sendiri.

// Yang perlu saya tekankan disini adalah Browser Compatibility-nya. Ternyata browser jenis Internet Explorer sama sekali tidak mendukung fitur Template Literals. Jadi ini adalah salah satu poin penting yang perlu dipertimbangkan sebelum teman-teman memutuskan apakah hendak menggunakan Template Literals di dalam proyeknya atau tidak.

// Apabila proyek yang sedang kita kerjakan adalah aplikasi seperti stok barang atau accounting, dimana penggunanya terbatas hanya di kantor atau organisasi tertentu, biasanya kita bisa menyuruh penggunanya untuk menggunakan browser tertentu saja. Jadi kita bisa menyuruh menggunakan browser yang mendukung fitur ini.

// Namun kalau kita mengerjakan proyek situs untuk dilihat oleh umum, maka kita tidak bisa mengatur penggunanya harus menggunakan browser tertentu atau harus menggunakan versi terbaru. Bisa saja orang lain berkunjung ke situs kita menggunakan browser IE. Dan hal ini menyebabkan kode Template Literals kita menjadi error. Jadi teman-teman bisa mempertimbangkan lagi ya, jenis proyek yang sedang dikerjakan seperti apa, dan apakah hendak menggunakan Template Literals atau tidak.