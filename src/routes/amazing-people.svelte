<script>
		import { fade } from 'svelte/transition'
		import { onMount } from 'svelte'
		let toggled = false
		onMount( () => {
				setTimeout(() => toggled=true, 500)
		})
</script>

<style lang="sass">
  h1
    font-size: 38px
    text-align: center
  li
    text-align: center
    margin-top: 10px
</style>


{#if toggled}
	<h1 transition:fade> All the people who helped make this site and others possible, most from discord</h1>
	<ul>
		<li transition:fade>Rich Harris - Making svelte</li>
		<li transition:fade>Evan You - creating vue</li>
		<li transition:fade>CEO of discord - for creating discord</li>
		<li transition:fade>Sebs - help debug moosik and this site</li>
		<li transition:fade>Charlie P - help debug the css and design ideas for this site</li>
		<li transition:fade>m1sf3t - help with animation debugging</li>
		<li transition:fade>Adam Wathan - creating tailwind</li>
		<li transition:fade>Jetstrap - Helping me a lot in general</li>
		<li transition:fade>Many, Many more that are deep into discord servers</li>
	</ul>
{/if}
