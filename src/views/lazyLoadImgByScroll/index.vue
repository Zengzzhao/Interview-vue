<template>
    <h1>传统滚动监听方式实现图片懒加载</h1>
    <div class="container">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=1" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=2" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=3" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=4" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=5" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=6" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=7" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=8" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=9" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=10" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=11" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=12" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=13" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=14" alt="">
        <img src="@/assets/default.png" data-src="https://picsum.photos/200/300?random=15" alt="">
    </div>
</template>

<script setup lang='ts'>
import { onBeforeUnmount, onMounted } from 'vue';
let imgs: NodeListOf<HTMLImageElement>
// 懒加载判断核心函数
function load() {
    imgs.forEach(img => {
        if (img.dataset.src) { // 只对还未加载过的图片判断
            const rect = img.getBoundingClientRect() // 获取当前图片基于视口的位置信息
            if (rect.top < window.innerHeight && rect.bottom > 0) { // 如果当前图片处在视口中
                img.src = img.dataset.src // 使用实际图片替代默认图片
                img.removeAttribute('data-src') // 当前图片已经加载过了就移除data-src属性
            }
        }
    })
}
// 使用rAF节流：一帧只计算一次
function handleScroll() {
    requestAnimationFrame(() => {
        load()
    })
}

onMounted(async () => {
    imgs = document.querySelectorAll('img[data-src]')
    window.addEventListener('scroll', handleScroll)
    setTimeout(() => load(), 100)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.container {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    justify-content: center;
    gap: 20px;
}
</style>