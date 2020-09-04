<script>
	import { fly } from 'svelte/transition';
		import { onMount } from 'svelte'
	let toggled = false
    export let thumb = "null";
    export let title = "null"
    export let desc = "null"
    export let link = "null"

    onMount( () => {
    		toggled = true
    })
</script>

<style lang="sass">
.main-div
  background: #FBFBFB
  padding: 10px
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
.title
  font-size: 32px
  text-align: center
.desc
  font-size: 23px
  text-align: center
.float-top
  float: top
</style>

{#if toggled}
<div transition:fly="{{ y: 200, duration: 2000 }}" class="shadow hover:shadow-xl transition duration-500 ease-in-out w-1/4 main-div rounded-lg">
    <div class="md:flex-shrink-0">
        <img class="rounded-lg w-16 h-16 float-top mx-auto" src={thumb} alt="thumbnail">
    </div>
    <div class="mt-4 float-left">
        <a href={link} class="mx-auto block mt-1 text-lg font-semibold text-gray-900 hover:underline title">{title}</a>
        <p class="mx-auto mt-2 text-gray-600 desc">{desc}</p>
    </div>
</div>
{/if}
