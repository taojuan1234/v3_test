<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">{{currentCity.cityName}}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
    <!-- 日期范围 -->
    <div class="section date-range bottom-gray-line" @click="showCalendar=true">
      <!-- 开始 -->
      <div class="start">
        <div class="date">
          <span class="tip"> 入住</span>
          <span class="time">{{startDate}}</span>
        </div>
      </div>
      <div class="stay">共{{stayCount}}晚</div>
      <!-- 结束 -->
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{endDate}}</span>
        </div>
      </div>
    </div>
    <van-calendar v-model:show="showCalendar" type="range" color="#ff9854" :round="false" :show-confirm="false" @confirm="onConfirm"></van-calendar>

    <!-- 价格\人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <div class="section hot-suggests">
      <template v-for="(item,index) in hotSuggests" :key="index">
        <div class="item" :style="{color:item.tagText.color,background:item.tagText.background.color}">{{item.tagText.text}}</div>
      </template>
    </div>

    <!-- 开始搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city";
import useHomeStore from "@/stores/modules/home";
import { formatMonthDay, getDiffDays } from "@/utils/format_date";

const router = useRouter(); //引入路由router的方法
//点击我的位置方法
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log("成功的经纬度", res);
    },
    (error) => {
      console.log("失败的经纬度", error);
    },
    {
      //是否使用高精度
      enableHighAccuracy: true,
      //超时时间
      timeout: 5000,
      //最大缓存时间
      maximumAge: 0,
    }
  );
};

//默认城市名称
const cityName = useCityStore();
const { currentCity } = storeToRefs(cityName);

//切换城市
const cityClick = () => {
  router.push("/city");
};

//日期选择
const showCalendar = ref(false);
const nowDate = new Date();
const newDate = new Date();
newDate.setDate(nowDate.getDate() + 1);

const startDate = ref(formatMonthDay(nowDate));
const endDate = ref(formatMonthDay(newDate));
const stayCount = ref(getDiffDays(nowDate, newDate));

const onConfirm = (value) => {
  const selectStartDate = value[0];
  const selectEndDate = value[1];
  startDate.value = formatMonthDay(selectStartDate);
  endDate.value = formatMonthDay(selectEndDate);
  stayCount.value = getDiffDays(selectStartDate, selectEndDate);
  showCalendar.value = false;
};

// 热门搜索
const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore);

//开始搜索按钮
const searchBtnClick = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value, //开始时间
      endDate: endDate.value, //结束时间
      currentCity: currentCity.value.cityName, //搜索的城市名称
    },
  });
};
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 2px;
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

.section {
  height: 44px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }
  .date {
    display: flex;
    flex-direction: column;
    .tip {
      font-size: 12px;
      color: #999;
    }
    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  .start {
    border-right: 1px solid var(--line-color);
  }
}

.hot-suggests {
  margin: 10px 0;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}
.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>