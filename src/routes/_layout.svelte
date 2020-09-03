<script context="module">
	export const preload = () => {};
</script>

<script lang="ts">
	import { stores } from "@sapper/app";

	// You may not want to use `segment`, but it is passed for the time being and will
	// create a warning if not expected: https://github.com/sveltejs/sapper-template/issues/210
	// https://github.com/sveltejs/sapper/issues/824
	export let segment: String = "";
	// Silence unused export property warning
	if (segment) {}

	const { page } = stores();

	let path: String;
	$: path = $page.path.slice(1);
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
	<title>
		TNT Man Inc
	</title>
</svelte:head>



<slot />
