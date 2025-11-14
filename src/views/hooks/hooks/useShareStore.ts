// 共享store的hook实现

import { ref } from "vue";
// 存储不同key对应的store实例
const storeInstances = new Map<string, any>();

export function useShareStore(storeKey: string) {
  //如果已经存在对应的store实例则直接返回
  if (storeInstances.has(storeKey)) {
    return storeInstances.get(storeKey);
  }
  // 如果没有则创建一个新的store实例
  const store = {
    state: ref<Record<string, any>>({}),
    setState(key: string, value: any) {
      this.state.value[key] = value;
    },
    getState(key: string) {
      return this.state.value[key];
    },
  };
  storeInstances.set(storeKey, store);
  return store;
}
