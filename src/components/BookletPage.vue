<script lang="ts" setup>

defineProps({
  pageNumber: {type: Number, required: true}
})
</script>

<template>
  <div class="booklet-page" :class="`page-${pageNumber}`">
    <slot>
      <div class="page-top">
        <span>Top of Page {{ pageNumber }}</span>
      </div>
      <div class="page-spacer"></div>
      <div class="page-bottom">
        <span>Bottom of Page {{ pageNumber }}</span>
      </div>
    </slot>
  </div>

</template>

<style scoped>
.booklet-page {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  height: 25em;
  max-width: 19em;
  min-width: 19em;
  border: 1px solid black;
  /*   border-radius: 1em; */
  padding: 1rem;
  break-after: avoid;
  break-inside: avoid;
  break-before: avoid;
}

@media print {
  .booklet-page {
    box-sizing: border-box;
    /* max-width: 25%; */
    min-width: 0;
    width: 25%;
    /* width: calc(25%-8rem); */
    height: auto;
    min-height: 40%;

  }
  .page-1 {
    order: 2;
    border-left: none;
  }
  .page-2 {
    order: 3;
    border-left: none;
  }
  .page-3 {
    order: 4;
    border-left: none;
  }
  .page-4 {
    order: 8;
    rotate: 180deg;
    border-right: none;
  }
  .page-5 {
    order: 7;
    rotate: 180deg;
    border-right: none;
  }
  .page-6 {
    order: 6;
    rotate: 180deg;
    border-right: none;
  }
  .page-7 {
    order: 5;
    rotate: 180deg;
  }
  .page-8 {
    order: 1;
  }
}
</style>
