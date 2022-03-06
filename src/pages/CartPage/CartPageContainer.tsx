import CartPage from "./CartPage";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { addedOne, checkedOut, removedFromCart, subtractedOne } from '../../features/app-slice'
import { Item } from '../../models/types'

const CartPageContainer = () => {
    const items = useAppSelector((state) => state.app.items)
    const cart = useAppSelector((state) => state.app.cart)
    const dispatch = useAppDispatch()
    
    const addOne = (id: number) => {
        dispatch(addedOne(id))
    }

    const checkout = () => {
        dispatch(checkedOut())
    }

    const removeFromCart = (id: number) => {
        dispatch(removedFromCart(id))
    }

    const subtractOne = (id: number) => {
        dispatch(subtractedOne(id))
    }

    return <CartPage
        items={items}
        cart={cart}
        addOne={addOne}
        checkout={checkout}
        removeFromCart={removeFromCart}
        subtractOne={subtractOne}
    />
}

export default CartPageContainer