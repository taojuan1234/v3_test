import { defineStore } from 'pinia'
import { getHomeHotSuggests, getHomeCategories, getHomeHouseList } from '@/services'

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houselist: []
  }),
  actions: {
    async fetchHotSuggestData () {
      const res = await getHomeHotSuggests();
      this.hotSuggests = res.data
    },
    async fetchCategoriesData () {
      const res = await getHomeCategories();
      this.categories = res.data;
    },

    //下拉请求数据，每下拉一次currentPage+1
    async fetchHouselistData () {
      const res = await getHomeHouseList(this.currentPage);
      this.houselist.push(...res.data);
      this.currentPage++
    }
  }
})

export default useHomeStore