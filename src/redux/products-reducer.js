let initialState = {
    groceries: [
        {id: 0, name: 'Coca Cola 12 oz', img: 'https://cdn.shopify.com/s/files/1/2160/5629/products/Blanco_NewLabel_Background_480x.png?v=1619193602', type: 'non-alcoholic beverage'},
        {id: 1, name: 'Turveda soda', img: 'https://cdn.shopify.com/s/files/1/2160/5629/products/0000_Ruffles---Cheddar-_-Sour-Cream-s_480x.png?v=1545669415', type: 'non-alcoholic beverage'},
        {id: 2, name: 'Zaddy\'s', img: 'https://cdn.shopify.com/s/files/1/2160/5629/products/Zaddy_sGinGerFizz1080pxx1080_480x.png?v=1618508032', type: 'alcoholic beverage'},
        {id: 3, name: 'Wine', img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F08%2FPNGPIX-COM-Wine-Bottle-PNG-Transparent-Image-1.png&f=1&nofb=1', type: 'alcoholic beverage'},
        {id: 4, name: 'Wine', img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F08%2FPNGPIX-COM-Wine-Bottle-PNG-Transparent-Image-1.png&f=1&nofb=1', type: 'alcoholic beverage'},
        {id: 5, name: 'Wine', img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F08%2FPNGPIX-COM-Wine-Bottle-PNG-Transparent-Image-1.png&f=1&nofb=1', type: 'alcoholic beverage'},
    ]
}

const productsReducer = (state = initialState, action) => {
    let stateCopy = Object.assign({}, state)
    return stateCopy
}

export default productsReducer