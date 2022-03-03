import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { searchbarToggled } from '../../features/app-slice'
import { loggedOut } from '../../features/app-slice'

const NavbarContainer = () => {
    const cartSize = useAppSelector((state) => state.app.cartSize)
    const isSearchbarToggled = useAppSelector((state) => state.app.isSearchbarToggled)
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
