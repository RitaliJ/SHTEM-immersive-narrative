export {}

//constant array of survey and proudct objects to retrieve in dynamic routes
module.exports = {
    surveys: [
        {
            title: "Epic Survey",
            reward: 100,
            questions: [
                {
                    label: "What is up?",
                },
                {
                    label: "What is up 2?",
                },
                {
                    label: "Multiple choice?",
                    options: [
                        "yes",
                        "no",
                        "perhaps",
                    ],
                },
            ],
        }
    ],
    products: [
        {
            imgSrc: "https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg",
            name: "MICKE Desk",
            desc: "Top 10 desk of all time",
            price: 39.99,
            id: 0,
        },
        {
            imgSrc: "https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg",
            name: "MICKE Desk but the title is very very very very very very very very very very very very very very very very very very very long",
            desc: `long description long description long description long description long description long
                description long description long description long description long description long description
                long description long description long description long description long description
                long description long description long description long description long description`,
            price: 4999.99,
            id: 1,
        },
        {
            imgSrc: "https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-hillared-dark-blue__0497130_pe628957_s5.jpg",
            name: "POÄNG Armchair",
            desc: "Top 10 chair of all time",
            price: 0.49,
            id: 2,
        },
        {
            imgSrc: "data:image/jpeg;base64,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",
            name: "Dog Food",
            desc: "For your dog, or for yourself...we don't judge",
            price: 12.99,
            id: 3,
        },
        {
            imgSrc: 'https://media.restocks.net/products/GV6774/adidas-yeezy-foam-rnnr-mist-1-400.png',
            name: 'Yeezy Foam Rnnnr',
            desc: 'Thinking outside the box...',
            price: 1000,
            id: 4,
        },
        {
            imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/og-airpods-max-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1603996970000',
            name:'Apple Headphones',
            desc:'Good Headphones',
            price: 500,
            id: 5,
        },
    ],
}
