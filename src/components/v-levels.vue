<template lang="">
  <div class="level-choise-wrapper">
    <h1>check-u</h1>
    <p>Выберите уровень</p>
    <div class="level-choise-item" id="begginer" @click="setLevel('begginer')">Begginer</div>
    <div class="level-choise-item" id="junior" @click="setLevel('junior')">Junior</div>
    <div class="level-choise-item" id="middle" @click="setLevel('middle')">Middle</div>
    <div class="level-choise-item" id="senior" @click="setLevel('senior')">Senior</div>
  </div>
</template>

<script>
export default {
  name: 'v-levels',
  methods:{
    setLevel(gettedLevel){
      this.$emit('setLevel', gettedLevel)
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
  #begginer{
    background-image: url('../assets/images/begginer-bg.jpg');
  }
  #junior{
    background-image: url('../assets/images/junior-bg.jpg');
  }
  #middle{
    background-image: url('../assets/images/middle-bg.jpg');
  }
  #senior{
    background-image: url('../assets/images/senior-bg.jpg');
  }
  .level-choise-item:hover{
    cursor: pointer;
  }
</style>