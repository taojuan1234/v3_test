import hyRequest from '../request'

//获取房源信息
export function getDetailInfos(houseId) {
  return hyRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}


// import hyRequest from '../request'

// export function getDetailInfos(houseId) {
//   return hyRequest.get({
//     url: "/detail/infos",
//     params: {
//       houseId
//     }
//   })
// }
