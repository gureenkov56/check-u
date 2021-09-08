<template lang="">
  <div>
    <h2>{{ this.$store.state.questionsList[this.$store.state.category][progress] }}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return {
      progress: 0,
    }
  }
}
</script>

<style lang="">
  
</style>