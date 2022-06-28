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
@import  '/public/assets/css/index.css';
@import '/public/assets/css/style.css';

</style>
