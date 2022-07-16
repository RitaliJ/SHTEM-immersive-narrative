export {}
//constant array of proudct objects to retrieve by id in dynamic routes
module.exports = {products: [
    {
        imgSrc: "https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg",
        name: "MICKE Desk",
        desc: "Top 10 desk of all time",
        price: 39.99,
        id: 0,
    },
    {
        imgSrc: "https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_pe740299_s5.jpg",
        name: "MICKE Desk but the title is very very very very very very very very very long",
        desc: `long description long description long description long description long description long
            description long description long description long description long description long description
            long description long description long description long description long description
            long description long description long description long description long description`,
        price: 4999.99,
        id: 1,
    },{
        imgSrc: "https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-hillared-dark-blue__0497130_pe628957_s5.jpg",
        name: "POÄNG Armchair",
        desc: "Top 10 chair of all time",
        price: 0.49,
        id: 2,
    },
]}
