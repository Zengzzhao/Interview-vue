<template>
    <h1>封装自定义指令v-lazy使用交叉观察器实现图片懒加载</h1>
    <div class="container">
        <img v-lazy="'https://picsum.photos/200/300?random=1'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=2'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=3'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=4'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=5'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=6'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=7'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=8'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=9'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=10'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=11'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=12'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=13'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=14'" alt="">
        <img v-lazy="'https://picsum.photos/200/300?random=15'" alt="">
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang="scss">
.container {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    justify-content: center;
    gap: 20px;
}
</style>