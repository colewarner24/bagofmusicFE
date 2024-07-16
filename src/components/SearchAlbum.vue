<template>
  <div>
    <input
      v-model="userInput"
      @keyup.enter="queryAlbums"
      placeholder="Enter words to describe the album"
    />
    <button @click="queryAlbums">Search</button>
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="albums.length">
      <h2>Albums</h2>
      <ul>
        <li v-for="album in albums" :key="album.spotify_id">
          <h3>{{ album.title }} by {{ album.artist }}</h3>
          <p>Rating: {{ album.rating }}</p>
          <p>Descriptors: {{ album.genre_descriptors.join(', ') }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import queryAlbums from "../common/api";

export default {
  data() {
    return {
      userInput: '',
      albums: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async queryAlbums() {
        console.log('queryAlbums');
      this.loading = true;
      this.error = null;
      this.albums = [];
      try {
        const words = this.userInput.trim().split(/\s+/);
        this.albums = await queryAlbums(words);
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
input {
  padding: 10px;
  margin-right: 10px;
}

button {
  padding: 10px;
}

.error {
  color: red;
}
</style>
