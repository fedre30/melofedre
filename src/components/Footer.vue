<template>
    <div class="Footer">
        <p>©MeloFedre</p>
    </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="sass">
.Footer
    width: 100vw
    height: 40px
    padding: 1rem 0 0 0
    background: linear-gradient(-90deg, #EECED8 0%, #D9A0AF 32%, #668EA8 100%)
    color: white
    font-size: 1rem
    line-height: 1.8rem
    @media screen and (min-width: 720px)
        font-size: 1.5rem

</style>
