<template>
  <div id="app">
    <navBar />
    <router-view />
  </div>
</template>

<script>
import navBar from "./components/nav.vue";
export default {
  name: "App",
  components: {
    navBar,
  },
};
</script>

<style>
</style>
