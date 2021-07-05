import {setProducts, toggleIsRedirecting} from "./products-reducer";
import {productsAPI} from "../api/api";

const TOGGLE_IS_SEARCHING = 'TOGGLE_IS_SEARCHING'
const ON_SEARCH_FIELD_CHANGE = 'ON_SEARCH_FIELD_CHANGE'
const TOGGLE_SEARCHBAR = 'TOGGLE_SEARCHBAR'
const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'

let initialState = {
    isSearchbarToggled: false as boolean,
    searchField: null as string | null,
    isSearching: false as boolean,
    searchText: null as string | null
}

const searchReducer = (state = initialState, action : any) => {
    switch(action.type) {
        case ON_SEARCH_FIELD_CHANGE:
            return {
                ...state,
                searchField: action.searchField
            }
        case TOGGLE_IS_SEARCHING:
            return {
                ...state,
                isSearching: action.isSearching
            }
        case TOGGLE_SEARCHBAR:
            return {
                ...state,
                isSearchbarToggled: !state.isSearchbarToggled
            }
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.searchText
            }
        default:
            return state
    }
}

export let onSearchFieldChange = (searchField : string) => ({ type: ON_SEARCH_FIELD_CHANGE, searchField })
export let toggleIsSearching = (isSearching : boolean)  => ({ type: TOGGLE_IS_SEARCHING, isSearching })
export let toggleSearchbar = () => ({ type: TOGGLE_SEARCHBAR })
export let setSearchText = (searchText : string) => ({ type: SET_SEARCH_TEXT, searchText })

export const startSearch = (searchString : string, page : number, pageLength : number) => async (dispatch : any) => {
    dispatch(toggleIsRedirecting(false))
    dispatch(toggleIsSearching(true))
    let response = await productsAPI.searchProducts(searchString, page, pageLength)
    dispatch(setProducts(response))
    dispatch(toggleIsSearching(false))
    dispatch(setSearchText(searchString))
    dispatch(onSearchFieldChange(''))
}

export default searchReducer
