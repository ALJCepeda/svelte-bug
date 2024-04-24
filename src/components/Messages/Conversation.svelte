<script lang="ts">
	import { conversationList } from '$src/stores/chat';
	import { screenSizes } from '$src/styles/styles'

	let initialDefaultExpansionTookPlace = false
	let windowW
	let wrapperH
	let outerWrapperEl

	let titleInterval
	let windowBlurred = false
	let browserTitle = 'Inbox | CashorTrade'

	const setTransformIndividual = () => {
		if (outerWrapperEl?.clientWidth > 1100) {
			conversationList.updateValue('transformIndividualMessages', false)
		} else {
			conversationList.updateValue('transformIndividualMessages', true)
		}
	}

	const handleWindowFocus = () => {
		browserTitle = 'Inbox | CashorTrade'
		clearInterval(titleInterval)
		titleInterval = undefined
		windowBlurred = false
	}

	let resizeTimeout;

	const handleResize = () => {
		clearTimeout(resizeTimeout)
		resizeTimeout = setTimeout(setTransformIndividual, 50)
		getSizes()
	}

	const getSizes = () => {
		if (windowW >= screenSizes.xl && !initialDefaultExpansionTookPlace) {
			initialDefaultExpansionTookPlace = true
			console.log('initialDefaultExpansionTookPlace', initialDefaultExpansionTookPlace);
			conversationList.setDetailsExpanded(true)
		}
	}

	$: if (outerWrapperEl) {
		setTransformIndividual()
	}

	$: if ($conversationList.detailsExpanded) {
		console.log('conversationList.detailsExpanded', $conversationList.detailsExpanded);
		getSizes()
		setTransformIndividual()
	}
</script>

<svelte:head>
	<title>{browserTitle}</title>
</svelte:head>

<svelte:window
	bind:innerWidth={windowW}
	on:blur={() => (windowBlurred = true)}
	on:focus={handleWindowFocus}
	on:resize={handleResize}
/>

<div class="flex w-full z-0">
	<div
		class="fixed sm:relative w-full h-full sm:h-[calc(100vh_-_6.25rem)] flex-1"
		bind:clientHeight={wrapperH}
	>
		We're here!
	</div>
</div>
