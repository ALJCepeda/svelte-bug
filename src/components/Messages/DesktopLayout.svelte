<script lang="ts">
	import { goto } from '$app/navigation'

	import IconWrapper from '$components/_common/IconWrapper.svelte'
	import { ChevronIcon } from '$components/_icons'
	import { numOverlays } from '$src/stores/layout'
	import { onDestroy, onMount } from 'svelte'

	const handleBackClick = () => {
		if (history.state['sveltekit:index'] > 0) {
			history.back()
		} else {
			goto('/account/inbox/messages')
		}
	}

	onMount(() => {
		numOverlays.update((n) => n + 1)
	})

	onDestroy(() => {
		numOverlays.update((n) => n - 1)
	})
</script>

<div class="hidden sm:flex sm:h-[calc(100vh_-_6.25rem)]">
	<div
		class="relative flex flex-col h-full w-full sm:w-80 sm:border-r sm:flex-shrink-0"
	>
		<div class="pl-4.5 flex items-center space-x-3.5 flex-shrink-0 py-5">
			<button on:click={handleBackClick}>
				<IconWrapper
					Icon={ChevronIcon}
					size={24}
					fill="primary"
					rotation={180}
				/>
			</button>
			<div class="flex items-center">
				<h3>Messages</h3>
			</div>
		</div>
	</div>

	<slot />
</div>
