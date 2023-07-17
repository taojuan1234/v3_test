<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houselist" :key="item.data.houseId">
        <house-item-v9 @click="jumpDetail(item.data)" v-if="item.discoveryContentType === 9"
          :item-data="item.data"></house-item-v9>
        <house-item-v3 @click="jumpDetail(item.data)" v-else-if="item.discoveryContentType === 3"
          :item-data="item.data"></house-item-v3>
      </template>
    </div>
  </div>
</template>

<script setup>
import HouseItemV9 from "@/components/house-item-v9/house-item-v9.vue";
import HouseItemV3 from "@/components/house-item-v3/house-item-v3.vue";
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import { useRouter } from 'vue-router'

const homeStore = useHomeStore();
const { houselist } = storeToRefs(homeStore);

const router = useRouter()

const jumpDetail = (item) => {
  router.push('/detail/' + item.houseId)
}
</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>