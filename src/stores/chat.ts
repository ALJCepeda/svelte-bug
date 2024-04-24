import { derived, writable } from 'svelte/store'

export const storedMessages = writable({})

interface INewConversation {
	loading: boolean
	loadingMore: boolean
	offset: number
	total: number
	messages: any[]
	lastUpdated: Date
}

export interface IModifiedChatRoomListResponse {
	lastMessageText: string;
}

const createEmptyConversation = () => {
	return {
		loading: false,
		loadingMore: false,
		offset: 0,
		total: undefined,
		messages: [],
		lastUpdated: new Date()
	}
}

function createConversationListStore() {
	const initialState = {
		activeConversationUid: undefined as string,
		conversations: {}, // Main source of messages and conversation info
		detailsExpanded: true,
		transformIndividualMessages: false,
		rooms: {
			// used for conversation previews
			total: 0,
			results: []
		},
		headlessMessagesByRoom: {},
		roomsToMarkUnread: [],
		initialLoadTookPlace: false,
		loading: false,
		loadingMore: false,
		offset: 0,
		total: 0,
		newMessageAbove: false
	}
	const { subscribe, set, update } = writable(initialState)
	
	const addFullProposalToConversation = (proposal) => {
		update((obj) => {
			const conversation = {
				...obj.conversations[obj.activeConversationUid],
				proposal
			}
			
			return {
				...obj,
				conversations: {
					...obj.conversations,
					[obj.activeConversationUid]: conversation
				}
			}
		})
	}
	
	const addOfferToConversation = (offer) => {
		update((obj) => {
			const conversation = {
				...obj.conversations[obj.activeConversationUid],
				offer
			}
			
			return {
				...obj,
				conversations: {
					...obj.conversations,
					[obj.activeConversationUid]: conversation
				}
			}
		})
	}
	
	const addHeadlessMessage = (socketMessage: any) => {
		update((obj) => {
			const headlessMessagesByRoom = {...obj.headlessMessagesByRoom}
			const existingArray = headlessMessagesByRoom[socketMessage.room]
			if (existingArray) {
				headlessMessagesByRoom[socketMessage.room] = [...existingArray, socketMessage]
			} else {
				headlessMessagesByRoom[socketMessage.room] = [socketMessage]
			}
			return {
				...obj,
				headlessMessagesByRoom
			}
		})
	}
	
	const removeHeadlessArray = (uid: string) => {
		update((obj) => {
			const headlessMessagesByRoom = {...obj.headlessMessagesByRoom}
			delete headlessMessagesByRoom[uid]
			return {
				...obj,
				headlessMessagesByRoom
			}
		})
	}
	
	const prependMessagesToConversationFromEndpoint = (convoUid: string, olderMessages: any[], offset) => {
		update((obj) => {
			const conversation = obj.conversations[convoUid]
			const messages = [...olderMessages, ...conversation.messages]
			
			conversation.messages = messages
			conversation.offset = offset
			
			return {
				...obj,
				conversations: {
					...obj.conversations,
					[obj.activeConversationUid]: conversation
				}
			}
		})
	}
	
	const addPendingMessageToConversation = (message) => {
		update((obj) => {
			const conversation = obj.conversations[obj.activeConversationUid]
			const messages = [...conversation.messages, message]
			
			conversation.messages = messages
			
			return {
				...obj,
				conversations: {
					...obj.conversations,
					[obj.activeConversationUid]: conversation
				}
			}
		})
	}
	
	const removeRoomFromUnreadList = (uid: string) => {
		update((obj) => {
			const newUnreadRoomsArr = [...obj.roomsToMarkUnread]
			const indexToRemove = newUnreadRoomsArr.indexOf(uid)
			newUnreadRoomsArr.splice(indexToRemove)
			return {
				...obj,
				roomsToMarkUnread: newUnreadRoomsArr
			}
		})
	}
	
	const updatePendingMessageError = (convoUid: string, pendingUid: string, errorType: string) => {
		update((obj) => {
			const conversation = obj.conversations[convoUid]
			const messageIndex = conversation.messages.findIndex((m) => m.uid === pendingUid)
			conversation.messages[messageIndex].status = 'not-delivered'
			let errorObj
			switch (errorType) {
				case 'offensive':
					errorObj = {
						text: 'Not delivered.',
						type: errorType
					}
					break
			}
			conversation.messages[messageIndex].error = errorObj
			
			return {
				...obj,
				conversations: {
					...obj.conversations,
					[convoUid]: conversation
				}
			}
		})
	}
	
	const updatePendingMessageSuccess = (convoUid: string, pendingUid: string) => {
		update((obj) => {
			const conversation = obj.conversations[convoUid]
			const messageIndex = conversation.messages.findIndex((m) => m.uid === pendingUid)
			conversation.messages[messageIndex].status = 'success'
			
			return {
				...obj,
				conversations: {
					...obj.conversations,
					[convoUid]: conversation
				}
			}
		})
	}
	
	const setActiveConversaionUid = (uid: string) => {
		console.log('setActiveConversationUid:', uid);
		update((obj) => {
			return {
				...obj,
				activeConversationUid: uid
			}
		})
	}
	
	const setConvoLoading = (uid: string, loading: boolean) => {
		update((obj) => {
			const conversation = {
				...obj.conversations[uid],
				loading
			}
			
			return {
				...obj,
				conversations: {
					...obj.conversations,
					[uid]: conversation
				}
			}
		})
	}
	
	const setConvoLoadingMore = (uid: string, loadingMore: boolean) => {
		update((obj) => {
			const conversation = {
				...obj.conversations[uid],
				loadingMore
			}
			
			return {
				...obj,
				conversations: {
					...obj.conversations,
					[uid]: conversation
				}
			}
		})
	}
	
	const setDetailsExpanded = (expanded: boolean) => {
		debugger;
		console.log('expanded:', expanded)
		update((obj) => {
			return {
				...obj,
				detailsExpanded: expanded
			}
		})
	}
	
	const setLoading = (loading: boolean) => {
		console.log('loading', loading);
		update((obj) => {
			return {
				...obj,
				loading
			}
		})
	}
	
	const setLoadingMore = (loadingMore: boolean) => {
		console.log('loadingMore', loadingMore)
		update((obj) => {
			return {
				...obj,
				loadingMore
			}
		})
	}
	
	const setMyRooms = (response: { total: number; results: any[] }) => {
		update((obj) => {
			return {
				...obj,
				rooms: response,
				initialLoadTookPlace: true
			}
		})
	}
	
	const updateMyRooms = (response: { total: number; results: any[] }) => {
		update((obj) => {
			const results = [...obj.rooms.results, ...response.results]
			return {
				...obj,
				rooms: {
					total: response.total,
					results
				}
			}
		})
	}
	
	const updateValue = (key: any, value: any) => {
		console.log('updating:', key, value);
		update((obj) => {
			return {
				...obj,
				[key]: value
			}
		})
	}
	
	const updateOffset = (limit) => {
		update((obj) => {
			return {
				...obj,
				offset: obj.offset + limit
			}
		})
	}
	
	const addNewConversation = (roomUid, conversation: INewConversation) => {
		update((obj) => {
			return {
				...obj,
				conversations: {
					...obj.conversations,
					[roomUid]: conversation
				}
			}
		})
	}
	
	return {
		addFullProposalToConversation,
		addHeadlessMessage,
		addOfferToConversation,
		addNewConversation,
		addPendingMessageToConversation,
		prependMessagesToConversationFromEndpoint,
		removeHeadlessArray,
		removeRoomFromUnreadList,
		setActiveConversaionUid,
		setConvoLoading,
		setConvoLoadingMore,
		setDetailsExpanded,
		setLoading,
		setLoadingMore,
		setMyRooms,
		subscribe,
		updateMyRooms,
		updateOffset,
		updatePendingMessageError,
		updatePendingMessageSuccess,
		updateValue,
		reset: () => set(initialState)
	}
}

export const conversationList = createConversationListStore()

export const userOnChatPage = writable(false)

const createUnreadChatsStore = () => {
	const initialState = {}
	const { subscribe, set, update } = writable(initialState)
	
	const addRoomAndMessage = () => {
		update(obj => {
			return {
				...obj
			}
		})
	}
	
	const addMessage = (message: any) => {
		update(obj => {
			const existingRoom = obj[message.room]
			if (existingRoom?.length > 0) {
				const newArr = [...existingRoom, message]
				return {
					...obj,
					[message.room]: newArr
				}
			} else {
				return {
					...obj,
					[message.room]: [message]
				}
			}
		})
	}
	
	const removeRoom = (roomUid: string) => {
		update(obj => {
			const newObj = {...obj}
			delete newObj[roomUid]
			return newObj
		})
	}
	
	return {
		addRoomAndMessage,
		addMessage,
		removeRoom,
		subscribe,
		reset: () => set(initialState)
	}
}

export const unreadChats = createUnreadChatsStore()

export const totalUnreadChats = derived(
	unreadChats,
	$unreadChats => {
		let total = 0
		const keys = Object.keys($unreadChats)
		keys.forEach(k => {
			total += $unreadChats[k].length
		})
		return total
	}
)
