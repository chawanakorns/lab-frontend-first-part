import type { OrganizerState, Organizer } from '@/types'
import { defineStore } from 'pinia'
export const useOrganizerStore = defineStore('organizer', {
  state: (): OrganizerState => ({
    organizer: null
  }),
  actions: {
    setEvent(organizer: Organizer): void {
      this.organizer = organizer
    }
  }
})
