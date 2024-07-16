<template>
  <div id="app">
    <header>
      <h1>Album Finder</h1>
    </header>
    <main>
      <SearchAlbum @albumsFetched="updateAlbums" />
      <div v-if="albums.length">
        <h2>Albums</h2>
        <div class="album-list">
          <AlbumCard v-for="album in albums" :key="album.spotify_id" :album="album" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SearchAlbum from './components/SearchAlbum.vue';
import AlbumCard from './components/AlbumCard.vue';

export default {
  components: {
    SearchAlbum,
    AlbumCard,
  },
  data() {
    return {
      albums: [],
    };
  },
  methods: {
    updateAlbums(albums) {
      this.albums = albums;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

header {
  background: #42b983;
  padding: 20px;
  color: white;
}
</style>
