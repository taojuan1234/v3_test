<template>
  <div class="templateInfo">
    <div class="title">
      <h2 class="headerName">{{ headerName }}</h2>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="facility">
      <span>{{ facilityName }}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
defineProps({

  headerName: {
    type: String,
    default: '头部标题'
  },
  facilityName: {
    type: String,
    default: '尾部标题'
  }
})
</script>

<style lang="less" scoped>
.templateInfo {
  margin-top: 12px;
  padding: 0 15px;
  border-top: 5px solid #f2f3f4;
  background-color: #fff;

  .title {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;

    .headerName {
      font-size: 20px;
      color: #333;
    }
  }

  .content {
    padding: 8px 0;
  }

  .facility {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    height: 44px;
    line-height: 44px;
    font-weight: 600;
    color: #ff9645;
  }
}
</style>