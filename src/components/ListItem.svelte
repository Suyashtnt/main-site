<script>
		import { fly } from 'svelte/transition'
		import { onMount } from 'svelte'
		let toggled = false
		export let thumb = "null";
		export let title = "null"
		export let desc = "null"
		export let link = "null"
		export let colour = "white"
		onMount( () => {
				toggled = true
		})
</script>

<style lang="sass">
  .main-div
    background: white
    padding: 10px 10px 10px 10px
    overflow: auto
    margin-right: 12px
    min-width: 21em
    margin-top: 10%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    border-top: 6px solid #00acee
    min-height: 255px
    &:hover
      div
        p.title
          font-size: 32px
          text-align: center
          color: var(--colour, black)
  .title
    font-size: 32px
    text-align: center
    color: black
  .desc
    font-size: 23px
    text-align: center
  .float-top
    float: top
</style>

{#if toggled}
	<a href={link}>
		<div transition:fly="{{ y: 200, duration: 500 }}" class="shadow hover:shadow-xl transition duration-500 ease-in-out w-1/4 main-div rounded-lg">
			<div class="md:flex-shrink-0">
				<img class="rounded-lg w-16 h-16 float-top mx-auto" src={thumb} alt="thumbnail">
			</div>
			<div class="mt-4 float-left">
				<p class="transition duration-500 ease-in-out mx-auto block mt-1 text-lg font-semibold text-gray-900e title" style="--colour: {colour}">{title}</p>
				<p class="mx-auto mt-2 text-gray-600 desc">{desc}</p>
			</div>
		</div>
	</a>
{/if}
