<template>
    <div class="Youtube">
        <Title title="Youtube"/>
        <div class="Youtube-wrapper">

        </div>
    </div>
</template>

<script>
  import Title from './Title.vue';
  export default {
    name: "Youtube",
    components: {Title},
    data() {
      return {
        videoId: '0o3tDTelBpQ'
      }
    }
  }
</script>

<style scoped lang="sass">
    @import "../assets/styles/variables"
    .Youtube
        width: 100%
        height: 100vh
        position: relative







</style>