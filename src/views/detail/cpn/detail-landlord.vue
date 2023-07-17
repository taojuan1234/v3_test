<template>
  <div>
    <template-detail headerName="房东介绍" facilityName="查看房东主页">
      <template #content>
        <div class="intro">
          <!-- 级别样式 -->
          <div class="top">
            <img :src="landlordInfo.topScroll" alt="">
          </div>

          <!-- 联系房东 -->
          <div class="header">
            <div class="left">
              <div class="avatar">
                <img :src="landlordInfo.hotelLogo" alt="">
              </div>
              <div class="info">
                <div class="name">{{ landlordInfo.hotelName }}</div>
                <div class="tags">
                  <template v-for="(item, index) in landlordInfo.hotelTags" :key="index">
                    <div class="item" :style="{ color: item.tagText.color }">
                      <span>{{ item.tagText.text }}</span>
                      <span v-if="index !== landlordInfo.hotelTags.length - 1" style="margin:0 5px;">|</span>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="contact">联系房东</div>
            </div>
          </div>

          <!-- 好评率 -->
          <div class="bottom">
            <template v-for="(item, index) in landlordInfo.hotelSummary" :key="index">
              <div class="item">
                <div class="title">{{ item.title }}</div>
                <div class="score">{{ item.introduction }}</div>
                <div class="desc">{{ item.tip }}</div>
              </div>
            </template>

          </div>
        </div>

      </template>


    </template-detail>
  </div>
</template>

<script setup>
defineProps({
  landlordInfo: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.intro {

  .top {
    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .left {
      display: flex;

      .avatar {
        img {
          height: 54px;
          width: 54px;
        }
      }

      .info {
        .name {
          margin-top: 8px;
          font-size: 16px;
          font-weight: 600;
        }

        .tags {
          display: flex;
          margin-top: 5px;
          font-size: 12px;
        }
      }
    }

    .right {
      .contact {
        height: 24px;
        line-height: 24px;
        border-radius: 5px;
        padding: 0 12px;
        font-size: 12px;
        color: #fff;
        background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
      }
    }


  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 50px 10px 10px;

    .item {
      font-size: 12px;

      .title {
        color: #999;
      }

      .score {
        margin: 5px 0;
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }

      .desc {
        color: #666;
      }
    }
  }

}
</style>