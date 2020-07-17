const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

// async function getNews(title) {
//     return axios.get('https://api.aylien.com/news/stories', {
//         params: {
//             title: `${title}`
//         },
//         headers: {
//             "X-AYLIEN-NewsAPI-Application-ID": process.env.APP_ID,
//             "X-AYLIEN-NewsAPI-Application-Key": process.env.API_KEY
//         }
//     }).then(r => {
//         let dataSet = r.data.stories; //array of objects
//         return dataSet.map(data => {
//             return data.title
//         })
//     });
// }
//
// async function getTitles(title) {
//     console.log(await getNews(title).then(r => {return r}))
// }
// getTitles('brooke');
