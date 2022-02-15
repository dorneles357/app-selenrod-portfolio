<template>
  <Header />
  <router-view/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components:{
    Header,
    Footer,
  },

}
</script>
<style>
body{
   background: #070A1B;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:auto;
  max-width: 1280px;
}
</style>
