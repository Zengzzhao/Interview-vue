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
