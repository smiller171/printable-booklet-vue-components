<script lang="ts" setup>
import { ref } from 'vue'

let orientation = defineModel()

const bookletPrint = () => {
  window.print()
}
</script>

<template>
  <fieldset id="printStyle">
    <legend>How would you like to print?</legend>
    <label for="orientation">Half page?</label>
    <input type="checkbox" id="orientation" v-model="orientation" true-value="portrait" false-value="landscape" />
    <br><br>
    <button @click="bookletPrint" class="printButton">Print Booklet</button>
  </fieldset>
</template>

<style scoped>
  @media print {
    fieldset {
      display: none;
    }
  }
  fieldset {
    margin: 1em;
  }
</style>
