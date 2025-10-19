import defaultImg from '@/assets/default.png'
// 交叉观察器
const intersectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src!
            img.removeAttribute('data-src')
            intersectionObserver.unobserve(img)
        }
    }

}, {
    root: null,
    rootMargin: '0px',
    threshold: 0
})
// 自定义指令
export const lazy = {
    mounted: (el: any, binding: any) => {
        const src = binding.value // 获取到传递给自定义指令的值,即实际图片
        el.src = defaultImg // 先将所有图片使用默认图片
        el.dataset.src = src // 将实际图片放入元素的data-src属性中
        intersectionObserver.observe(el) // 使用交叉观察器观察元素
    }
}