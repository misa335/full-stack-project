<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    🎶iTunes🍎API🎶
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    songs: []
  }),
  mounted() {
    axios.get('https://search-itunes.now.sh/?term=blackpink')
      .then(res => {
        console.log("res:",res);
        console.log("data:",res.data);
        console.log("array:", res.data.results);
        this.songs = res.data.results;
        console.log("songs:",this.songs);
        return this.songs;
      }).catch(err => {
        console.log(err);
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
