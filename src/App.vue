<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
    <loading></loading>
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
import loading from '@/components/loading/loading.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="less" scoped></style>