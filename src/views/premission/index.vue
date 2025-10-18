<template>
    <div class="container">
        <div class="topContainer">
            <div>切换用户角色:</div>
            <div>
                <select v-model="curRole">
                    <option value="admin">admin</option>
                    <option value="editor">editor</option>
                    <option value="vistor">vistor</option>
                </select>
            </div>
        </div>
        <div class="btnContainer">
            <button class="normal-btn" v-premission:disabled="'add'">新增用户</button>
            <button class="normal-btn" v-premission="'query'">查询用户</button>
            <button class="normal-btn" v-premission="'update'">修改用户</button>
            <button class="danger-btn" v-premission="'del'">删除用户</button>
            <button class="danger-btn" v-premission="'dis'">禁用用户</button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue';
// 角色与其权限的映射
const roleBtnMap: Record<string, string[]> = {
    'admin': ['add', 'query', 'update', 'del', 'dis'],
    'editor': ['query', 'update', 'dis'],
    'vistor': ['query'],
}
// 当前角色
const curRole = ref('admin')
// 当前角色的权限
const curBtn = computed(() => roleBtnMap[curRole.value])

// 自定义权限指令
function applyPermission(el: any, binding: any) {
    const { value, arg } = binding // value为传递给指令的值(即按钮的权限名),arg为传递给指令的参数(即是否禁用disabled) 
    const has = curBtn.value.includes(value) // 当前角色是否有该权限
    // 如果角色有当前权限就正常显示,如果没有的话如果是禁用权限则设置禁用,否则就不显示
    if (arg === 'disabled') {
        el.disabled = has ? false : true;
        has ? '' : el.classList.add('disabled')
        el.style.cursor = has ? '' : 'not-allowed';
    } else {
        // 此处由于我们需要切换角色,所以不显式移除元素,而是将其隐藏,避免切换角色后元素节点消失
        el.style.display = has ? '' : 'none'
        // 一般来说RABC模型一开始进入的时候角色就已经固定了不会再改,所以直接移除
        // el.parentNode && el.parentNode.removeChild(el)
    }
}
// 初次挂载+组件更新时执行
const vPremission = {
    mounted: (el: any, binding: any) => {
        applyPermission(el, binding)
    },
    updated: (el: any, binding: any) => {
        applyPermission(el, binding)
    }
}
</script>

<style scoped lang="scss">
@use 'sass:color';

@mixin btn {
    color: white;
    padding: 10px 20px;
    border-radius: 10px;

    &:disabled {
        background-color: #ccc;

        &:hover {
            background-color: #ccc;
        }
    }
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    .topContainer {
        display: flex;
        gap: 20px;
        font-size: 20px;
        font-weight: bold;

        select {
            width: 100px;
            height: 30px;
        }
    }

    .btnContainer {
        display: flex;
        gap: 20px;

        .normal-btn {
            @include btn;
            background-color: #0000ff;

            &:hover {
                background-color: color.scale($color: #0000ff, $lightness: -20%)
            }
        }

        .danger-btn {
            @include btn;
            background-color: #ff0000;

            &:hover {
                background-color: color.scale($color: #ff0000, $lightness: -20%);
            }
        }
    }
}
</style>