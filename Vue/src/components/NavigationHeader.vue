<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      title: "HelpMeMod",
    };
  },
});
</script>

<template>
  <header>
    <div class="brand">
      <img alt="Vue logo" class="logo" src="../assets/logo.svg" />
      <p class="navBarText">{{ title }}</p>
    </div>
  </header>
</template>

<style>
header {
  position: fixed;
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: darkslategray;
}

.brand {
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
  margin: auto;
}

.brand:hover {
  cursor: pointer;
}

.logo {
  width: 32px;
}

.navBarText {
  color: white;
}
</style>
