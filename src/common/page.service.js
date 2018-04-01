import axios from 'axios'
import { GET_PAGE } from '@/store/page.type'
const BASE_API_URL = `localhost:3000/app`

export default {
  get (pageId, mockCall) {
    return new Promise((resolve, reject) => {
      if (mockCall) {
        return resolve(GET_PAGE)
      }
      axios
        .get(`${BASE_API_URL}/page/${pageId}`)
        .then(response => {
          resolve(response.data)
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}
