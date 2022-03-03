import React from "react";
import Searchbar from "./Searchbar";
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { isRedirectingToggled, searchTextSet } from '../../../features/app-slice'
import { searchFieldChanged } from '../../../features/app-slice'

const SearchbarContainer = () => {
    const isRedirecting = useAppSelector((state) => state.app.isRedirecting)
    const isSearchbarToggled = useAppSelector((state) => state.app.isSearchbarToggled)
    const searchField = useAppSelector((state) => state.app.searchField)
    const dispatch = useAppDispatch()
    const setSearchText = () => {
        dispatch(searchTextSet(searchField))
    }
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
            setSearchText={setSearchText}
        />
    )
}

export default SearchbarContainer
