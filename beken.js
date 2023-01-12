/**
 * 
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
        age: 26,
        status: [
            {
                timestamp: '04/12/2021',
                message: 'Hari ini gw ketemu mantan dan gw denger dia baru putus',
                mood: 'happy',
                quotes: 'Jangan Bahagia dulu'
            },
            {
                timestamp: '14/01/2022',
                message: 'Hari ini gw ketemu mantan dan gw denger dia baru putus',
                mood: 'happy',
                quotes: 'Jangan Bahagia dulu'
            }
        ]
    },
];

let mail = loginDb[0].email;
let pass = loginDb[0].password;

for (let i = 0; i < userDb.length; i++) {
    const perUser = userDb[i];
    let perNode = userDb[i].status;
    console.log(perUser.username, perUser.age);
    console.log(perNode);
}