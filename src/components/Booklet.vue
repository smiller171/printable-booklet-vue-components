<script lang="ts" setup>
import { BookletPage } from '.'
import { ref } from 'vue'

defineProps({})

let bookletPrint = () => {
  // printArea.dataset.print = "booklet"
  window.print()
}

let paperSizes: string[] = [
  "letter",
  // "half-letter",
  "legal",
  // "half-legal",
  "A3",
  "A4",
  "A5",
  "B4",
  "B5",
  "ledger",
  // "half-ledger",
  "JIS-B5",
  "JIS-B6"
]

let orientation = ref('landscape')
</script>

<template>
  <fieldset id="printStyle">
    <legend>How would you like to print?</legend>
    <label for="orientation">Half page?</label>
    <input type="checkbox" id="orientation" v-model="orientation" true-value="portrait" false-value="landscape"/>
    <br><br>
    <button @click="bookletPrint" class="printButton">Print Booklet</button>
  </fieldset>

  <div class="booklet" :class="['booklet-' + orientation]">
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
  /*   gap: 1em; */
  /* height: 100vh; */
}

@page landscape {
  size: landscape;
  margin: 0;
}

@page portrait {
  size: portrait;
  margin: 0;
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
