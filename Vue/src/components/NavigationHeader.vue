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
        <router-link to="/" class="header-link">
          <div class="brand">
            <img alt="Vue logo" class="logo" src="../assets/logo.svg" />
            <p class="navBarText">{{ title }}</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="header-link">About</router-link>
      </li>
      <li>
        <router-link to="/empty" class="header-link">Empty</router-link>
      </li>
    </ul>
  </header>
</template>

<style>
header {
  position: sticky;
  height: 48px;
  width: 100%;
  background-color: #2d333b;
}

ul {
  align-items: center;
  list-style-type: none;
  gap: 16px;
  height: inherit;
  display: flex;
  flex-direction: row;
}

li {
  display: flex;
  height: inherit;
}

.header-link {
  display: inherit;
  height: inherit;
  width: inherit;
  padding-inline: 8px;
  align-items: center;
  color: #cdd9e5;
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
  height: 32px;
}

.navBarText {
  color: white;
}
</style>
