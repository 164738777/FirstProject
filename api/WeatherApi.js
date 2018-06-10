/**
 * 天气API
 * http://aider.meizu.com/app/weather/listWeather?cityIds=101280101
 * pdf例子的Api: http://api.openweathermap.org/data/2.5/weather?q=10001&units=imperial&APPID=bbeb34ebf60ad50f7893e7440a1e2b0b
 */
const weatherUrl = "http://aider.meizu.com/app/weather/listWeather";

function zipUrl(city) {
    city = 101280101; // Default
    return `${weatherUrl}?cityIds=${city}`;
}

function fetchForecast(city) {
    return fetch(zipUrl(city))
        .then(response => response.json())
        .then(responseJson => {
            const object = responseJson.value[0];
            const {realtime} = object;
            return {
                main: object.city,
                description: realtime.weather,
                temp: realtime.temp
            };
        })
        .catch(error => {
            console.error(error);
        });
}

export default {fetchForecast: fetchForecast};