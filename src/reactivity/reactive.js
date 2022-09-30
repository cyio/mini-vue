import { track, trigger } from './effect';

export function reactive(target) {
  const proxy = new Proxy(target, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      track(target, key); // 收集时机：effect 执行时访问属性
      return res;
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver);
      trigger(target, key);
      return res;
    },
  });

  return proxy;
}

export function isReactive() {
  return false;
}