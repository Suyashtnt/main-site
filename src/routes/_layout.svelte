<script context="module">
	export const preload = () => {};
</script>

<script>
	import { stores } from "@sapper/app";
	// You may not want to use `segment`, but it is passed for the time being and will
	// create a warning if not expected: https://github.com/sveltejs/sapper-template/issues/210
	// https://github.com/sveltejs/sapper/issues/824
	export let segment: string = "";
	// Silence unused export property warning
	if (segment) {}
	const { page } = stores();
	let path: string;
	$: path = $page.path.slice(1);
</script>

<style global lang="sass">
@import "../global.pcss"
.title1
	font-size: 63px
	text-align: center
h2
	font-size: 26px
	text-align: center
.justify-evenly
	justify-content: space-evenly
.link
	font-size: 23px
</style>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Index"}
	</title>
</svelte:head>

<ul class="flex justify-evenly">
	<li class="mt-12 link">
		<a href="about" class="text-black-600 mt-1 hover:underline">About</a>
	</li>

	<li class="text-center">
	<a href="https://tnt-man-inc.com" class="title1 mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline ">TNT Man Inc</a>
	<h2 class="text-black-600">Making random things since 2017(I think)</h2>
	</li>

	<li class="mt-12 link">
		<a href="https://moosik.tnt-man-inc.com" class="text-black-600 hover:underline">Latest Thing</a>
	</li>
</ul>

<slot />
