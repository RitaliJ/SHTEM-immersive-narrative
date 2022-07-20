//types for more convenient type annotations elsewhere
export type AccountType = {email: string, firstName: string, lastName: string, phone: string, DOB: DOBType, balance: number, items: ItemType[]};
export type ProductType ={imgSrc: string, name: string, desc: string, price: number, id: number};
export type ItemType = {product: ProductType, quantity: number};
export type DOBType = {year: number, month: number, day: number};
