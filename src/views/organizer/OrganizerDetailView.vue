<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Organizer } from '@/types'

const props = defineProps<{
  organizer: Organizer
  id: String
}>()
const { organizer } = toRefs(props)
</script>
<template>
  <p><b>ID:</b> {{ organizer.id }}</p>
  <p><b>Name:</b> {{ organizer.name }}</p>
  <p><b>Address:</b>{{ organizer.address }}</p>
</template>
