export type TProduct = {
    _id: string
    name: string
    brand: string
    image : string
    price: number
    category:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology';
    description: string
    quantity: number
    inStock: boolean
    createdAt: string
    updatedAt: string
}