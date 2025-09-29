<template>
    <h1>vue中的key</h1>
    <!--  -->
    <div>
        <h2>有key重建无key复用</h2>
        <div v-trace>{{ count }}</div>
        <div v-trace :key="count">{{ count }}</div>
        <div>第一个元素在count改变时vuediff同层相比时发现这个元素前后是一样的(元素标签、key)所以直接复用patch</div>
        <div>第二个元素在count改变时vuediff同层相比发现这个元素前后不是一样的(元素标签一样但是key不一样),所以重建新dom销毁旧dom</div>
    </div>
    <!--  -->
    <div>
        <h2>v-if互斥分支不用于Vuediff,直接一个卸载一个挂载</h2>
        <button @click="visibility = !visibility">click</button>
        <div v-if="visibility" v-trace>hello--1</div>
        <div v-else v-trace>hello--2</div>
        <div>这两个是互斥分支，不是同一个VNode,一个卸载的同时另一个挂载,不会复用</div>
    </div>
    <!--  -->
    <div>
        <h2>列表中的key(使用索引index的情况)</h2>
        <button @click="items.unshift(0)">add</button>
        <div v-for="(item, index) in items" :key="index">{{ item }}</div>
        <hr>
        <div v-for="(item, index) in items" :key="item">{{ item }}</div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
// 常规key相关
const count = ref(0)
setInterval(() => count.value++, 1000)
// v-if相关
const visibility = ref(false)
// 列表中的key相关
const items = ref([1, 2, 3, 4, 5])
</script>

<style scoped>
.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}
</style>