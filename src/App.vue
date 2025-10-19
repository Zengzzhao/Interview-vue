<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/v-model">v-model的demo</RouterLink>
      <RouterLink to="/key">vue中的key</RouterLink>
      <RouterLink to="/premission">前端权限控制</RouterLink>
      <RouterLink to="/scssPage">scss语法</RouterLink>
      <RouterLink to="/lazyLoadImg">图片懒加载</RouterLink>
      <RouterLink to="/lazyLoadImgByDirective">自定义指令实现图片懒加载</RouterLink>
      <RouterLink to="/lazyLoadImgByScroll">传统滚动监听方式实现图片懒加载</RouterLink>
      <RouterLink to="/test">test</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  display: flex;
  gap: 20px;
}
</style>
