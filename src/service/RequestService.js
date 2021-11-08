const API_KEY = 'a7805ef624b6d95b036c9c84e70baed0'
const API_HOST = 'http://api.openweathermap.org/data/2.5'

export const get = async (endpoint) => {
    return fetch(`${API_HOST}/weather?q=${endpoint}&appid=${API_KEY}&units=metric`)
            .then(response => response.json());
}

export const localSet = (data) => {
    return localStorage.setItem('@weather-app/data', JSON.stringify(data));
}

