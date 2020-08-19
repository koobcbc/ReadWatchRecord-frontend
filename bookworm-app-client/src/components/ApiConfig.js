let apiUrl
const apiUrls = {
    //deployed api url
  production: 'https://bookworm-backend-api.herokuapp.com',
  development: 'http://localhost:3000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl