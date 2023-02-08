import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://hacktree-production.up.railway.app',
})

api.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem('access_token')

    if (access_token) {
      config.headers.access_token = access_token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('access_token')
    }
    return Promise.reject(error)
  }
)