<template>
    <div class="About">
        <Title title="About"/>
        <div class="About-wrapper">
            <div class="About-image">
                <img :src="image"/>
            </div>
            <div class="About-text">{{text}}</div>

        </div>
    </div>
</template>

<script>
    import Title from './Title.vue'
    import image from '../assets/img/F_detoure.png'
  export default {
    name: "About",
    components: {Title},
    data(){
      return {
        image: image,
        text: 'People may define me as a curious "multi-potentialist": I have many passions that I\'d like to combine in one. Any sort of art really thrills me such as cinema, video-making, photography, dance, and most of all music, which has been part of my life since I was such a cutie tiny girl. At present I can play violin, piano, guitar and ukulele but I mostly enjoy composing songs.\n' +
          '\n' +
          'Why? Well, composing and all my interests have a thing in common: it\'s all about language learning.\n' +
          '\n' +
          'I\'ve been learning four foreign languages (in addition to my mother tongue) because I love decrypting and manipulating symbols and sounds, in order to communicate.\n' +
          '\n' +
          'That\'s why logical and computing languages are very challenging to me.'
      }
    }
  }
</script>

<style scoped lang="sass">
    .About
        width: 100%
        height: 100vh
        position: relative
    @media screen and (min-width: 720px)
        .About
            width: 100%
            height: 100vh
            display: flex
            justify-content: center
            align-items: center
            position: relative
            &-wrapper
                width: 80%
                margin: 3rem auto
                display: flex
                justify-content: center
                align-items: center
            &-image
                width: 120%
                position: relative

                img
                    width: 100%
                    position: absolute
                    top: -20.3rem
                    left: -3rem
            &-text
                width: 100%
                font-size: 1.2rem
                line-height: 3rem
                text-align: left



</style>