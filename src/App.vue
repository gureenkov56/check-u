<template>
  <div>
    <VLevels v-if='!this.$store.state.category'></VLevels>
    <VAsker v-else-if='!this.$store.state.finishOfTest' />
    <VTestFinish v-else-if='this.$store.state.finishOfTest' />
  </div>
</template>

<script>

/****
 * toDo: - Сделать кнопку "Закончить тест"
 *       - всегда показывать "Далее", но делать неактивной
 *       - результаты подкрасить красным м зеленым
 */



import VLevels from './components/v-levels.vue';
import VAsker from './components/v-asker.vue';
import VTestFinish from './components/v-test-finish.vue'



export default {
  name: 'App',
  components: {
    VLevels,
    VAsker,
    VTestFinish
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

body{
  padding: 0px 10px;
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

button{
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(29, 160, 68);
  padding: 10px;
  margin: 20px;
  cursor: pointer;
  border-radius: 4px;
}


</style>
