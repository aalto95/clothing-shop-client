const SHOW_DETAILS = 'SHOW-DETAILS'
const ADD_TO_CART = 'ADD-TO-CART'
const ADD_MORE = 'ADD-MORE'

let initialState = {
    groceries: [
        {
            id: 0,
            name: 'Coca-Cola 12 fl oz, 24x',
            price: '20$',
            img: 'https://i5.walmartimages.com/asr/f0c8d2e2-e845-4659-ac22-24967c54946a.d8369557fabf3bdfac11bb09c0477667.jpeg?odnWidth=215&odnHeight=215&odnBg=ffffff',
            type: 'non-alcoholic beverage'
        },
        {
            id: 1,
            name: 'Turveda soda',
            price: '1$',
            img: 'https://cdn.shopify.com/s/files/1/2160/5629/products/0000_Ruffles---Cheddar-_-Sour-Cream-s_480x.png?v=1545669415',
            type: 'non-alcoholic beverage'
        },
        {
            id: 2,
            name: 'Zaddy\'s Gin-Tonic',
            price: '1$',
            img: 'https://cdn.shopify.com/s/files/1/2160/5629/products/Zaddy_sGinGerFizz1080pxx1080_480x.png?v=1618508032',
            type: 'alcoholic beverage'
        },
        {
            id: 3,
            name: 'Croissants',
            price: '3$',
            img: 'https://i5.walmartimages.com/asr/ec5cf2c1-813d-4aad-99b3-618d1b129fa4_1.b1e495e4629a6327f8c73842f85830bb.jpeg?odnWidth=215&odnHeight=215&odnBg=ffffff',
            type: 'snack'
        },
        {
            id: 4,
            name: 'Sliced Bread',
            price: '2$',
            img: 'https://i5.walmartimages.com/asr/a03d2ac7-93ae-458f-95ae-fbddb84350e1.ebb647a906b095053920d7db5deb33e0.jpeg?odnWidth=215&odnHeight=215&odnBg=ffffff',
            type: 'bread'
        },
        {
            id: 5,
            name: 'Tomatoes',
            price: '2$',
            img: 'https://i5.walmartimages.com/asr/5df941c5-f7e1-4b44-8619-01a5204745c2_1.782f8df12a31995e58a2e893f010e8a4.jpeg?odnWidth=215&odnHeight=215&odnBg=ffffff',
            type: 'vegetable'
        },
        {
            id: 6,
            name: 'Tomatoes',
            price: '2$',
            img: 'https://i5.walmartimages.com/asr/5df941c5-f7e1-4b44-8619-01a5204745c2_1.782f8df12a31995e58a2e893f010e8a4.jpeg?odnWidth=215&odnHeight=215&odnBg=ffffff',
            type: 'vegetable'
        },
    ],
    cart: [

    ]
}

const productsReducer = (state = initialState, action) => {
    let stateCopy = Object.assign({}, state)
    switch(action.type) {
        case SHOW_DETAILS:
            return stateCopy
        case ADD_TO_CART:
            stateCopy.cart.push(Object.assign(stateCopy.groceries[action.id], {quantity: 1}, {cartId: stateCopy.cart.length}))
            let uniqueCart = new Set(stateCopy.cart)
            stateCopy.cart = [...uniqueCart]
            return stateCopy
        case ADD_MORE:
            stateCopy.cart[action.id].quantity += 1
            console.log(stateCopy.cart[action.id])
            return stateCopy
        default:
            return stateCopy
    }
}

export let showDetailsActionCreator = (id) => ({ type: SHOW_DETAILS, id: id })
export let addToCartActionCreator = (id) => ({ type: ADD_TO_CART, id: id })
export let addMoreActionCreator = (id) => ({ type: ADD_MORE, id: id })
export default productsReducer