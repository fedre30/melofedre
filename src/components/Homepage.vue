<template>
    <div class="Homepage">
        <div class="Homepage-header"><img src="../assets/img/banniere.jpg" alt=""></div>
        <h1 class="Homepage-title">{{title}}</h1>

        <div class="Homepage-content">
            <div class="Homepage-song">
                <div class="Homepage-album"><img :src="song.image" alt=""></div>
                <div class="Homepage-song-title">{{song.title}}</div>
            </div>
            <div class="Homepage-item" v-for="platform in platforms" :key="platform.name">
                <div class="Homepage-image">
                    <img :src="platform.logo" alt="">
                </div>
                <a :href="platform.link" class="Homepage-link">{{platform.name}}</a>
            </div>
        </div>
    </div>
</template>

<script>
  import itunes from '../assets/img/itunes-logo-png-transparent.png';
  import apple from '../assets/img/Apple-music-icon.png';
  import spotify from '../assets/img/2000px-Spotify_logo_without_text.svg.png';
  import youtube from '../assets/img/YouTube_logo_(2013-2015).png';
  import song_image from '../assets/img/pochette.jpg';

  export default {
    name: 'Homepage',
    props: {},
    data() {
      return {
        title: 'MeloFedre',
        song: {
          title: 'Broken Rhythm',
          image: song_image
        },
        platforms: [
          {
            name: 'iTunes',
            logo: itunes,
            link: 'http://itunes.apple.com/album/id1444665969?ls=1&app=itunes'
          },
          {
            name: 'Apple Music',
            logo: apple,
            link: 'http://itunes.apple.com/album/id/1444665969'
          },
          {
            name: 'Spotify',
            logo: spotify,
            link: 'https://open.spotify.com/album/1OoWWIxlweDy0HolB0Pbex'
          },
          {
            name: 'Youtube',
            logo: youtube,
            link: 'https://www.youtube.com/channel/UCnR1xQspydYVdkWNGMAKTug'
          }
        ]
      }
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

        &-header
            width: 100%
            img
                width: 100%
        &-title
            font-family: 'Abril Fatface', cursive
            font-size: 3rem
            margin: 2rem 0

        &-content
            width: 80%
            margin: 3rem auto
        &-song
            margin: 2rem 0

        &-album
            width: 100%
            img
                width: 100%
        &-song-title
            font-size: 2rem
            font-weight: bold
            margin: 0.5rem

        &-item
            width: 100%
            display: flex
            justify-content: center
            align-items: center
            margin: 2rem auto

        &-image
            width: 2rem
            img
                width: 100%
        &-link
            font-size: 1.5rem
            margin-left: 1rem
        &-link a:hover
            color: $tertiary

    @media screen and (min-width: 720px)
        .Homepage
            &-header
                width: 50%
                margin: 0 auto
            &-content
                width: 50%
                margin: 0 auto
            &-album
                width: 50%
                margin: 0 auto


</style>
