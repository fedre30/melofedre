<template>
    <div class="Music">
        <Title title="Music"/>
        <div class="Music-wrapper">
            <div class="Music-song">
                <div class="Music-album"><img :src="song.image" alt=""></div>
                <div class="Music-song-title">{{song.title}}</div>
            </div>
            <div class="Music-container">
                <div class="Music-item" v-for="platform in platforms" :key="platform.name">
                    <div class="Music-image">
                        <img :src="platform.logo" alt="">
                    </div>
                    <a :href="platform.link" class="Music-link"
                       :style="isMobile ? '#FFF' : {color: platform.color}" target="_blank">{{platform.name}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import itunes from '../assets/img/itunes-logo-png-transparent.png';
  import apple from '../assets/img/Apple-music-icon.png';
  import spotify from '../assets/img/2000px-Spotify_logo_without_text.svg.png';
  import youtube from '../assets/img/YouTube_logo_(2013-2015).png';
  import google from '../assets/img/google_play_881808.png';
  import song_image from '../assets/img/pochette.jpg';
  import Title from './Title.vue';

  export default {
    name: "Music",
    components: {Title},
    data() {
      return {
        song: {
          title: 'Broken Rhythm',
          image: song_image
        },
        platforms: [
          {
            name: 'iTunes',
            logo: itunes,
            link: 'http://itunes.apple.com/album/id1444665969?ls=1&app=itunes',
            color: '#CE6AEE'
          },
          {
            name: 'Apple Music',
            logo: apple,
            link: 'http://itunes.apple.com/album/id/1444665969',
            color: '#EA6177'
          },
          {
            name: 'Spotify',
            logo: spotify,
            link: 'https://open.spotify.com/album/1OoWWIxlweDy0HolB0Pbex',
            color: '#1BD760'
          },
          {
            name: 'Google Play',
            logo: google,
            link: 'https://play.google.com/store/music/album/MeloFedre_Broken_Rhythm?id=Bjyyra24mqeeotcf72pzleg5j2y',
            color: '#0DCFFF'
          },
          {
            name: 'Youtube',
            logo: youtube,
            link: 'https://www.youtube.com/channel/UCnR1xQspydYVdkWNGMAKTug',
            color: '#DB2624'
          }
        ],

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

<style scoped lang="sass">
    @import "../assets/styles/all"
    .Music
        width: 100%
        margin: 3rem auto
        position: relative
        &-song
            margin: 2rem 0

        &-album
            width: 100%
            img
                width: 100%
        &-song-title
            font-size: 2rem
            font-weight: bold
            margin: 1rem
            color: white

        &-item
            width: 100%
            display: flex
            justify-content: center
            align-items: center
            margin: 2rem auto
            color: white

        &-image
            width: 2rem
            img
                width: 100%
        &-link
            font-size: 1.3rem
            margin-left: 1rem
        &-link a:hover
            color: $tertiary
    @media screen and (min-width: 720px)
        .Music
            width: 100%
            height: 100vh
            display: flex
            justify-content: center
            align-items: center
            position: relative

            &-wrapper
                width: 70%
                margin: 3rem auto
                display: flex
                justify-content: center
                align-items: center


            &-song
                width: 100%
            &-album
                width: 100%
            &-container
                width: 100%
                display: flex
                flex-direction: column
            &-item
                width: 100%
            &-image
                width: 2.5rem
            &-link
                font-size: 2rem

</style>
