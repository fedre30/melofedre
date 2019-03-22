<template>
    <div class="Header">
        <div class="Header-opaque"></div>
        <div class="Header-header-image"></div>
        <h1 class="Header-title tracking-in-expand-no-infinite">{{title}}</h1>
        <div class="Header-scroll tracking-in-expand">scroll <span class="Header-underline"></span></div>
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
    @import "../assets/styles/all"
    .Header
        width: 100%
        height: 100vh
        margin-bottom: 3rem
        color: white
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column

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
            display: block
            color: white
            position: absolute
            bottom: 3rem
            left: 45%
            font-size: 1.5rem
        &-underline
            width: 50px
            height: 3px
            position: absolute
            top: 30px
            left: 20px
            background-color: white
            font-size: 1.5rem

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
