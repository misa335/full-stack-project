<template>
  <div id="app">
    🎶iTunes🍎API🎶
    <br>
    <input ref="input" type="text" placeholder="Who is your favorite artist?" @change="getInfo" />
    <button @click="search">Get Artist info😎</button>
    <button @click="addFavorite">Favorites💕</button>
  <div>
    <Result v-if="view==='allSongs'" v-bind:infos="infos" />
  </div>
  </div>
</template>

<script>
import Result from './components/Result.vue';
// import axios from 'axios';

export default {
  name: 'App',
  components: {
    Result
  },
  data: () => ({
    artistName: "",
    infos: [],
    view: ""
  }),
  methods: {
    getInfo: async function(e) {
    await this.$axios.get(`https://search-itunes.now.sh/?term=${e.target.value}`)
      .then(res => {
        console.log("res:",res);
        console.log("data:",res.data);
        console.log("array:", res.data.results);
        this.infos = res.data.results;
        return this.infos;
      }).catch(err => {
        console.log(err);
      });
    },
    search: function() {
      this.$refs.input.click();
      this.view='allSongs';
    },
    addFavorite: async function(){
      const data = {artistName: "test", trackName: "test"};
      await this.$axios.post('http://localhost:4000/song', data)
        .then(res => {
          console.log("res:",res);
          console.log("data:",res.data);
          return res.data;
        })
    }
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
