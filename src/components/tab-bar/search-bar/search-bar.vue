<template>
  <div class="search">
    <div class="select-time">
      <div class="item start">
        <div class="name">住</div>
        <!-- 开始时间 -->
        <div class="date">{{startDateStr}}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">{{endDateStr}}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<script setup>
import useMainStroe from "@/stores/modules/main";
import { storeToRefs } from "pinia";
import { formatMonthDay } from "@/utils/format_date";
import { computed } from "@vue/reactivity";

const mainStroe = useMainStroe();
const { startDate, endDate } = storeToRefs(mainStroe);
const startDateStr = computed(() => {
  formatMonthDay(startDate.value, "MM.DD");
});
const endDateStr = computed(() => {
  formatMonthDay(endDate.value, "MM.DD");
});
</script>

<style lang="less" scoped>
</style>