<template>
  <div class="info">
    <!-- 大标题 -->
    <div class="houseName">
      {{ topInfos.houseName }}
    </div>
    <!-- tag -->
    <div class="houseTag">
      <template v-for="(item, index) in topInfos.houseTags" :key="index">
        <span v-if="item.tagText" :style="{ color: item.tagText.color, background: item.tagText.background.color }">{{
          item.tagText.text
        }}</span>
      </template>
    </div>
    <!-- 评分 -->
    <div class="overall">
      <div class="number">
        <span class="super-praise">{{ topInfos.commentBrief.overall }}</span>
        <span class="scoreTitle">{{ topInfos.commentBrief.scoreTitle }}</span>
        <span class="brief">{{ topInfos.commentBrief.commentBrief }}</span>
      </div>
      <div class="comment">
        {{ topInfos.commentBrief.totalCount }}条评论
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 地址 -->
    <div class="address">
      <div class="address-info">{{ topInfos.nearByPosition.address }}</div>
      <div class="map">
        地图·周边
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  topInfos: {
    type: Object,
    defalut: () => ({})
  }
})

</script>

<style lang="less" scoped>
.info {
  padding: 16px;
  background-color: #fff;

  .houseName {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }

  .houseTag {
    margin: 10px 0;

    span {
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }

  .overall {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;

    .number {
      .super-praise {
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }

      .scoreTitle {
        font-size: 14px;
        color: #333;
        margin: 0 3px;
      }

      .brief {
        color: #666;
      }
    }

    .comment {
      color: #ff9645;
    }
  }

  .address {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;

    .address-info {
      flex: 1;
      font-size: 14px;
      font-weight: 700;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .map {
      width: 70px;
      color: #ff9645;
    }
  }
}
</style>