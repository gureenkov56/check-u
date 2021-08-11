<template lang="">
  <div class="level-choise-wrapper">
    <div class="level-choise-item" @click="setLevel('begginer')">Begginer</div>
    <div class="level-choise-item" @click="setLevel('junior')">Junior</div>
    <div class="level-choise-item" @click="setLevel('middle')">Middle</div>
    <div class="level-choise-item" @click="setLevel('senior')">Senior</div>
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
  .level-choise-wrapper{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .level-choise-item{
    background-color: rgb(186, 170, 255);
    width: 200px;
    height: 180px;
    margin: 5px;
    text-align: left;
    border-radius: 4px;
  }
  .level-choise-item:hover{
    cursor: pointer;
  }
</style>