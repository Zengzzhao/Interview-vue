<template>
    <div class="con1">
        11
        <div class="con2">22</div>
        <Test></Test>
        <div>44</div>
    </div>
</template>

<script setup lang='ts'>
import Test from './components/Test.vue';
</script>

<style scoped lang="scss">
.con1{
    color: red;
    .con2{
        color: rebeccapurple;
    }
    .con3{
        color: aqua;
    }
}
</style>