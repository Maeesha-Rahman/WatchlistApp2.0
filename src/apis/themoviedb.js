import axios from 'axios';

const KEY = 'a4aa9b932ee8ac5ab8f7245f1d7364bb';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/search',
    params: {
        api_key: KEY,
        format: 'json',
        include_adult: false
    }
})
