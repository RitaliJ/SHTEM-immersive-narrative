//types for more convenient type annotations elsewhere
export type AccountType = {email: string, firstName: string, lastName: string, balance: number, items: [{product: ProductType, quantity: number}]};
export type ProductType ={imgSrc: string, name: string, desc: string, price: number, id: number};
