// import LocationService from "./LocationService";

const url = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'c06516a3bb199bb320181c589f72433c'

let HttpHeaders = new Headers();

var init: RequestInit = { method: 'GET',
            headers: HttpHeaders,
            mode: 'cors',
            cache: 'default' };
        
class WeatherService {

    async getWeatherByCity(city: string){
        return await fetch(`${url}?q=${city}&appid=${apiKey}&lang=fr&units=metric`,init).then(resp=>resp.json());
    }

    async getWeatherByLocation(lat: string, lon: string){
        return await fetch(`${url}?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=fr&units=metric`,init).then(resp=>resp.json())
    }

}

export default Object.freeze(new WeatherService());