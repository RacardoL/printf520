import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.printf520.com:8080/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})


export default instance
