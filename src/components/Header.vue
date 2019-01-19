<template>
    <div class="Header">
        <div class="Header-opaque"></div>
        <div class="Header-header-image"></div>
        <h1 class="Header-title">{{title}}</h1>
        <div class="Header-scroll">scroll <span class="Header-underline"></span></div>
    </div>
</template>

<script>
  export default {
    name: "Header",
    components: {},
    data() {
      return {
        title: 'MeloFedre',
      }
    }
  }
</script>

<style scoped lang="sass">
    @import "../assets/styles/variables"
    .Header
        width: 100%
        margin-bottom: 3rem

        &-header-image
            width: 100%
            height: 30vh
            background: url("../assets/img/banniere.jpg") no-repeat
            background-size: cover
        &-title
            font-family: 'Abril Fatface', cursive
            font-size: 4rem
            margin: 2rem 0
        &-scroll
            display: none

    @media screen and (min-width: 720px)
        .Header
            width: 100vw
            height: 100vh
            &-opaque
                width: 100%
                height: 100vh
                position: absolute
                top: 0
                left: 0
                background-color: rgba(255, 255, 255, 0.5)
                z-index: 1
            &-header-image
                width: 100%
                height: 100vh
                position: absolute
                top: 0
                left: 0
                background: url("../assets/img/banniere.jpg") no-repeat
                background-size: cover

            &-title
                position: absolute
                top: 40%
                left: 35%
                font-size: 7rem
                color: $text
                z-index: 2
            &-scroll
                display: block
                color: white
                position: absolute
                bottom: 3rem
                left: 45%
                font-size: 2rem
            &-underline
                width: 50px
                height: 3px
                position: absolute
                top: 40px
                left: 30px
                background-color: white
                font-size: 2rem


</style>