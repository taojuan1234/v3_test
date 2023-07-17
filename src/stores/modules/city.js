import { defineStore } from 'pinia'
import { getCityAll } from '@/services'

/**
 * defineStore('name',{})
 * name相当于id 唯一标识
 */
const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: {
      cityName: '武汉'
    }
  }),
  actions: {
    async fetchAllCitiesData () {
      const res = await getCityAll();
      this.allCities = res.data
    }
  }
})

export default useCityStore
