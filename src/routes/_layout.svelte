<script context="module">
	export const preload = () => {};
</script>

<script lang="ts">
	import { stores } from "@sapper/app"
	/*
	 You may not want to use `segment`, but it is passed for the time being and will
	 create a warning if not expected: https://github.com/sveltejs/sapper-template/issues/210
	 https://github.com/sveltejs/sapper/issues/824
	*/
	export let segment: string = ""
	// Silence unused export property warning
	if (segment) {}
	const { page } = stores()
	let path: string
	$: path = $page.path.slice(1)
</script>

<style global lang="sass">
body
	background-color: #FBFBFB

@import "../global.pcss"
.title1
	font-size: 63px
	text-align: left
	align-self: center
h2
	font-size: 26px
	text-align: center
	align-self: center
.justify-evenly
	justify-content: space-evenly
.link
	transition: transform 200ms
	font-size: 23px
	&:hover
		transform: scale(1.2)

@media screen and (max-width: 980px)
  .grid
    display: grid
    grid-template-columns: 1fr
    grid-gap: 5px
    justify-items: center
</style>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home"}
	</title>
</svelte:head>

<ul class="flex justify-evenly" id="Nav">

	<li class="text-left">
		<a href='/' class="title1 mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">TNT Man Inc</a>
		<h2 class="text-black-600">Making random things since 2017(I think)</h2>
	</li>

	<li class="mt-12 link">
		<a href="about" class="text-black-600">About</a>
	</li>

	<li class="mt-12 link">
		<a href="amazing-people" class="text-black-600">Amazing people</a>
	</li>

	<li class="mt-12 link">
		<a href="https://moosik.tnt-man-inc.com" class="text-black-600">Latest Thing</a>
	</li>
</ul>
<hr class="mx-auto w-4/5 mt-3">
<slot />
<p class="mt-12">Made with ❤ and Svelte</p>
