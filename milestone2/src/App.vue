<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Arimo&family=IBM+Plex+Mono:wght@300&family=JetBrains+Mono:wght@100;200&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="page-wrapper">
      <HHeader />
      <HHome />
      <FFooter />
    </div>
  </body>
</template>

<script>
import FFooter from "./components/FFooter.vue";
import HHeader from "./components/HHeader.vue";
import HHome from "./views/HHome.vue";

export default {
  name: "App",
  components: {
    FFooter,
    HHeader,
    HHome,
  },
};
</script>

<style>
#app,
body {
  font-family: "JetBrains Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

body {
  height: 100%;
  background-color: #fad2e1;
  color: #000000;
  font-family: "Arimo", sans-serif;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
