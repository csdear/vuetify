// https://vuex.vuejs.org/en/getters.html

export default {
  menu: state => { return state.menu },
  getSettings: state => { return state.settings },
  getPosts: state => { return state.posts },
  loading: state => { return state.status.loading },
  requestedArticle: state => { return state.requestedArticle }
}