<template lang="">
  <div>
    <h1>Ваш результат</h1>
    <h3>Верно: {{ getUserResult.right.length }} | Неверно: {{ getUserResult.wrong.length }}</h3>
    <h2 v-if='getUserResult.wrong.length'>Вопросы с неверным ответом</h2>
    <div v-for='(answer, idx) in getUserResult.wrong' :key='idx' class="finishList">
      
      <h2>{{getQuestion(getCategory, answer.idQuestion).question}}</h2>
      <p>Правильный ответ:</p>
      <p>{{getRightAnswer(getCategory, answer.idQuestion)}}</p>
    </div>

    <h2 v-if='getUserResult.right.length'>Вопросы с верным ответом</h2>
    <div v-for='(answer, idx) in getUserResult.right' :key='idx' class="finishList">
      <h2>{{getQuestion(getCategory, answer.idQuestion).question}}</h2>
      <p>Правильный ответ:</p>
      <p>{{getRightAnswer(getCategory, answer.idQuestion)}}</p>
    </div>
    <button @click='setDefault'>
      На главную страницу
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    setDefault(){
      this.$store.commit('setDefaultData');
    }
  },
  computed: {
    ...mapGetters([
      'getUserResult',
      'getQuestion',
      'getCategory',
      'getRightAnswer'
    ])
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