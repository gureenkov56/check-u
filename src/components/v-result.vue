<template lang="">
  <div>
    <h2>Ваши результаты</h2>
    <p>Стоит повторить: {{ results.wrong.length }}</p>
    <div class="wrongElement" v-for='(elem, key) in results.wrong' :key='key'>
      <p>{{ elem.question }}</p>
      <p 
        @click='elem.isShowAnswerInTheEnd = !elem.isShowAnswerInTheEnd'
        class='showAnswerInTheEnd'
        >
        Показать ответ &#9650;	
      </p>
      <p v-if='elem.isShowAnswerInTheEnd'>{{ elem.answer }}</p>
    </div>
    <p>Верные ответы: {{ results.right.length }}</p>
    <div class="wrongElement" v-for='(elem, key) in results.right' :key='key'>
      <p>{{ elem.question }}</p>
      <p 
        @click='elem.isShowAnswerInTheEnd = !elem.isShowAnswerInTheEnd'
        class='showAnswerInTheEnd'
        >
        Показать ответ &#9660;
      </p>
      <p v-if='elem.isShowAnswerInTheEnd'>{{ elem.answer }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-result',
  props: {
    results: {
      type: Object,
    }
  },
}
</script>
<style lang="css">
  .wrongElement{
    max-width: 800px;
    margin: 20px auto;
    box-shadow: rgb(219, 219, 219) 0px 0px 20px;
    border-radius: 15px;
    text-align: left;
    padding: 15px 5px;
  }
  .showAnswerInTheEnd{
    color: rgb(138, 138, 255);
    text-decoration: underline;
  }
</style>