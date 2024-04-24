<script lang="ts">
	import { onDestroy, onMount, setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import DesktopLayout from '$components/Messages/DesktopLayout.svelte'
	import { Spinner } from '$components/_common/index.js'
	import { userOnChatPage } from '$src/stores/chat'
	import { screenSizes } from '$src/styles/styles'

	let loggedIn = true

	setContext('cotMessageCenter', {
		showDownload: writable(false),
		showUpload: writable(false),
		showMailingLabel: writable(false),
		showTrackingNumber: writable(false),
		showAddressForm: writable(false),
		showTransferInstructions: writable(false)
	})
	const windowW = writable(0);
	setContext('windowW', windowW);

	onMount(() => {
		userOnChatPage.set(true)
	})

	onDestroy(() => {
		console.log('destroying layout.svelte');
		userOnChatPage.set(false)
	})
</script>

<svelte:window bind:innerWidth={$windowW} />

{#if loggedIn && windowW}
	{#if windowW >= screenSizes.sm}
		<DesktopLayout>
			<slot />
		</DesktopLayout>
	{:else}
		<slot />
	{/if}
{:else}
	<Spinner size={150} />
{/if}
