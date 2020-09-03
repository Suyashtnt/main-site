<script lang="typescript">
  import Website from '../components/Website.svelte'


  const list = [
    {
      thumb: "https://cdn.discordapp.com/avatars/718471280914858015/f4029a25c647c3e1640597b9193e5705.png?size=128",
      title: "Emoji Bot",
      desc: "this is my emoji bot",
      link: "https://bot.tnt-man-inc.com"
    },
    {
      thumb: "https://image.freepik.com/free-icon/music-note-symbol_318-49792.jpg",
      title: "moosik",
      desc: "A simple music player",
      link: "https://moosik.tnt-man-inc.com"
    }
  ]
</script>

<style lang="sass">
  h1
    font-family: 'Open Sans', sans-serif
    font-size: 83px
  h2
    font-size: 32px
    font-family: 'Open Sans', sans-serif
</style>

<div class="items-center">
    <h1>TNT Man inc</h1>
    <h2><span style="text-decoration: line-through;">Music with bass</span>Making random things since 2017(I think)</h2>
</div>

<div class="flex mx-auto">
{#each list as item }
<Website {...item} />
{/each}
</div>
