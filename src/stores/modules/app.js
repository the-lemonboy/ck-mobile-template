import { defineStore } from 'pinia'
import {ref} from 'vue'
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const useAppStore = defineStore('app', () => {
  const theme = prefersDark ? 'dark' : 'light'
  const mode = ref(theme)

  const switchMode = (val) => {
    mode.value = val
  }

  return {
    mode,
    switchMode,
  }
}, {
  persist: true,
})

export default useAppStore
