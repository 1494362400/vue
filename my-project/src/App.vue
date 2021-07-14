<template>
  <div id="app">
    <navBar  v-if="$route.meta.keepAlive" />
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
