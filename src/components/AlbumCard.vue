<template>
    <div class="album-card">
      <h3>{{ album.title }} by {{ album.artist }}</h3>
      <p>Rating: {{ album.rating }}</p>
      <p>Descriptors: {{ album.genre_descriptors.join(', ') }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      album: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .album-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
    background-color: #f9f9f9;
    text-align: left;
  }
  
  .album-card h3 {
    margin: 0;
    font-size: 1.2em;
  }
  
  .album-card p {
    margin: 4px 0;
  }
  </style>
  