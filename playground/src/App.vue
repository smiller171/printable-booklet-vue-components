<script setup lang="ts">
import { Booklet, BookletPage, PrintSettings } from '../../src'
import { ref } from 'vue'

let bookletPrint = () => {
  // printArea.dataset.print = "booklet"
  window.print()
}

let orientation = ref('landscape')
</script>

<template>
  <PrintSettings v-model="orientation"/>
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
