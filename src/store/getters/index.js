/*
 * getters就是从state中派生出状态，比如将state中的某个状态进行过滤然后获取新的状态。
 * getters.js用来获取state中的数据，可以认为是store中的计算属性，每个方法都会接收一个state对象作为参数
 **/
export default {
  getApp: (state) => state.platform,
  getDoneTodos: state => state.hotArticles.filter(todo => todo.author === ''),
  getDoneTodosCount: (state, getters) => {
    return getters.getDoneTodos.length
  }
}

