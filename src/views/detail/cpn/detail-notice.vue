<template>
  <div>
    <template-detail headerName="预定须知" facilityName="查看预定须知">
      <template #content>
        <div class="notice-inner">
          <template v-for="(item, index) in oderRules" :key="index">
            <div class="item">
              <span class="title">{{ item.title }}</span>
              <span class="intro">{{ item.introduction }}</span>
              <span class="tip">查看说明</span>
            </div>
          </template>
        </div>
      </template>
    </template-detail>
  </div>
</template>

<script setup>
defineProps({
  oderRules: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.notice-inner {
  .item {
    display: flex;
    margin: 10px 0 20px;
    font-size: 12px;

    .title {
      width: 64px;
      color: #666;
    }

    .intro {
      flex: 1;
      color: #333;
    }
  }
}
</style>