<script setup lang="ts">
import { BookletPage } from '../../src'
import { Booklet } from '../../src'
import { ref } from 'vue'

let bookletPrint = () => {
  // printArea.dataset.print = "booklet"
  window.print()
}

let orientation = ref('landscape')
</script>

<template>
  <fieldset id="printStyle">
    <legend>How would you like to print?</legend>
    <label for="orientation">Half page?</label>
    <input type="checkbox" id="orientation" v-model="orientation" true-value="portrait" false-value="landscape" />
    <br><br>
    <button @click="bookletPrint" class="printButton">Print Booklet</button>
  </fieldset>
  <Booklet :orientation>
    <BookletPage :pageNumber=1></BookletPage>
    <BookletPage :pageNumber=2></BookletPage>
    <BookletPage :pageNumber=3></BookletPage>
    <BookletPage :pageNumber=4></BookletPage>
    <BookletPage :pageNumber=5></BookletPage>
    <BookletPage :pageNumber=6></BookletPage>
    <BookletPage :pageNumber=7></BookletPage>
    <BookletPage :pageNumber=8></BookletPage>
  </Booklet>
</template>
