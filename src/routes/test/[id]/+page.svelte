<script lang="ts">
	import { beforeNavigate } from '$app/navigation'
	import FullScreenDrawer from '$components/FullScreenDrawer.svelte'
	import Conversation from '$components/Messages/Conversation.svelte'
	import { onDestroy, onMount } from 'svelte'
	import { page } from '$app/stores'
	import { conversationList, unreadChats } from '$src/stores/chat'
	import { forceHeaderShadow } from '$src/stores/layout'
	import { screenSizes } from '$src/styles/styles'

	let mounted = false
	let windowW: number

	$: roomUid = $page.params.id

	onMount(() => {
		forceHeaderShadow.set(true)
		mounted = true
	})

	onDestroy(() => {
		conversationList.setActiveConversaionUid(undefined)
		forceHeaderShadow.set(false)
	})

	beforeNavigate((navDetails) => {
		if (navDetails.from.route.id !== navDetails.to.route.id) {
			conversationList.setDetailsExpanded(false)
		}
	})

	$: if (roomUid) {
		conversationList.setActiveConversaionUid(roomUid)
	}

	$: if ($unreadChats[roomUid]) {
		unreadChats.removeRoom(roomUid)
	}
</script>

<svelte:window bind:innerWidth={windowW} />

{#if $conversationList.activeConversationUid}
	{#if windowW >= screenSizes.sm}
		<FullScreenDrawer>
			<Conversation />
		</FullScreenDrawer>
	{:else}
		<FullScreenDrawer>
			<Conversation />
		</FullScreenDrawer>
	{/if}
{/if}
