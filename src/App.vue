<template>
  <div id="app">
    <h1>Star Wars API Demo</h1>

    <div class="spacing">
      <button class="inline" @click="getPeople">Get People</button>
      <button class="inline" @click="getPlanets">Get Planets</button>
      <button class="inline" @click="getStarships">Get Starships</button>
    </div>

    <div class="spacing">
      <input placeholder="Filter" v-model="filterText"/>
    </div>

    <div class="spacing" v-if="loading">Loading...</div>

    <ul class="spacing" v-if="!loading">
      <li v-for="item in filteredList" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  data() {
    return { filterText: '' }
  },
  computed:  {
    filteredList: function() {
      return this.list.filter(item =>
        ~item.name.toLowerCase().indexOf(this.filterText.toLowerCase())
      );
    },
    ...mapState([ 'loading', 'list' ])
  },
  methods: mapActions([ 'getPeople', 'getPlanets', 'getStarships' ])
}
</script>

<style scoped>
  .inline {
    display: inline-block;
  }
  .spacing {
    padding: 10px 0;
    margin: 0;
  }
</style>
