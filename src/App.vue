<template>
  <VLevels @setLevel="setLevel" v-if='!level'></VLevels>
  <VAsk v-if='level' :level='level'></VAsk>
  
</template>

<script>
import VAsk from './components/v-ask'
import VLevels from './components/v-levels.vue';

export default {
  name: 'App',
  components: {
    VAsk,
    VLevels,
  },
  data(){
    return {
      level: undefined,
    }
  },
  methods: {
    setLevel(gettedLevel){
      this.level = gettedLevel;
    }
  },
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
