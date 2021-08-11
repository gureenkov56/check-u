<template>
  <VLevels @setLevel="setLevel"></VLevels>
  <VAsk v-if='level'></VAsk>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 1000px;
}
</style>
