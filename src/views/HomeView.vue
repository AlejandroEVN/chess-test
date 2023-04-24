<script setup lang="ts">
import Chessboard from '../components/Chessboard.vue';
import Menu from '../components/Menu.vue';
</script>

<template>
  <div class="container">
    <aside class="menu">
      <Menu />
    </aside>
    <main>
      <Chessboard />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-areas: var(--templateAreas);
  grid-template-columns: var(--templateColumns);
  grid-template-rows: var(--templateRows);
  height: 100%;
  width: 100%;
  place-items: center;
  
}

main {
  grid-area: main;
  position: relative;
  width: 100%;
  height: 100%;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu  {
  display: flex;
  align-items: center;
  gap: .5rem; 
  grid-area: aside;
  background-color: rgb(38, 38, 38);
  flex-direction: var(--menuDirection);
  padding: 1rem 0.5rem;
  width: 100%;
  height: 100%;
  overflow: auto;
  
  span {
    margin: .5rem;
  }
}


</style>
