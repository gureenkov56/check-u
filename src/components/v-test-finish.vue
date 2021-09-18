<template lang="">
  <div>
    <h1>Ваш результат</h1>
    <h3>Верно: {{ this.$store.state.usersResults.right.length }} | Неверно: {{ this.$store.state.usersResults.wrong.length }}</h3>
    <h2 v-if='this.$store.state.usersResults.wrong.length'>Вопросы с неверным ответом</h2>
    <div v-for='(answer, idx) in this.$store.state.usersResults.wrong' :key='idx' class="finishList">
      
      <h2>{{this.$store.state.questionsList[this.$store.state.category][answer.idQuestion].question}}</h2>
      <p>Правильный ответ:</p>
      <p>{{this.$store.state.questionsList[this.$store.state.category][answer.idQuestion].options[this.$store.state.questionsList[this.$store.state.category][answer.idQuestion].rightOption]}}</p>
    </div>

    <h2 v-if='this.$store.state.usersResults.right.length'>Вопросы с верным ответом</h2>
    <div v-for='(answer, idx) in this.$store.state.usersResults.right' :key='idx' class="finishList">
      <h2>{{this.$store.state.questionsList[this.$store.state.category][answer.idQuestion].question}}</h2>
      <p>Правильный ответ:</p>
      <p>{{this.$store.state.questionsList[this.$store.state.category][answer.idQuestion].options[this.$store.state.questionsList[this.$store.state.category][answer.idQuestion].rightOption]}}</p>
    </div>
    <button @click='setDefault'>
      На главную страницу
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    setDefault(){
      this.$store.commit('setDefaultData');
    }
  }
}

</script>
<style lang="css">
  .finishList{
    border: 1px solid grey;
    border-radius: 4px;
    margin: 10px auto;
    text-align: left;
    padding: 10px;
    max-width: 500px;
  }
</style>