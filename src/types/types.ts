export type ItemType = {
    id: number
    title: string
    price: number
    type: string
    sex: string
    brand: string
    color: string
    sizes: any
    img_small: string
    img_big: string
    createdAt: Date
}

export type CartItemType = {
    id: number
    title: string
    price: number
    type: string
    sex: string
    brand: string
    color: string
    sizes: any
    img_small: string
    img_big: string
    createdAt: Date
    quantity: number
    cartId: number
}
