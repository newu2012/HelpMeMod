<script setup lang="ts">
import NavigationHeader from "./components/NavigationHeader.vue";
import ModInfoBar from "./components/ModInfoBar.vue";
</script>

<template>
  <NavigationHeader />

  <main>
    <ModInfoBar />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  font-weight: normal;
  color: aliceblue;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

main {
  position: absolute;
  top: 64px;
  right: 0px;
  margin: 64px;
  width: 25%;
  height: calc(100vh - 64px - 128px);
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
