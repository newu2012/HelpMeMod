<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style>
@import "./assets/base.css";

body {
  background-color: #22272e;
}

#app {
  font-weight: normal;
  color: #adbac7;
}

a,
.green {
  text-decoration: none;
  color: rgba(205, 217, 229, 0.7);
  transition: 0.4s;
}

main {
  position: absolute;
  top: 64px;
  right: 0px;
  margin: 64px;
  width: 25%;
  height: calc(100vh - 64px - 128px);
  border: 2px solid #444c56;
  border-radius: 16px;
}

@media (hover: hover) {
  a:hover {
    background-color: rgba(205, 217, 229, 0.2);
  }
}
</style>
