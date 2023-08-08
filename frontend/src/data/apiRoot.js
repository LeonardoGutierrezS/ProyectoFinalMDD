import axios from 'axios'

const URL = 'http://localhost:3000/'

export default axios.create({
    baseURL: URL,
});