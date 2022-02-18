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
    <ul>
      <li>
        <router-link to="/">
          <div class="brand">
            <img alt="Vue logo" class="logo" src="../assets/logo.svg" />
            <p class="navBarText">{{ title }}</p>
          </div>
        </router-link>
      </li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/empty">Empty</router-link></li>
    </ul>
  </header>
</template>

<style>
header {
  position: sticky;
  height: 48px;
  width: 100%;
  background-color: darkslategray;
}

ul {
  align-items: center;
  list-style-type: none;
  gap: 16px;
  height: inherit;
  display: flex;
  flex-direction: row;
}

.brand {
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  margin: 0 auto;
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
