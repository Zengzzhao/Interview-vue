<!-- 自定义组件上使用v-model语法糖 -->
<template>
    <div class="container" @input="handleInput" contenteditable>{{ modelValue }}</div>
</template>

<script setup lang='ts'>
const props = defineProps<{
    modelValue: string
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const handleInput = (e: Event) => {
    const val = (e.target as HTMLDivElement).innerText
    emit('update:modelValue', val)
}
</script>

<style scoped>
.container {
    width: 200px;
    height: 100px;
    border: 2px solid #ccc;
}
</style>