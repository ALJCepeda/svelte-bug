<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte'

	export let isActive = false
	export let isHover = false
	export let size = undefined as number
	export let fill = ''
	export let Icon: ComponentType<SvelteComponent<any>>
	export let svgClasses = ''
	export let rotation = 0
	export let classes = ''

	$: props = {}
	$: if (fill) props['fill'] = fill
	$: if (svgClasses) props['svgClasses'] = svgClasses
	$: if (isActive) props['isActive'] = true
	$: if (isHover) props['isHover'] = true
</script>

<div
	class="container {classes}"
	style="width: {size}px; height: {size}px; transform: rotate({rotation}deg);"
>
	<svelte:component this={Icon} {...props} />
</div>
