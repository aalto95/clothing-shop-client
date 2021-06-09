const NULLIFY_FIELDS = 'NULLIFY-FIELDS'
const ON_PRODUCT_NAME_CHANGE = 'ON-PRODUCT-NAME-CHANGE'
const ON_PRODUCT_PRICE_CHANGE = 'ON-PRODUCT-RICE-CHANGE'
const ON_PRODUCT_IMAGE_URL_CHANGE = 'ON-PRODUCT-IMAGE-URL-CHANGE'
const ON_PRODUCT_TYPE_CHANGE = 'ON-PRODUCT-TYPE-CHANGE'

let initialState = {
    name: '',
    price: '',
    imageURL: '',
    productType: ''
}

const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case ON_PRODUCT_NAME_CHANGE:
            return {
                ...state,
                name: action.name
            }
        case ON_PRODUCT_PRICE_CHANGE:
            return {
                ...state,
                price: action.price
            }
        case ON_PRODUCT_IMAGE_URL_CHANGE:
            return {
                ...state,
                imageURL: action.imageURL
            }
        case ON_PRODUCT_TYPE_CHANGE:
            return {
                ...state,
                productType: action.productType
            }
        case NULLIFY_FIELDS:
            return {
                ...state,
                name: '',
                price: '',
                imageURL: '',
                productType: ''
            }
        default:
            return state
    }
}

export let onProductNameChange = (e) => ({ type: ON_PRODUCT_NAME_CHANGE, name: e.target.value })
export let onProductPriceChange = (e) => ({ type: ON_PRODUCT_PRICE_CHANGE, price: e.target.value })
export let onProductImageURLChange = (e) => ({ type: ON_PRODUCT_IMAGE_URL_CHANGE, imageURL: e.target.value })
export let onProductTypeChange = (e) => ({ type: ON_PRODUCT_TYPE_CHANGE, productType: e.target.value })
export let nullifyFields = () => ({ type: NULLIFY_FIELDS })

export default adminReducer