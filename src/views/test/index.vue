<template>
    <div class="box"></div>
    <div class="myBox"></div>
    <div class="box"></div>
</template>

<script setup lang='ts'>
import { onBeforeUnmount, onMounted } from 'vue';
let myBox: HTMLElement

function onScroll() {
    const rect = myBox.getBoundingClientRect()
    console.log(rect.top, rect.bottom);
}
onMounted(() => {
    myBox = document.querySelector('.myBox') as HTMLElement
    window.addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.box {
    background-color: red;
    height: 2000px;
    width: 100%;
}

.myBox {
    margin-top: 200px;
    height: 200px;
    width: 100px;
    background-color: aqua;
}
</style>