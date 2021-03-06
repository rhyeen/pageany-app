import axios from 'axios'
import { GET_PAGE_FORMAT } from '@/store/page-format.type'
const BASE_API_URL = `localhost:3000/app`

export default {
  get (pageId, mockCall) {
    return new Promise((resolve, reject) => {
      if (mockCall) {
        return resolve(GET_PAGE_FORMAT)
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
