import Booklet from "./Booklet.vue"
import BookletPage from "./BookletPage.vue"
import PrintSettings from "./PrintSettings.vue"

export { Booklet, BookletPage, PrintSettings }

function install(Vue) {
  Vue.component('Booklet', Booklet)
  Vue.component('BookletPage', BookletPage)
  Vue.component('PrintSettings', PrintSettings)
}

export default { install: install }
