<script setup lang="ts">
import { useOrganizerStore } from '@/stores/organizer'
import { storeToRefs } from 'pinia'

const store = useOrganizerStore()
const { organizer } = storeToRefs(store)
</script>
<template>
  <div v-if="organizer">
    <h1>Organizer ID: {{ organizer.id }}</h1>
    <nav>
      <h2>Details</h2>
      &nbsp;
    </nav>
    <RouterView :organizer="organizer" />
  </div>
</template>
