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
    <div>
      <router-view />
    </div>
  </body>
</template>


<script>
import FooterView from "./components/FooterView.vue";
import HeaderView from "./components/HeaderView.vue";

export default {
  name: "App",
  components: {
    FooterView,
    HeaderView,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
