import SearchPage from "./SearchPage";
import {withRouter} from 'react-router-dom'
import {useEffect} from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { isRedirectingToggled, isRedirectingToggled, isRedirectingToggled } from '../../features/items-slice'

const SearchPageContainer = (props : any) => {
    let searchString = props.match.params.string
    useEffect(() => props.startSearch(searchString), [searchString])
    
    const isFetching = useAppSelector((state) => state.items.isFetching)
    const items = useAppSelector((state) => state.items.items)
    const cart = useAppSelector((state) => state.items.cart)
    const searchField = useAppSelector((state) => state.search.searchField)
    const isSearching = useAppSelector((state) => state.search.isSearching)
    const searchText = useAppSelector((state) => state.search.searchText)

    const dispatch = useAppDispatch()

    const toggleIsFetching = () => {

    }

    const addToCart = () => {

    }

    const toggleSearchbar = () => {

    }

    const addOne = () => {
        
    }

    const startSearch = () => {
        dispatch(isRedirectingToggled(false))
        dispatch(isSearchingToggled(true))
        let response = await productsAPI.searchProducts(searchString, page, pageLength)
        dispatch(setProducts(response))
        dispatch(toggleIsSearching(false))
        dispatch(setSearchText(searchString))
        dispatch(onSearchFieldChange(''))
    }

    const setSearchText = () => {
        
    }

    return (
        <SearchPage
            isFetching={isFetching}
            items={items}
            cart={cart}
            searchField={searchField}
            isSearching={isSearching}
            searchText={searchText}
            toggleIsFetching={toggleIsFetching}
            addToCart={addToCart}
            toggleSearchbar={toggleSearchbar}
            addOne={addOne}
            startSearch={startSearch}
            setSearchText={setSearchText}
        />
    )
}

let withUrlDataContainerComponent = withRouter(SearchPageContainer)

export default withUrlDataContainerComponent
