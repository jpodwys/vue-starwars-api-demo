<template>
  <div id="app">
    <h1>Star Wars API Demo</h1>
    <button class="inline" @click="getPeople">Get People</button>
    <button class="inline" @click="getPlanets">Get Starships</button>
    <button class="inline" @click="getStarships">Get Starships</button>
    <div v-if="loading">Loading...</div>
    <ul v-if="!loading">
      <li v-for="item in list" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  computed:  mapState([ 'loading', 'list' ]),
  methods: mapActions([ 'getPeople', 'getPlanets', 'getStarships' ])
}
</script>

<style scoped>
  .inline {
    display: inline-block;
  }
</style>
