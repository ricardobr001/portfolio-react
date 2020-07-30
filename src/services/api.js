import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ricardobr001-backend.herokuapp.com'
  // baseURL:
  //   process.env.NODE_ENV === 'development'
  //     ? 'http://localhost:3333'
  //     : 'https://ricardobr001-backend.herokuapp.com'
})

export default api
