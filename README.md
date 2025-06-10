# Vue printable zine library

This library is dedicated to people who want to be able to make printable zines or pocket booklets. Currently supports 8-page formats in full-page landscape or half-page portrait, allowing the browser to select the paper size.

<!-- ## [Documentation](https://www.vuecomponentlibrary.com)

Read the [docs](https://www.vuecomponentlibrary.com) to learn how to use the vue component library in your web applications or how to create your own component library. -->

---

## Using the component library

The component library comes with different package builds allowing you to import the library in a variety of ways.

### Directly in the browser

Drop the library in with a `<script>` tag alongside Vue to globally install all components:

```html
<div id="app">
  <base-button></base-button>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-library-printable-zine"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

Or, if you only want to use a small subset of components, drop them in individually:

```html
<div id="app">
  <booklet-page :pageNumber=1></booklet-page>
</div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-library-printable-zine/BookletPage"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

### In a module system

Install the library with NPM:

```bash
npm install vue-component-library
```

You can choose to import the library globally, which will make all of the components available across your project (but will also increase the bundle size of your application), or you can import individual components locally.

#### Register the library globally

Register the library as a plugin to globally install all components:

```js
import VueComponentLibrary from 'vue-component-library'

Vue.use(VueComponentLibrary)
```

#### Import components locally

Or, import components individually for local registration:

```js
import { Booklet, BookletPage } from 'vue-component-library'

export default {
  components: { Booklet, BookletPage }
}
```

---

## Acknowledgments

This readme is taken from [Frederik Wagner's](https://github.com/frederikwagner) [vue-component-library project](https://github.com/frederikwagner/vue-component-library). The rest of the project is built on [Estéban's](https://github.com/Barbapapazes) [vue-library project](https://github.com/barbapapazes/vue-library) referenced in [this blog post](https://soubiran.dev/posts/the-simplest-method-to-create-a-vue-js-component-library)
