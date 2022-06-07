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
      <Header/>
      <router-view />
      <Footer/>
    </div>
  </body>
</template>


<script>
import Header from "./components/HeaderView.vue";
import Footer from "./components/FooterView.vue";

export default {
  components: {
    Footer,
    Header,
  },
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
#app,
body {
  font-family: "JetBrains Mono", monospace;
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
