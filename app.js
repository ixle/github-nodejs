//permasalahan : kita perlu cara cepat untuk medapatkan profil github di js
//solusi : gunakan nodeJs untuk Terhubung dengan GitHub API
//Ambil Data Dari JSON trus tampilakn dgn NodeJS ke Konsole

//TODO pertama kita perlu konek ke github
let https = require('https');
let option = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/ixle',
    method: 'GET',
    headers: {
        'user-agent' : 'nodeJS'
    }
}

let = request = https.request(option, (result) => {
    console.log("Respond = " + result.statusCode);
})

request.end();

request.on('error', (er) => {
    console.log(er);
})