import axios from 'axios';
let api=axios.create({
    baseURL:"https://raw.githubusercontent.com"
})

export default api;