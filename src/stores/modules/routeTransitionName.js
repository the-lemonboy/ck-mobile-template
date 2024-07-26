import { defineStore } from 'pinia'
import { ref } from 'vue'
const useRouteTransitionNameStore = defineStore('route-transition-name', () => {
  const routeTransitionName = ref('')

  const setName = (name) => {
    routeTransitionName.value = name
  }

  return {
    routeTransitionName,
    setName,
  }
})

export default useRouteTransitionNameStore
