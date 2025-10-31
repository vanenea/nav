<template>
  <view class="page">
    <view class="title">我的导航页</view>

    <view class="grid-box">
      <at-grid
        :data="list"
        @click="go"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AtGrid } from 'taro-ui-vue3'
import Taro from '@tarojs/taro'

const list = ref([
  {
    image: 'https://img.icons8.com/color/96/gitlab.png',
    value: 'GitLab',
    url: 'https://gitlab.example/'
  },
  {
    image: 'https://img.icons8.com/color/96/jenkins.png',
    value: 'Jenkins',
    url: 'https://jenkins.example/'
  },
  {
    image: 'https://img.icons8.com/color/96/swagger.png',
    value: 'Swagger',
    url: 'https://api.example/swagger'
  }
])

const go = (item) => {
  if (item.url) {
    if (process.env.TARO_ENV === 'h5') {
      window.open(item.url, '_blank')
    }
    if (process.env.TARO_ENV === 'weapp') {
      Taro.showToast({ title: '小程序不可直接访问外链', icon: 'none' })
    }
  }
}
</script>

<style lang="scss">

</style>
