import React from "react";
import Searchbar from "./Searchbar";
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { isRedirectingToggled } from '../../../features/items-slice'
import { searchFieldChanged } from '../../../features/search-slice'

const SearchbarContainer = () => {
    const isRedirecting = useAppSelector((state) => state.items.isRedirecting)
    const isSearchbarToggled = useAppSelector((state) => state.search.isSearchbarToggled)
    const searchField = useAppSelector((state) => state.search.searchField)
    const dispatch = useAppDispatch()
    const toggleIsRedirecting = (isRedirecting : boolean) => {
        dispatch(isRedirectingToggled(isRedirecting))
    }
    const onSearchFieldChange = (newValue : string) => {
        dispatch(searchFieldChanged(newValue))
    }
    return (
        <Searchbar
            isRedirecting={isRedirecting}
            isSearchbarToggled={isSearchbarToggled}
            searchField={searchField}
            toggleIsRedirecting={toggleIsRedirecting}
            onSearchFieldChange={onSearchFieldChange}
        />
    )
}

export default SearchbarContainer
