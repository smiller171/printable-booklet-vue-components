import Booklet from "./Booklet.vue"
import BookletPage from "./BookletPage.vue"

export { Booklet, BookletPage }

function install(Vue) {
  Vue.component('Booklet', Booklet)
  Vue.component('BookletPage', BookletPage)
}

export default { install: install }
