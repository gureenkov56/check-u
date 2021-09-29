<template lang="">
  <div class="level-choise-wrapper">
    <h1>check-u</h1>
    <p>Выберите категорию</p>
    <div 
      v-for='(category, key) in this.$store.state.questionsList' 
      :key='category'
      @click="setLevel(key)"
      class="level-choise-item"
      :id="key"
      >
      {{ key.toUpperCase() }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-levels',
  methods:{
    setLevel(gettedLevel){
      this.$store.commit('setCategory', gettedLevel);
    }
  }
}
</script>

<style lang="css">
  .level-choise-item{
    width: 300px;
    height: 70px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    font-size: 20px;
  }
  #html{
    background-image: url('../assets/images/begginer-bg.jpg');
  }
  #css{
    background-image: url('../assets/images/junior-bg.jpg');
  }
  #javascript{
    background-image: url('../assets/images/middle-bg.jpg');
  }
  #php{
    background-image: url('../assets/images/senior-bg.jpg');
  }
  .level-choise-item:hover{
    cursor: pointer;
    transition: all .5s;
    transform: scale(1.05);
  }
</style>