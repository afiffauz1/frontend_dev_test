# PT TRANSISI TEKNOLOGI MANDIRI Front end Developer Test

Web ini dibangun dengan menggunakan HTML, CSS preprocessor SASS, dan Javascript.</br>
telah disediakan juga style hasil dari compile.</br>
Website terbagi menjadi dua bagian utama yaitu bagian kiri menyimpan informasi daftar project, dan sebelah kanan detail project yang dikerjakan.</br>
pada bagian kiri terdapat tombol "+" yang dimana ketika tombol tersebut ditekan maka akan muncul checklist item yang baru.</br>
selain tombol yang disebut tidak ada fungsi lainnya.</br>
</br>
detail project pada bagian kanan berisi item yang dibuat dengan tabel. Itemnya sendiri merupakan sebuat array object.</br>
yang dimana ketika hendak menamplkan terlebih dahulu dilakukan perulangan untuk menyimpan setiap object ke dalam baris tabel.</br>
</br>
</br>

### Tombol tambah checklist item

ketika tombol "+" ditekan maka akan muncul checklist item yang baru.</br>
checklist item beserta statusnya akan ditampilkan secara acak, berdasarkan array yang telah disediakan.</br>
agar bisa mengacak checklist item dibutuhkan dua array, dimana satu array menyimpan daftar tugas, dan array lainnya menyimpan daftar status.</br>
</br>
</br>
mengacak item array membutuhkan fungsi Math.random() yang akan dikalikan dengan jumlah array</br>
sebagai contoh:</br>
array status berisi 5 item maka => Math.random() _ 5.</br>
agar tidak menghasilkan angka koma maka dikombinasikan dengan fungsi Math.floor untuk mengambil nilai bawah.</br>
maka hasilnya akan seperti ini,</br>
Math.floor(Math.random() _ 5);</br>

dimana selanjutnya akan disimpan ke dalam sebuah variabel.</br>
variabel tersebut bertugas untuk dijadikan dalam memilih item array secara acak.</br>
</br>
jadi jika ingin mengambil item array status, dikombinasikan dengan variabel hasil angka acak, menjadi,</br>
array_status[angka_acak]</br>
yang akan menghasilkan terpilihnya item dari array secara acak.</br>

hal yang sama berlaku untuk array task.</br>

selanjutnya tinggal disimpan dan ditampilkan ke dalam browser.</br>
</br>
</br>

### Warna teks status yang berbeda

untuk warna dalam status akan berbeda - beda warnanya sesuai dengan status yang aktif.</br>
pertama ambil terlebih dahulu seluruh elemen td dan ambil isi kontennya.</br>
lalu, lakukan kondisi semisal jika isi konten dari elemen td adalah "Approved" maka warna teks akan berubah menjadi hijau.</br>
ini akan berbeda - beda pada setiap status yang ada.</br>
