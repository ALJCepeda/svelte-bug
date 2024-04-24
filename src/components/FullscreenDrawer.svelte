<script lang="ts">
import { fly } from 'svelte/transition'
import { cubicOut } from 'svelte/easing'
import { onDestroy, onMount } from 'svelte'
import { numOverlays } from '$src/stores/layout'

onMount(() => {
	numOverlays.update((n) => n + 1)
})

onDestroy(() => {
	numOverlays.update((n) => n - 1)
})
</script>

<div
transition:fly|global={{
	duration: 300,
		x: 500,
		y: 0,
		opacity: 1,
		easing: cubicOut
}}
id="mobile-wrapper"
class="wrapper"
	>
	<slot />
	</div>

	<style>
.wrapper {
@apply bg-white shadow-6;
	box-sizing: border-box;
	position: fixed;
	width: 100%;
	height: 100vh;
	height: -webkit-fill-available;
	right: 0;
	top: 0;
	z-index: 1100;
}
</style>
