import axios from 'axios'
const BASE_API_URL = `localhost:3000/app`

export default {
  get (pageId, mockCall) {
    return new Promise((resolve, reject) => {
      if (mockCall) {
        return resolve({ test: 'this is a test' })
      }
      axios
        .get(`${BASE_API_URL}/page/${pageId}/format`)
        .then(response => {
          resolve(response.data)
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}
