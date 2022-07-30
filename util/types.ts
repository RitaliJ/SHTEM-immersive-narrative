//types for more convenient type annotations elsewhere
export type AccountType = {email: string, firstName: string, lastName: string, phone: string, DOB: DOBType, balance: number, items: ItemType[], purchases: ItemType[], usedCodes: string[], firstVisit: boolean, doneNewsletter: boolean, watchedAd: boolean};
export type ProductType ={imgSrc: string, name: string, desc: string, price: number, id: number};
export type ItemType = {product: ProductType, quantity: number, size: string};
export type DOBType = {year: number, month: number, day: number};
export type SurveyType = {title: string, code: string, questions: (ShortAnswerType | MultipleChoiceType)[][]}; //outer array for pages, inner array for questions on that page
export type ShortAnswerType = {label: string, conditional?: boolean}; //types for survey questions
export type MultipleChoiceType = {label: string, options: string[], conditional?: boolean};
export type SurveyDataType = {[key: string]: string}; //for indexing survey data with strings
export type CaptchaType = {title: string, code: string, imgSrcs: string[], hver: boolean};