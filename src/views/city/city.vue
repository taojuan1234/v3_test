<template>
  <div class="city top-page">
    <div class="top">
      <!-- shap:搜索框形状
           show-action:是否在搜索框右侧显示取消按钮 默认false
       -->
      <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick" />

      <!-- tab切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-heighr="3">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="index">
        <city-group v-show="tabActive == key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city";
import cityGroup from "./city-group.vue";
const router = useRouter();
const searchValue = ref("");
const tabActive = ref();
const cancelClick = () => {
  router.back();
};
//pinia中取值
const cityStroe = useCityStore();
cityStroe.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStroe);
</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>