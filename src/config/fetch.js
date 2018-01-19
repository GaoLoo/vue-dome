import { baseUrl } from './env'
import axios from 'axios'

// axios
axios.defaults.baseURL = baseUrl
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

// Request
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

 // Response
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default {
  get (url, data = {}) {
    return axios.get(url, {params: data})
  },
  patch (url, data = {}) {
    return axios.patch(url, data)
  },
  post (url, data = {}) {
    return axios.post(url, data)
  },
  put (url, data = {}) {
    return axios.put(url, data)
  },
  delete (url, data = {}) {
    return axios.delete(url, {params: data})
  }
}
