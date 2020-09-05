<style lang="sass">
	p
	  text-align: center
	h1
	  text-align: center
	  font-size: 63px
</style>

<script lang="ts">
	import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    let toggled = false
	onMount( () => {
				setTimeout(() => toggled=true, 500)
	})
</script>

{#if toggled}
	<img transition:fade class="h-20 w-20 rounded-full mx-auto mt-12" alt="Thumbnail" src="https://cdn.discordapp.com/avatars/544194482527010836/352dda995d11cdc97814fbd633769728.png?size=128" />
	<h1 transition:fade>About</h1>
	<p transition:fade class="mt-10">Hello, I'm just a badly drawn TABS guy. I just make random things because why not.</p>
{/if}
