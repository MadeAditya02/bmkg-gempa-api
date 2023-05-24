# API Gempa BMKG
<p>API yang menyediakan data seputar gempa bumi yang terjadi di Indonesia. Data tersebut bersumber dari data resmi BMKG yang didapat melalui API milik BMKG. API ini dibuat untuk mempermudah pengaksesan data pada API BMKG serta menangani masalah CORS yang terjadi ketika mengakses API milik BMKG.</p>
<p>⚠ <b>API ini bisa saja tidak stabil sewaktu-waktu, tergantung pada data pusat. Harap data ini tidak disalahgunakan.<b/><p/>
<!-- <img src="https://forthebadge.com/images/badges/built-with-love.svg" /> <br /> -->
<!-- <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" /> -->

## Endpoints
* [/gempa](https://bmkg-gempa-api.vercel.app/gempa)
> Menampilkan data gempa terbaru (1 data gempa)
* [/terkini](https://bmkg-gempa-api.vercel.app/terkini)
> Menampilkan 15 data gempa terbaru dengan magnitudo 5.0+
* [/dirasakan](https://bmkg-gempa-api.vercel.app/dirasakan)
> Menampilkan 15 data gempa terbaru yang dirasakan
