<template>
    <div class="Homepage">
        <Header></Header>
        <Music></Music>
        <Youtube></Youtube>
        <About></About>
        <Footer></Footer>
    </div>
</template>

<script>

  import Header from './Header.vue';
  import Music from './Music.vue';
  import Youtube from './Youtube.vue';
  import About from './About.vue';
  import Footer from './Footer.vue';

  export default {
    name: 'Homepage',
    props: {},
    components: {Youtube, Header, Music, About, Footer},
    data() {
      return {
        mobile: false
      }
    },

    computed: {
      isMobile() {
        // eslint-disable-next-line no-unused-expressions
        window.innerWidth < 768 ? this.mobile = true : this.mobile = false;
        return this.mobile;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

    @import "../assets/styles/variables"
    .Homepage
        width: 100%
        height: auto
        background-color: $main
        overflow: hidden





    @media screen and (min-width: 720px)
        .Homepage
            width: 100%
            height: auto
            justify-content: center
            align-items: center
            background: none






</style>
