import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { searchbarToggled } from '../../features/search-slice'
import { loggedOut } from '../../features/login-slice'

const NavbarContainer = () => {
    const cartSize = useAppSelector((state) => state.items.cartSize)
    const isSearchbarToggled = useAppSelector((state) => state.search.isSearchbarToggled)
    const dispatch = useAppDispatch()
    const toggleSearchbar = () => {
        dispatch(searchbarToggled())
    }
    const logout = () => {
        dispatch(loggedOut())
    }
    return (
        <>
            <NavbarDesktop 
                cartSize={cartSize}
                isSearchbarToggled={isSearchbarToggled}
                toggleSearchbar={toggleSearchbar}
                logout={logout}
            />
            <NavbarMobile
                cartSize={cartSize}
                isSearchbarToggled={isSearchbarToggled}
                toggleSearchbar={toggleSearchbar}
                logout={logout}
            />
        </>
    )
}

export default NavbarContainer
