<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/v-model">v-model的demo</RouterLink>
      <RouterLink to="/key">vue中的key</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper{
  display: flex;
  gap:20px;
}
</style>
