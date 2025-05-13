<script setup lang="ts">
import { BookletPage } from '../../src'
import { Booklet } from '../../src'
</script>

<template>
  <Booklet>
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
