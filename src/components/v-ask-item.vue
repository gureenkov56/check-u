<template lang="">
  <div>
    <p>{{item.question}}</p>
    <button @click="showAnswer">Показать ответ</button>
    <p v-if="isShow">{{item.answer}}</p>
  </div>
</template>

<script>
export default {
  name: 'v-ask-item',
  data(){
    return {
      isShow: this.item.isShowAnswer
    }
  },
  props: {
    key: {
      type: Number,
    },
    item: {
      type: Object,
    }
  },
  methods: {
    showAnswer(){
      this.isShow = !this.isShow;
    }
  }
}
</script>

<style lang="">
  
</style>