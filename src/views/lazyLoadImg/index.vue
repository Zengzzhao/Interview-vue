<template>
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

// 创建交叉观察器
const intersectionObserver = new IntersectionObserver((entries) => {
    // 交叉回调函数
    for (const entry of entries) {
        // 如果当前图片元素交叉了(出现在了视口就将其data-src属性回填到src属性上，进行图片加载)
        if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || img.src
            img.removeAttribute('data-src')
            intersectionObserver.unobserve(img) // 当前图片懒加载完成,让交叉观察器取消对当前img元素的观察
        }
    }
}, {
    root: null, // 表示要观察的元素与哪个父元素进行交叉,null表示视口
    rootMargin: '0px', // 对交叉范围扩展/收缩
    threshold: 0 // 交叉的阈值0-1,观察的元素与指定的父元素交叉多少时触发交叉回调
    // 图片懒加载时父元素设置为null,threshold为0表示图片只要碰上视口就触发交叉回调,1表示图片完全出现在视口就触发交叉回调
})

onMounted(() => {
    // 获取所有图片,并观察
    const imgs = document.querySelectorAll('img[data-src]');
    imgs.forEach(img => {
        intersectionObserver.observe(img)
    })
})
onBeforeUnmount(() => {
    intersectionObserver.disconnect()
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