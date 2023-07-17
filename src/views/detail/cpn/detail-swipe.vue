<template>
  <div class="swipe-list">
    <van-swipe :autoplay="3000" indicator-color="white" class="swipe">
      <!-- 遍历图片，设置自动播放3秒，指示器颜色白色 -->
      <template v-for="(item, index) in swipeData">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <!-- 此处的key为字符串类型，而enumPictureCategory为数字类型，所以只能使用==；
          ==和===的区别在于，==只判断值是否相等；而===会同时判断类型是否相等 -->
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              <span class="text">{{ getNum(value[0].title) }}</span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">{{
                getCategoryIndex(swipeData[active]) }}/{{ value.length }}</span>
            </span>

          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []

  }
})

//对返回的数据进行分类处理
const swipeGroup = {};
//对数据进行循环遍历，查找对象中是否存在，不存的话设置为空数组，存在的话将数据存进去；
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = [];
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}

//提取中括号中的汉字
const nameReg = /【(.*?)】/i
const getNum = (name) => {
  const result = nameReg.exec(name)
  return result[1]
}

//修改索引
const getCategoryIndex = (item) => {
  const valueArray = swipeGroup[item.enumPictureCategory];
  return Number(valueArray.findIndex(data => data === item)) + 1
}
</script>

<style lang="less" scoped>
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  display: flex;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);

  .item {
    margin: 0 3px;

    &.active {
      padding: 0 3px;
      border-radius: 5px;
      background-color: #fff;
      color: #333;
    }
  }

}

.swipe-list {
  .swipe {
    .item {
      img {
        width: 100%;
      }
    }
  }
}
</style>