<script context="module">
		export function preload({}) {
				return fetch("sitemap.xml");
		}
</script>

<script lang="ts">
    import { fade } from 'svelte/transition'
    import ListI from '../components/ListItem.svelte'
		import { onMount } from "svelte";

    const list: {thumb: string, title: string, desc: string, link: string, colour: string; }[] = [
  {
    thumb: "https://cdn.discordapp.com/avatars/718471280914858015/f4029a25c647c3e1640597b9193e5705.png?size=128",
    title: "Emoji Bot",
    desc: "this is my emoji bot, it does everything emoji related.",
    link: "https://bot.tnt-man-inc.com",
	  colour: "#18c921"
  },
  {
    thumb: "https://image.freepik.com/free-icon/music-note-symbol_318-49792.jpg",
    title: "moosik",
    desc: "A simple music player",
    link: "https://moosik.tnt-man-inc.com",
	  colour: "black"
  },
  {
    title: "weather",
    desc: "simple weather app that is also a PWA. My last website i used Vue for",
    link: "https://weather.tnt-man-inc.com",
    thumb: "https://image.flaticon.com/icons/png/512/146/146204.png",
	  colour: "#ffcf0e"
  },
  {
    title: "JARM",
    desc: "Just another ruby mod. Totally doesn't have a biome, new materials based of rubies, trees and soon a new dimension.",
    link: "https://www.curseforge.com/minecraft/mc-mods/jarm-fabric-edition",
    thumb: "https://media.forgecdn.net/avatars/thumbnails/281/18/64/64/637284086935533313.png",
	  colour: "#b20f22"
  },
  {
    title: "Super svelte template",
    desc: "a template i made, even though i dont even use it",
    link: "https://github.com/Suyashtnt/Super-Svelte-Template",
    thumb: "https://raw.githubusercontent.com/Suyashtnt/Super-Svelte-Template/master/docs/svelte-logo.svg",
	  colour: "#0984e3"
  },
  {
    title: "Emoji mover(An extension to emoji bot)",
    desc: "Takes the emojis from one discord server and copies them to your server. Also my first deno project",
    link: "https://github.com/Suyashtnt/emoji-mover",
    thumb: "https://deno.land/logo.svg",
	  colour: "#18c921"
  }
  ]
	let toggled = false;
	onMount( () => {
			setTimeout(() => toggled=true, 500)
	})
</script>

<style lang="sass">
	.grid
	  display: grid
	  grid-template-columns: 1fr 1fr 1fr
	  grid-gap: 10px
	  justify-items: center
	.title1
	  font-size: 38px
	  text-align: center
	h2
	  font-size: 17px
	  text-align: center


	@media screen and (max-width: 980px)
		.grid
			display: grid
			grid-template-columns: 1fr
			grid-gap: 5px
			justify-items: center
</style>

{#if toggled}
	<h1 transition:fade="{{duration: 500}}" class="title1 mt-10"> Welcome to the main site!</h1>
	<h2 transition:fade="{{duration: 500}}">Nothing much to see here, here is a list of what i have made tho </h2>

	<div class="self-center w-4/5 grid mx-auto">
	{#each list as item }
		<ListI  {...item} />
	{/each}
	</div>
{/if}
