<template>
    <div class="Title">
        <p>{{title}}</p>

    </div>

</template>

<script>
  export default {
    name: "Title",
    props: {
      title: {type: String, default: 'Text'}
    }
  }
</script>

<style scoped lang="sass">
    .Title

        width: 100%
        height: 50px
        padding: 2rem 2rem 2rem 0
        background-image: linear-gradient(-90deg, #EECED8 0%, #D9A0AF 32%, #668EA8 100%)
        color: white
        font-size: 3.5rem
        font-weight: 100
        line-height: 3rem
        text-align: center

    @media screen and (min-width: 720px)
        .Title
            position: absolute
            top: 5rem
            right: 0
            width: 400px
            height: 50px
            padding: 1rem
            background-image: linear-gradient(-90deg, #EECED8 0%, #D9A0AF 32%, #668EA8 100%)
            color: white
            font-size: 3.5rem
            font-weight: 100
            line-height: 3rem


</style>