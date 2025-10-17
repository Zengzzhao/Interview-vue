<template>
    <div>test</div>
    <div class="container">aslda</div>
    <div class="fixBox"></div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang="scss">
@use '@/style/utils.scss' as *;
.container{
    width: 200px;
    height: 200px;
    background-color: aqua;
    @include red_bold_Font
}
.fixBox{
    width: vw(200);
    height: vh(200);
    background-color: black;
    @include center_position(absolute)
}
</style>