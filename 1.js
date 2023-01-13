// quote generator 
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
  
  let mood = "sad";
  let randomQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
  console.log(randomQuote);
  
  // function getMood(e){
  //     mood = e.target.value;
  //     randomQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
  //     console.log(randomQuote);
  //   }
    
  // buat connect sama functionnya nanti
  //   document.getElementById("myButton").addEventListener("click", getMood);
  
  // event 
  
  //conditional 
  function getMoodColor(mood) {
      if (mood === "happy") {
          return "yellow";
      } else if (mood === "sad") {
          return "blue";
      } else if (mood === "excited") {
          return "orange";
      } else if (mood === "angry") {
          return "red";
      } else if (mood === "neutral") {
          return "gray";
      } else {
          return "black";
      }
  }
  
  // connect button ke HTML
  <button id="mood-button"> Set Mood </button>
  <div id="mood-box"></div>
  
  // mood button 
  let moodButton = document.getElementById("mood-button");
  moodButton.addEventListener("click", function() {
      document.getElementById("mood-box").style.backgroundColor = getMoodColor("happy");
  });