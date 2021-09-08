<template>
  <div>
    <VLevels @setLevel="setLevel" v-if='!this.$store.state.category'></VLevels>
    <VAsker v-else/>
  </div>
</template>

<script>

import VLevels from './components/v-levels.vue';
import VAsker from './components/v-asker.vue';

export default {
  name: 'App',
  components: {
    VLevels,
    VAsker,
  },
  methods: {
    setLevel(level){
      this.$store.commit('setCategory', level);
      console.log(level);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

body{
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  padding: 0;
}
</style>
