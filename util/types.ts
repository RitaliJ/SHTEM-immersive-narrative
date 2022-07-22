//types for more convenient type annotations elsewhere
export type AccountType = {email: string, firstName: string, lastName: string, phone: string, DOB: DOBType, balance: number, items: ItemType[], usedCodes: string[]};
export type ProductType ={imgSrc: string, name: string, desc: string, price: number, id: number};
export type ItemType = {product: ProductType, quantity: number};
export type DOBType = {year: number, month: number, day: number};
export type SurveyType = {title: string, code: string, questions: (ShortAnswerType | MultipleChoiceType)[]};
export type ShortAnswerType = {label: string}; //types for survey questions
export type MultipleChoiceType = {label: string, options: string[]};
export type SurveyDataType = {[key: string]: string}; //for indexing survey data with strings
export type CaptchaType = {title: string, code: string, imgSrcs: string[]};
