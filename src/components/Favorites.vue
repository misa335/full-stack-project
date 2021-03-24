<template>
    <div>
        <div class="favorite" v-for="(list, index) in lists" v-bind:key="index">
        {{list.id}}, {{list.artist_name}}, {{list.song_title}}, {{list.date}}
        <input type="button" value="DELETE"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Favorites',
    props: [
        "lists"
    ]
}
</script>

<style scoped>
.favorite {
    margin: 10px;
}
</style>