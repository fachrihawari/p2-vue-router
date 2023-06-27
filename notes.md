# Vue Router

Saat temen temen develop challenge 2, temen temen mungkin nemu keanehan, apa keanehannya? ketika temen temen pindah pindah halaman dichallenge 2 lalu temen temen reload browser-nya, maka tampilan-nya akan balik ke halaman utama, kenapa? karena sebener-nya yg temen temen kerjakan itu hanya dipath slash. jd browser ga tau kapan harus nampilin halaman home, kapan halaman about dsb, jd setiap reload akan balik ke halaman slash.

Downside
1. Tidak bisa share spesific link
2. User Experience-nya kurang baik
3. Tidak baik untuk Search Engine

Demoin pake ini: https://cmsvuechallenge.web.app bisa sambil compare ama Tokopedia

## Apa itu Vue Router

[bisa tampilkan tokped]

Nah dengan Vue Router ini kita bisa memetakan url dan component yang kita punya sehingga ketika temen temen buka /about, maka yang tampil adalah halaman About.

## Cara Pasang Vue Router

1. Pilih pasang vue router saat npm init vue
2. Setup from vue-router scratch

Jelasin slide 4-6

## Demo (npm init vue)

1. Tunjukin kalo ada beberapa folder baru
2. Bedah router/index.js
3. Beda main.js
4. Jelasin perbedaan History Mode: https://router.vuejs.org/guide/essentials/history-mode.html

