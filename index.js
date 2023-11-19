import axios from "axios";
import inquirer from 'inquirer';

inquirer
  .prompt([
    {
        message: "(with capital letters) City: ",
        name: "CITY",
    },
  ])
  .then((answers) => {
    const city_name = answers.CITY;
    const API_KEY = '8be57bb05636bcbfc05c9b700ca488bd'; 
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;

    axios.get(API_URL)
      .then(response => {
        const weatherData = response.data;
        console.log(`Weather Information - ${city_name}`);
        console.log(`Temperature: ${weatherData.main.temp}°C`);
        console.log(`Condition: ${weatherData.weather[0].description}`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);
      })
      .catch(error => {
        console.error('Weather information could not be retrieved:', error.message);
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
