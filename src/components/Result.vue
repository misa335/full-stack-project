<template>
<div id="result">
    <div class="result" ref="input" v-for="(info, index) in infos" v-bind:key="index">
        <div @click="addList">
        <a target="_blank" rel="noopener noreferrer" v-bind:href="info.trackViewUrl">{{info.trackName}}</a>
        <input type="button" value="🤍" />
        </div>
        <br>
        <a target="_blank" rel="noopener noreferrer" v-bind:href="info.previewUrl"><img class="image" v-bind:src="info.artworkUrl100"/></a>
    </div>
</div>
</template>

<script>

export default {
    name: 'Result',
    props: [
       "infos",
       "trackName"
    ],
    methods: {
        addList: function(e) {
            // this.$refs.input.click();
            console.log("e",e);
            console.log("e",e.target.innerText);
            // this.trackName = e.target.innerText;
            // console.log("favData:",this.info);
            // console.log("favData:",this.$refs.input.infos[this.index]);
            // console.log("favData:",this.$refs.favData[this.index]);
            // console.log("info:",this.$refs.favData.target);
            this.$emit("add-list", e.target.innerText);
        }
    }
};
</script>

<style scoped>
 #result {
     width: 80%;
     text-align: center;
     margin-top: 15px;
 }

 img {
    /* width: 100%;
    height: 180px; */
    /* margin: 12px; */
    -o-object-fit: cover;
    object-fit: cover;
    margin-bottom: 10px;
 }

</style>