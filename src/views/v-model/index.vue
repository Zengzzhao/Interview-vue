<template>
    <h1>v-model</h1>
    <div class="container">
        <div>
            <!-- 语法糖的高层封装 -->
            <div>v-model语法糖直接使用</div>
            <input type="text" v-model="inputVal">
        </div>
        <div>
            <!-- 底层实现 -->
            <div>v-modle的底层实现</div>
            <input type="text" v-bind:value="inputVal2" @input="handleInput">
        </div>
        <div>
            <!-- 自定义组件上使用v-model语法糖 -->
            <div>自定义组件上使用v-model语法糖</div>
            <comp1 v-model="inputVal3"></comp1>
        </div>
        <div>
            <!-- 自定义组件上的底层实现 -->
            <div>自定义组件上的底层实现</div>
            <comp2 :model-value="inputVal4" @update:model-value="handleUpdate"></comp2>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import comp1 from './components/comp1.vue';
import comp2 from './components/comp2.vue';

// 测试语法糖是否生效的代码
const inputVal = ref('')
watch(inputVal, () => {
    console.log(inputVal.value)
})
// 测试底层实现是否生效的代码
const inputVal2 = ref('')
const handleInput = (e: Event) => {
    inputVal2.value = (e.target as HTMLInputElement).value
}
watch(inputVal2,()=>{
    console.log(inputVal2.value);
})
// 测试自定义组件上使用v-model语法糖
const inputVal3 = ref('')
watch(inputVal3, () => {
    console.log(inputVal3.value)
})
// 测试自定义组件上的底层实现
const inputVal4 = ref('')
const handleUpdate = (vlaue: string) => {
    inputVal4.value = vlaue
}
watch(inputVal4,()=>{
    console.log(inputVal4.value);
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>