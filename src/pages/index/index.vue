<script setup lang="ts">
import {ref} from 'vue'
import Taro from '@tarojs/taro'

const list = ref([
  {
    iconInfo: {
      size: 30,
      color: '#6190E8',
      value: 'search'     // Taro UI 内置 icon 名
    },
    value: 'GitLab',
    url: 'https://gitlab.example/'
  },
  {
    image: 'https://img.icons8.com/color/96/jenkins.png',
    value: 'Jenkins',
    url: 'https://jenkins.example/'
  },
  {
    image: 'https://img.icons8.com/color/96/jenkins.png',
    value: 'Swagger',
    url: 'https://api.example/swagger'
  }
])

const go = (item) => {
  if (item.url) {
    if (process.env.TARO_ENV === 'h5') {
      if(item.url.startsWith("http") || item.url.startsWith("https")){
        window.open( location.host + item.url, '_blank')
      } else {
        window.open(item.url, '_blank')
      }

    }
    if (process.env.TARO_ENV === 'weapp') {
      Taro.showToast({title: '小程序不可直接访问外链', icon: 'none'})
    }
  }
}
</script>
<template>
  <view class="page">
    <view class="title-with-bar">我的标题</view>
    <AtGrid :data="list" :hasBorder="true" @click="go"/>
  </view>
</template>
<style lang="scss">

</style>
