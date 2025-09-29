// 用于追踪用了该指令的元素的生命周期，是否有挂载、卸载
export const trace = {
    mounted(el: HTMLElement, vnode: object) {
        console.log('[mounted]', el, vnode);
    },
    beforeUnmount(el: HTMLElement, vnode: object) {
        console.log('[beforeUnmount]', el, vnode);
    }
}