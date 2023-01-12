/**
 * Code untuk bagian back end
 */

let loginDb = [
    {
        email: 'ini@monkeychimp.co.id',
        password: 'password',
        userId: 'eh812932'
    },
    {
        email: 'magus@typemoon.co.id',
        password: 'saskeh',
        userId: 'magusPinterz'
    }
];


let userDb = [
    {
        userId: 'eh812932',
        username: 'Aslan Narnian',
        email: 'ini@monkeychimp.co.id',
        age: 26,
        status: [
            {
                timestamp: '12/12/2020',
                message: 'gara-gara covid hari ini gw putus sama dia',
                mood: 'sad',
                quotes: 'Jangan sedih'
            },
            {
                timestamp: '04/12/2021',
                message: 'Hari ini gw ketemu mantan dan gw denger dia baru putus',
                mood: 'happy',
                quotes: 'Jangan Bahagia dulu'
            }
        ]

    },
    {
        userId: 'magusPinterz',
        username: 'Rin Tosahka',
        email: 'magus@typemoon.co.id',
        age: 16,
        status: [
            {
                statsId: '001',
                timestamp: '04/12/2021',
                message: 'haloo',
                mood: 'happy',
                quotes: 'Jangan Bahagia dulu'
            },
            {
                statsId: '002',
                timestamp: '14/01/2022',
                message: 'gagal ujan',
                mood: 'happy',
                quotes: 'Jangan Bahagia dulu'
            }
        ]
    },
];

let moodDb = {
    happy: [],
    sad: [],
    plain: []
}


/**
 * 
 * Proses backend mencangkup :   mainFunction -> submitSign -> login -> getDashboard -> showDashboard  
 *                              -> selectMood -> tulisKeluhan
 */

// main function
function main() {

}


// bagian gateway keeping
function submitSign(email, password) {

}

function login(email, password) {

}


// bagian dalam sesudah log in

function getDashboard(id) {
    let dashboard = {};

    for (let i = 0; i < userDb.length; i++) {
        const perUser = userDb[i];

        if (perUser.userId === id) {
            dashboard = perUser;
        }
    }
    return dashboard;
}

function showDashboard(dashboard) {
    let nama = dashboard.username;
    let umur = dashboard.age;

    return [nama, umur];
}

function tulisSuasana(mood){
    // penentuan warna pada DOM
}

let mood = moodDb['plain'];
let id = loginDb[0].userId;
let dashboard = getDashboard(id);

console.log(showDashboard(dashboard));