import axios from "axios";

export const api = axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5'
})

export const api_key = "30bc964c45e134ba20162160d37cc8fb";