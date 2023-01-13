document.body.style.backgroundColor = '#E7FBBE'

let db_sementara = [];

let quotes = {
    Sad: {
        quotes: [
            "Kegelapan tertentu diperlukan untuk melihat bintang-bintang.",
            "Jangan bersedih untuk sesuatu yang berakhir, berbahagialah karena segala sesuatu terjadi karena suatu alasan.",
            "Jangan pernah menjadi tawanan masa lalumu. Itu hanya pelajaran, bukan hukuman seumur hidup",
            "Hidup ini singkat. Jangan sia-siakan dengan bersedih. Jadilah dirimu apa adanya, berbahagialah, jadilah bebas menjadi apa pun yang kamu inginkan.",
            "Tarik napas. Ini hanya hari yang buruk, bukan kehidupan yang buruk."
        ],
        color: '#6FB2D2'
    },
    Happy: {
        quotes: [
            "Kebahagiaan bukanlah tidak adanya masalah, melainkan kemampuan untuk menghadapinya.",
            "Hanya ada satu kebahagiaan dalam hidup ini, mencintai dan dicintai",
            "Kebahagiaan terbesar dalam hidup adalah keyakinan bahwa kita dicintai; dicintai untuk diri kita sendiri, atau lebih tepatnya, dicintai terlepas dari diri kita sendiri."
        ],
        color: '#A4BE7B'
    },
    Gloomy: {
        quotes: [
            "Walaupun pada awalnya kamu harus banyak mengalah, pada akhirnya kemenangan akan datang padamu.",
            "Kebahagiaan itu hanyalah pantas didapatkan bagi orang-orang yang mampu menunggu kebahagiaan itu datang dengan sabar dan lapang dada.",
            "Dengan kesabaran, segala masalah dapat diatasi dengan baik. Kamu juga akan mampu mendapatkan solusi yang bagus saat menyelesaikannya dengan kepala dingin.",
            "Sabar adalah cara yang harus digunakan untuk menyelesaikan masalah apa pun. Seberat apa pun, akan cepat diselesaikan dengan kesabaran."
        ], color: '#F0EBCE'
    },
    Angry: {
        quotes: [
            " Jika kamu sabar dalam satu momen kemarahan, kamu akan terhindar dari 100 hari kesedihan.",
            "Jawaban yang kamu cari tidak pernah datang ketika pikiran sibuk, mereka datang ketika pikiran diam, ketika keheningan berbicara paling keras.",
            "Kamu memiliki kekuatan dalam dirimu untuk bangkit tentang apa pun yang saat ini berusaha untuk menjatuhkanmu.",
            "Banyak kerugian yang terjadi akibat ulah orang yang tidak bisa mengontrol diri. Sebenarnya, orang yang selalu marah-marah akan merugi.",
            "Manusia hebat adalah manusia yang bisa mengendalikan diri saat dikuasai amarah, tenang saat dipermalukan, tersenyum saat diremehkan."
        ], color: '#FF6464'
    },
    Excited: {
        quotes: [
            "Satu hal yang kamu miliki yang tidak orang lain miliki adalah dirimu. Suaramu, pikiranmu, ceritamu, visimu. Jadi, tulis dan gambar dan bangun dan bermain dan berdansa dan hidup seperti hanya kamu yang bisa.",
            "Ini bukan tentang mengetahui apa yang kamu lakukan tapi melakukan apa yang kamu ketahui.",
            "keinginan yang kuat adalah energi. Rasakan kekuatan yang datang dari fokus kepada hal-hal yang membuatmu gembira.",
            "Ini adalah tempatmu di dunia, ini adalah kehidupanmu. Jalanilah dan lakukan apa yang dapat kamu lakukan dengannya, dan jadikanlah ia kehidupan yang kamu inginkan"
        ], color: '#38E54D'
    }
};
// Menampakkan Header
let h1 = document.querySelector('#hider');
h1.innerText = 'Mental health Journal';

// set default moods, warna, rng untuk mengambil quote, dan menampilkan quote
let moods = 'Happy';
let color = '';
let rng = Math.floor(Math.random() * ((quotes[moods].quotes.length - 1) - 0) + 0);
let h3 = document.querySelector('#quotes');
h3.innerText = `"${quotes[moods].quotes[rng]}"`

// mengambil kategori dari setiap element dan melakukan event listener
let angry = document.getElementById('angry');
let sad = document.getElementById("sad")
let excited = document.getElementById("excited")
let gloomy = document.getElementById("gloomy")
let happy = document.getElementById("happy")

// untuk setiap kategori, ganti warna card yang akan ditampilkan,
// ganti quote sesuai moods, ganti warna header.
angry.addEventListener("click", function (event) {
    event.preventDefault();
    moods = 'Angry';
    h3.innerText = `"${quotes[moods].quotes[rng]}"`;
    h1.style.color = quotes[moods].color;
})

sad.addEventListener("click", function (event) {
    event.preventDefault();
    moods = 'Sad';
    h3.innerText = `"${quotes[moods].quotes[rng]}"`;
    h1.style.color = quotes[moods].color;
})

excited.addEventListener("click", function (event) {
    event.preventDefault();
    moods = 'Excited';
    h3.innerText = `"${quotes[moods].quotes[rng]}"`;
    h1.style.color = quotes[moods].color;
})

gloomy.addEventListener("click", function (event) {
    event.preventDefault();
    moods = 'Gloomy';
    h3.innerText = `"${quotes[moods].quotes[rng]}"`;
    h1.style.color = '#635666';
})

happy.addEventListener("click", function (event) {
    event.preventDefault();
    moods = 'Happy';
    h3.innerText = `"${quotes[moods].quotes[rng]}"`;
    h1.style.color = quotes[moods].color;
})



// mendapatkan user input dari text
const nameField = document.getElementById('name')
const dataContainer = document.querySelector('.dataContainer');
dataContainer.style.padding = '60px';


// mendapatkan timestamp
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;


// membuat dev untuk space card
const dev = document.createElement('div');
dev.style.padding = '30px'
const btn = document.getElementById('btn');

// button untuk menulis dan post
btn.addEventListener("click", function (event) {
    event.preventDefault();

    if (!nameField.value) {
        alert('Masukan keluhan anda');
    } else {
        db_sementara.push(
            {
                waktu: today,
                pesan: nameField.value,
                mood: moods
            });

        let tempdiv = document.createElement('div');
        tempdiv.setAttribute("id", "tempdiv");
        tempdiv.style.backgroundColor = quotes[moods].color;
        tempdiv.innerText = `${today} \n ${nameField.value}`;
        tempdiv.setAttribute("class", "mt-2 col-md-12")
        tempdiv.style.width = '20%';
        dev.appendChild(tempdiv);
        tempdiv.style.animation = "fade-in 0.6s";
        dataContainer.appendChild(dev)
        nameField.value = '';
        console.log(db_sementara);
    }
})

// fungsi untuk menghapus setiap cards
const btn2 = document.querySelector('.btn2');
function remove(parents, child) {
    parents.removeChild(child);
}

btn2.addEventListener("click", function (event) {
    event.preventDefault();
    remove(dev, tempdiv);
})