import type { Organizer } from '@/types'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL as string,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: Number, page: Number) {
    return apiClient.get('/organizers?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id: number) {
    return apiClient.get('/organizers/' + id)
  },
  saveEvent(organizer: Organizer) {
    return apiClient.post('/organizers', organizer)
  }
}
