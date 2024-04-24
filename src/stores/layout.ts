import { writable } from 'svelte/store'

export enum AppStatuses {
	INITIAL_LOAD = 'initial-load',
	FETCHING_TOKEN = 'fetching-cookies',
	FETCHING_USER = 'fetching-user',
	READY = 'ready'
}

export const isAccessedFromWebview = writable(false)
export const webviewInsetsTop = writable<number>()
export const webviewInsetsBottom = writable<number>()
export const webviewKeyboardIsOpen = writable<boolean>(false)

export const mockDataEnabled = writable(false)
export const appStatus = writable(AppStatuses.INITIAL_LOAD)
export const scrollY = writable(0)
export const windowHeight = writable(undefined as number)
export const additionalPadding = writable(0)
export const disableHeaderShadow = writable(false)
export const rollbackHeader = writable(false)
export const rollbackHeaderComponent = writable({ component: undefined, props: undefined })
export const showHeaderBack = writable(false)
export const forceHeaderShadow = writable(false)
export const headerBackDefault = writable('')
export const flashAction = writable(undefined)
export const loginOptions = writable(undefined)
export const loginOptionsLoading = writable(false)
export const platform = writable('Uknown')
export const showSpinner = writable(false)
export const bottomSheet = writable({ component: undefined, props: undefined })
export const activeModal = writable({ component: undefined, props: undefined })
export const successfulInitialLoad = writable(false)
export const numOverlays = writable(0)
export const errors = writable([])

export const protectedActionMessage = writable(undefined)
export const actionAfterLogin = writable(undefined)
export const protectedActionParams = writable(undefined)

export const headerEl = writable(undefined)
export const heroImgDesktop = writable(undefined)

export const showUserMenuDrawer = writable(false)
export const disableUserMenuDrawerFly = writable(false)
export const showMainMenu = writable(false)

export const appNotification = writable(undefined)
export const retractMobileFooter = writable(false)
export const hideMobileFooter = writable(false)
export const footerH = writable<number>()
export const activeHomeScreenTab = writable(1)
export const zendeskSnippetKey = writable(undefined)
export const tinyfaceModelsLoaded = writable(false)
export const nativeAppFooterHeight = writable<number>()

export const homeScreenTextOverflowing = writable(false)
export const homeScreenTabNav = writable<HTMLDivElement>()
export const addedTranslateDistance = writable<number>(0)
export const searchBarDistFromTop = writable<number>(368)
