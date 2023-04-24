<script setup lang="ts">
import store from '../store/store'

function highlight(e: MouseEvent) {
  const tileSize = (e.target as HTMLElement).getBoundingClientRect().width / 8
  const column = Math.floor(e.offsetX / tileSize)
  const row = Math.floor(e.offsetY / tileSize)
  store.addHighlightedSquare(`s-${column}${row}`, { column, row })
}

function remove(e: MouseEvent) {
  e.stopPropagation()
  store.removeHighligthedSquare((e.target as HTMLElement).id)
}
</script>

<template>
  <div ref="chessboard" class="chessboard" @click="highlight">
    <div
      @click="remove"
      class="highlighted"
      v-for="[k, { column, row }] in store.highlightedSquares"
      :style="`--col: ${column}; --row: ${row}`"
      :key="k"
      :id="k"
    ></div>
  </div>
</template>

<style scoped>
.chessboard {
  margin: auto;
  background-image: url('https://www.chess.com/boards/green/150.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 0;
  width: calc(min(100%, 100vh) - 1rem);
  min-width: 300px;
  aspect-ratio: 1 / 1;
  position: relative;
}

.highlighted {
  position: absolute;
  width: 12.5%;
  height: 12.5%;
  inset: 0;
  translate: calc(var(--col) * 100%) calc(var(--row) * 100%);
  background-color: rgb(255, 90, 80);
  opacity: 0.7;
}
</style>
