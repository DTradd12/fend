const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const AylienNewsApi = require("aylien-news-api"); // Causing Error

// let defaultClient = AylienNewsApi.ApiClient.instance;
//
// let app_id = defaultClient.authentications.app_id;
// app_id.apiKey = process.env.API_ID;
//
// let app_key = defaultClient.authentications.app_key;
// app_key.apiKey = process.env.API_KEY;
//
// let api = new AylienNewsApi.DefaultApi();
//
// let opts = {
//     title: "trump",
//     sortBy: "social_shares_count.facebook",
//     notLanguage: ["en"],
//     publishedAtStart: "NOW-7DAYS",
//     publishedAtEnd: "NOW",
//     entitiesBodyLinksDbpedia: [
//         "http://dbpedia.org/resource/Donald_Trump",
//         "http://dbpedia.org/resource/Hillary_Rodham_Clinton"
//     ]
// };
//
// let callback = function(error, data, response) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log("API called successfully. Returned data: ");
//         console.log("========================================");
//         for (let i = 0; i < data.stories.length; i++) {
//             console.log(data.stories[i].title + " / " + data.stories[i].source.name);
//         }
//     }
// };
//
// api.listStories(opts, callback);

// DEFINE/SETUP SERVER WITH EXPRESS
const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});



