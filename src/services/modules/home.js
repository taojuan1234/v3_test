import hyRequest from '../request'

//获取热门城市
export function getHomeHotSuggests () {
  return hyRequest.get({
    url: '/home/hotSuggests'
  })
}

//图标信息
export function getHomeCategories () {
  return hyRequest.get({
    url: '/home/categories',
  })
}

//获取房源信息
export function getHomeHouseList (currentPage) {
  return hyRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}