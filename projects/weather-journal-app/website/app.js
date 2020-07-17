// Personal API Key for OpenWeatherMap API
const apiKey = 'a90b047a4939b21dde8073caf5d60c41'
const base_url = `https://api.openweathermap.org/data/2.5/weather?zip=`

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', async () => {
    const zipcode = document.getElementById('zip').value;
    const user_response = document.getElementById('feelings').value;

    /* Function called by event listener */
    await getWeatherData(base_url, zipcode, apiKey, user_response)
        .then(function(data){
            postWeatherData('/add', data);
        })
        .then(function() {
            putProjectData('/all');
       })
})

/* Function to GET Web API Data*/
const getWeatherData = async (url,zipcode,apiKey,userResponse) => {
    const request = await fetch(url + zipcode + '&appid=' + apiKey);
    try {
        const response = await request.json();
        return {
            temperature: ((response.main['temp'] - 273.15) * 9 / 5 + 32).toFixed(2) + ' \u00B0F',
            date: new Date(),
            user_response: userResponse
        }
    } catch (error) {
        console.log("error", error)
    }
}

/* Function to POST data */
const postWeatherData = async (url = '',data={}) => {
    const response= await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
        return await response.json()
    } catch(error){
        console.log('error', error)
    }
}

/* Function to GET Project Data */
const putProjectData = async (url='') => {
    const response= await fetch(url)
    try {
        const data = await response.json();
        document.getElementById('date').innerHTML = 'Date: ' + data.date;
        document.getElementById('temp').innerHTML = 'Current Temperature: ' + data.temperature;
        document.getElementById('content').innerHTML = 'Feeling: ' + data.user_response;
    } catch(error){
        console.log('error', error)
    }
}