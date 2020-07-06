// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8080;
const callback = () => {
    console.log(`Weather journal is running on port ${port}`)
}

//Set up the server
app.listen(port, callback());

//Create a get request
app.get('/all', (request, response) => {
    response.send(projectData);
});

//Create a post request
app.post('/add', addWeather);

function addWeather (request, response){
    response.send('POST Received')
    projectData.temperature = request.body.temperature;
    projectData.date = request.body.date;
    projectData.user_response = request.body.user_response;
}


