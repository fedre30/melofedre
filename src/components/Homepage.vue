<template>
    <div class="Homepage">
        <Header></Header>
        <Music v-scroll-reveal.reset="{delay: (isMobile ? 50 : 250)}"></Music>
        <div class="Youtube"  v-scroll-reveal.reset="{delay: (isMobile ? 50 : 250)}">
            <Title title="Youtube"/>
            <div class="Youtube-wrapper">
                <div class="Youtube-downloads">
                    <h3 class="Youtube-downloads-title">Downloads</h3>
                    <ul class="Youtube-list">
                        <li class="Youtube-item" v-for="doc in downloads" :key="doc.path"><a target="_blank" :href="doc.path" :download="doc.title">{{doc.title}}</a></li>
                    </ul>
                </div>
                <div class="Youtube-player">
                <youtube :video-id="videoId" :width="isMobile ? 360 : 790" :height="isMobile? 240 : 560"></youtube>
                </div>
            </div>
        </div>
        <About v-scroll-reveal.reset="{delay: (isMobile ? 50 : 250)}"></About>
        <Footer></Footer>
    </div>
</template>

<script>

  import Header from './Header.vue';
  import Music from './Music.vue';
  import About from './About.vue';
  import Footer from './Footer.vue';
  import Title from './Title.vue';

  export default {
    name: 'Homepage',
    props: {},
    components: {Title, Header, Music, About, Footer},
    data() {
      return {
        mobile: false,
        videoId: '0o3tDTelBpQ',
        downloads: [
          {
            title: 'Parigi economica',
            path: './assets/docs/'
          }
        ]
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
    .Youtube
        width: 100%
        height: 100vh
        position: relative
        color: white
        &-player
            width: 100%
        &-wrapper
            display: flex
            width: 100%
            margin: 3rem 0
            justify-content: center
            align-items: center
            flex-direction: column
        &-downloads
            width: 100%
            margin-bottom: 5rem
        &-downloads-title
            text-align: center
            font-size: 2rem
            margin: 0 0 2rem 0

    @media screen and (min-width: 720px)
        .Homepage
            width: 100%
            height: auto
            justify-content: center
            align-items: center
            background: none
        .Youtube
            width: 100%
            height: 100vh
            position: relative
            display: flex
            justify-content: center
            align-items: center

            &-player
                width: 100%
            &-wrapper
                display: flex
                width: 80%
                margin: 3rem auto
                justify-content: center
                align-items: center
                flex-direction: row
                color: $text
            &-downloads
                width: 100%
            &-downloads-title
                text-align: center
                font-size: 3rem
                margin: 0 0 2rem 0




</style>
