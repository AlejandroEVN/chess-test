<script setup lang="ts">
import { onUpdated, ref } from 'vue'
import store from '@/store/store'

const squares = ref()

onUpdated(() => {
  if (squares.value) {
    squares.value.at(-1).scrollIntoView({ behavior: "smooth" })
  }
})
</script>

<template>
  <span 
    v-for="(square, i) in store.highlightedOrder" 
    :id="square + i" 
    :key="square" 
    ref="squares">
    {{ i }} - {{ square }}
  </span>
</template>

<style>
@keyframes fadeIn {
  0% {
    translate: 10% 0;
    opacity: 0;
  }

  100% {
    translate: 0% 0;
    opacity: 1;
  }
}
span {
  animation: fadeIn 150ms forwards;
  min-width: 3rem;
}
</style>
