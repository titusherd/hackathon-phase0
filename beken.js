document.body.style.backgroundColor = '#F6F6C9'

let db_sementara = [];

let quotes = {
    sad: [
        "Kegelapan tertentu diperlukan untuk melihat bintang-bintang.",
        "Jangan bersedih untuk sesuatu yang berakhir, berbahagialah karena segala sesuatu terjadi karena suatu alasan.",
        "Jangan pernah menjadi tawanan masa lalumu. Itu hanya pelajaran, bukan hukuman seumur hidup",
        "Hidup ini singkat. Jangan sia-siakan dengan bersedih. Jadilah dirimu apa adanya, berbahagialah, jadilah bebas menjadi apa pun yang kamu inginkan.",
        "Tarik napas. Ini hanya hari yang buruk, bukan kehidupan yang buruk."

    ],
    happy: [
        "Kebahagiaan bukanlah tidak adanya masalah, melainkan kemampuan untuk menghadapinya.",
        "Hanya ada satu kebahagiaan dalam hidup ini, mencintai dan dicintai",
        "Kebahagiaan terbesar dalam hidup adalah keyakinan bahwa kita dicintai; dicintai untuk diri kita sendiri, atau lebih tepatnya, dicintai terlepas dari diri kita sendiri."
    ],
    gloomy: [
        "Walaupun pada awalnya kamu harus banyak mengalah, pada akhirnya kemenangan akan datang padamu.",
        "Kebahagiaan itu hanyalah pantas didapatkan bagi orang-orang yang mampu menunggu kebahagiaan itu datang dengan sabar dan lapang dada.",
        "Dengan kesabaran, segala masalah dapat diatasi dengan baik. Kamu juga akan mampu mendapatkan solusi yang bagus saat menyelesaikannya dengan kepala dingin.",
        "Sabar adalah cara yang harus digunakan untuk menyelesaikan masalah apa pun. Seberat apa pun, akan cepat diselesaikan dengan kesabaran."
    ],
    angry: [
        " Jika kamu sabar dalam satu momen kemarahan, kamu akan terhindar dari 100 hari kesedihan.",
        "Jawaban yang kamu cari tidak pernah datang ketika pikiran sibuk, mereka datang ketika pikiran diam, ketika keheningan berbicara paling keras.",
        "Kamu memiliki kekuatan dalam dirimu untuk bangkit tentang apa pun yang saat ini berusaha untuk menjatuhkanmu.",
        "Banyak kerugian yang terjadi akibat ulah orang yang tidak bisa mengontrol diri. Sebenarnya, orang yang selalu marah-marah akan merugi.",
        "Manusia hebat adalah manusia yang bisa mengendalikan diri saat dikuasai amarah, tenang saat dipermalukan, tersenyum saat diremehkan."
    ],
    Excited: [
        "Satu hal yang kamu miliki yang tidak orang lain miliki adalah dirimu. Suaramu, pikiranmu, ceritamu, visimu. Jadi, tulis dan gambar dan bangun dan bermain dan berdansa dan hidup seperti hanya kamu yang bisa.",
        "Ini bukan tentang mengetahui apa yang kamu lakukan tapi melakukan apa yang kamu ketahui.",
        "keinginan yang kuat adalah energi. Rasakan kekuatan yang datang dari fokus kepada hal-hal yang membuatmu gembira.",
        "Ini adalah tempatmu di dunia, ini adalah kehidupanmu. Jalanilah dan lakukan apa yang dapat kamu lakukan dengannya, dan jadikanlah ia kehidupan yang kamu inginkan"
    ]
};

const dataContainer = document.querySelector('.dataContainer');
let moods = 'Excited';
let rng = Math.floor(Math.random() * ((quotes[moods].length - 1) - 0) + 0);
const div = document.createElement('div');
div.style.padding = '30px'
const nameField = document.getElementById('name')
const btn = document.getElementById('btn')
dataContainer.style.padding = '60px';

// Penggunaan Header 
let h1 = document.querySelector('#hider');
h1.innerText = 'Mental health Journal';
h1.setAttribute('class', 'text-center mb-3');
h1.style.fontFamily = 'Fredoka One';
h1.style.fontSize = '50px';
h1.style.paddingTop = '50px';

//Quotes
let h3 = document.querySelector('#quotes');
h3.style.fontFamily = 'Fredoka One';
h3.setAttribute('class', 'text-center');
h3.style.fontSize = '25px';
h3.innerText = `"${quotes[moods][rng]}"`;


let button = document.querySelector('#btn');
button.style.borderRadius = '10px';
button.style.padding = '10px 35px';
button.style.backgroundColor = "#4FA095";
button.style.border  = "#4FA095";

// Get tanggal
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

// DOM untuk 
btn.addEventListener("click", function (event) {
    event.preventDefault();
    let tempdiv = document.createElement('div');
    if (!nameField.value) {
        alert('Masukan keluhan anda');
    } else {

    h3.innerText = `"${quotes[moods][rng]}"`;

    tempdiv.style.padding = '20px';
    tempdiv.style.width = '50%';
    tempdiv.style.display= 'flex';
    tempdiv.style.flexDirection= 'row';
    tempdiv.style.flexWrap = 'wrap';
    tempdiv.style.justifyContent= 'center';
    tempdiv.style.alignItems= 'center';
    tempdiv.style.backgroundColor = '#BAD1C2';


    db_sementara.push(nameField.value);
    tempdiv.innerText = `${today} | ${nameField.value}`;
    div.appendChild(tempdiv);
    dataContainer.appendChild(div)
    console.log(db_sementara);
    }
})
