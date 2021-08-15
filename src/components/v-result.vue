<template lang="">
  <div>
    <h2>Ваши результаты</h2>
    <p>Верные ответы: {{ results.right.length }}</p>
    <p>Стоит повторить: {{ results.wrong.length }}</p>
  </div>
</template>
<script>
export default {
  name: 'v-result',
  props: {
    results: {
      type: Object,
    }
  }
}
</script>
<style lang="">
  
</style>