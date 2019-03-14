/**
 * Dep 订阅器
 */
export default class Dep {
  constructor() {
    this.subs = []
  }

  /**
   * 添加到订阅器
   * @param {*} sub
   */
  addSub(sub) {
    this.subs.push(sub)
  }

  /**
   * 通知
   * 遍历订阅器里面的订阅者，调用它们的 update 方法
   */
  notify() {
    this.subs.forEach(sub => sub.update())
  }
}

Dep.target = null // 订阅器的 target 初始值为 null
