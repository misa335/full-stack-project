<template>
  <div id="app">
    🎶iTunes🍎API🎶
    <br>
    <input ref="input" type="text" placeholder="Find good tunes!!" @change="getInfo" />
    <button @click="search">Get Artist info😎</button>
    <button @click="getList">Favorites💕</button>
  <div>
    <Result v-if="view==='allSongs'" v-bind:infos="infos" v-bind:trackName="trackName" @add-list="addList"/>
    <Favorites v-if="view==='favorite'" v-bind:lists="lists"/>
  </div>
  </div>
</template>

<script>
import Result from './components/Result.vue';
import Favorites from './components/Favorites.vue';
// import axios from 'axios';

export default {
  name: 'App',
  components: {
    Result,
    Favorites
  },
  data: () => ({
    infos: [],
    artistName: "",
    trackName:"",
    view: "",
    lists: []
  }),
  methods: {
    getInfo: async function(e) {
      this.artistName = e.target.value;
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
    addList: async function(track){
      const data = {artistName: this.artistName, trackName: track};
      console.log("data:",data);
      await this.$axios.post('/song', data)
        .then(res => {
          console.log("res:",res);
          console.log("data:",res.data);
          return res.data;
        });
    },
    getList: async function() {
      this.view='favorite'
      await this.$axios.get('/song')
        .then(res => {
          console.log("res:",res);
          console.log("data:",res.data);
          this.lists = res.data;
          return res.data;
        });
    }
  }
};
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
