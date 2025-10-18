<template>
    <div>
        <h1>scss语法</h1>
        <div class="container">普通混入:@mixin--@include</div>
        <div class="fixBox">传参混入:@mixin--@include</div>
        <button class="btn">继承%xxxx--@extend</button>
        <div class="test">模块系统以及as别名</div>
    </div>
</template>

<script setup lang='ts'>
</script>

<style scoped lang="scss">
// 模块系统以及as重命名
@use '@/style/test.scss' as b;

// mixin混入
.container {
    width: 200px;
    height: 200px;
    background-color: aqua;
    @include red_bold_Font
}

.fixBox {
    width: 200px;
    height: 200px;
    background-color: aqua;
    @include center_position(absolute)
}

// 继承
.btn {
    @extend %btn-base;
    color: white;
    background: blue;
}

.test {
    @include b.red_font;
}
</style>