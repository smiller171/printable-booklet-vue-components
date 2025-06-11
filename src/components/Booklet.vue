<script lang="ts" setup>
import { BookletPage } from '.'

const props = defineProps({
  orientation: { type: String, default: 'landscape' }
})
</script>

<template>
  <div class="booklet" :class="['booklet-' + orientation]">
    <BookletPage pageNumber=0></BookletPage>
    <slot>
      <BookletPage :pageNumber=1></BookletPage>
      <BookletPage :pageNumber=2></BookletPage>
      <BookletPage :pageNumber=3></BookletPage>
      <BookletPage :pageNumber=4></BookletPage>
      <BookletPage :pageNumber=5></BookletPage>
      <BookletPage :pageNumber=6></BookletPage>
      <BookletPage :pageNumber=7></BookletPage>
      <BookletPage :pageNumber=8></BookletPage>
    </slot>
  </div>

</template>

<style scoped>
.booklet {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 1em;
  margin-right: 1em;
  justify-content: flex-start;
  break-inside: avoid;
  break-after: auto;
  gap: 0;
  /*   gap: 1em; */
  /* height: 100vh; */
}

@page landscape {
  size: landscape;
  margin: .25in;
}

@page portrait {
  size: portrait;
  margin: .25in;
}

@media print {
  #printStyle {
    display: none;
  }

  .booklet {
    align-items: stretch;
    justify-content: center;
    gap: 0;
    margin: 0;
    width: 100vw;
  }

  .booklet-portrait {
    height: 50vh;
    page: portrait;
  }

  .booklet-landscape {
    height: 100vh;
    page: landscape;
  }
}
</style>

<style>
@media print {
  body,#app {
    margin: 0;
    :not(#app, .booklet, .booklet *) {
      display: none;
    }
  }
}
</style>
