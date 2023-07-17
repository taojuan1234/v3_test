<template>
  <div class="city-group">
    <!-- 热门城市 -->
    <van-index-bar :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门">
        <div class="list">
          <template v-for="(city, index) in groupData.hotCities">
            <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
          </template>
        </div>
      </van-index-anchor>

      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group"></van-index-anchor>
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)"></van-cell>
        </template>
      </template>
    </van-index-bar>
    <!-- 城市排名 -->
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useCityStore from '@/stores/modules/city';
import { computed } from "vue";
/**
 * props传值
 * 子组件需要使用defineProps({})
 *
 * 使用时 props.groupData
 */
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

//遍历获取城市列表
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});

//城市点击更换首页城市名称
const router = useRouter();
const cityStroe = useCityStore();
const cityClick = (city) => {
  cityStroe.currentCity = city;
  router.back();
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>