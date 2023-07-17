import { defineStore } from 'pinia'

//实时获取当前日期及次日日期
const startDate = new Date();
const endDate = new Date();
endDate.setDate(startDate.getDate() + 1)

const useMainStroe = defineStore('main', {
  state: () => ({
    token: '',
    startDate: startDate,
    endDate: endDate,
    isLoading: false
  })
})

export default useMainStroe
