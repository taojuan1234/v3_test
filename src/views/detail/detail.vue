<template>
  <div>
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
    <div class="main" v-if="mainPart">
      <detail-swipe :swipeData="mainPart.topModule.housePicture.housePics"></detail-swipe>
      <detail-info :topInfos="mainPart.topModule"></detail-info>
      <detail-house :facility-info="mainPart.dynamicModule.facilityModule.houseFacility"></detail-house>
      <detail-landlord :landlordInfo="mainPart.dynamicModule.landlordModule"></detail-landlord>
      <detail-comment :comment="mainPart.dynamicModule.commentModule"></detail-comment>
      <detail-notice :oder-rules="mainPart.dynamicModule.rulesModule.orderRules"></detail-notice>
      <detail-map :position="mainPart.dynamicModule.positionModule"></detail-map>
      <detail-intro :priceIntro="mainPart.introductionModule"></detail-intro>
    </div>

    <div class="footer">
      <img src="~@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { getDetailInfos } from '@/services'
import detailSwipe from './cpn/detail-swipe.vue'
import detailInfo from './cpn/detail-infos.vue'
import detailHouse from './cpn/detail-house.vue'
import detailLandlord from './cpn/detail-landlord.vue'
import detailComment from './cpn/detail-comment.vue'
import detailNotice from './cpn/detail-notice.vue'
import detailMap from './cpn/detail-map.vue'
import detailIntro from './cpn/detail-intro.vue'


const router = useRouter()
const route = useRoute()
const houseId = route.params.id
//获取房源信息
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
//进入页面自动调用
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})

//返回
const onClickLeft = () => {
  router.back()
}


</script>

<style lang="less" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>