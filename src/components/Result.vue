<template>
<div>
    <div class="result" v-for="(info, index) in infos" v-bind:key="index">
        <a v-bind:href="info.trackViewUrl">{{info.trackName}}</a>
        <br>
        <a v-bind:href="info.previewUrl"><img class="image" v-bind:src="info.artworkUrl100"/></a>
    </div>
</div>
</template>

<script>

export default {
    name: 'Result',
    props: [
       "infos" 
    ]
}
</script>

<style scoped>

</style>