import HYRequest from '../request'

//城市列表
export function getCityAll () {
  return HYRequest.get({
    url: '/city/all'
  })
}