fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((res) => {
        console.log('Response:', res); // Debug log to check the response object
        return res.json();
    })
    .then((data) => {
        console.log('Parsed JSON:', data); // Debug log to check the parsed JSON
        if (data && data.joke) {
            console.log('Joke:', data.joke); // Log the joke text
        } else {
            console.log('No joke found.');
        }
    })
    .catch((error) => console.log('Invalid request:', error));
