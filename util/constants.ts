export {}

//constant array of survey and proudct objects to retrieve in dynamic routes
module.exports = {
    giftCodes: {
        "111111": 1,
        "222222": 1,
        "333333": 1,
        "444444": 1,
        "555555": 1,
    },
    surveys: [
        {
            title: "Epic Survey",
            code: "111111",
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
        },
        {
            title: "Epic Survey 2",
            code: "222222",
            questions: [
                {
                    label: "yo",
                },
            ],
        },
        {
            title: "Epic Survey 3",
            code: "333333",
            questions: [
                {
                    label: "e",
                },
            ],
        },
    ],
    captchas: [
        {
            title: "Select all images with dogs",
            code: "444444",
            imgSrcs: [
                "https://pbs.twimg.com/media/CREEBUnXAAACf3T?format=jpg&name=medium",
                "https://media.istockphoto.com/photos/green-chameleon-picture-id1354454896?k=20&m=1354454896&s=612x612&w=0&h=DVcN5YvFZcmd3-EVmpQg4eDgJ4OssH79Zonwu9x8Gsk=",
                "https://media.istockphoto.com/photos/shut-up-picture-id468989662?k=20&m=468989662&s=612x612&w=0&h=nbaIR4SvZS8W96GQxp6LhkUAttNQwa5d0f3rNhmdldI=",
                "https://media.istockphoto.com/photos/green-chameleon-hunting-portrait-of-an-exotic-animal-macro-picture-id842206608?k=20&m=842206608&s=612x612&w=0&h=SBeBoFbYbpwmW55zTIAuQ4mUtPd1hSvrdBBx22Y7XWI=",
                "https://media.istockphoto.com/photos/mexican-iguana-with-hat-and-scarf-picture-id907928160?k=20&m=907928160&s=612x612&w=0&h=MD0Kag7HzcisoGjCkMVBjon0ZGkDdkinY805IMD7tes=",
                "https://media.istockphoto.com/photos/isolated-exotic-pet-green-chameleon-picture-id152990200?k=20&m=152990200&s=612x612&w=0&h=sm2uQDoY70lQsbULgamWYybpboaRXkbIzO1A_YjjrTM=",
                "https://media.istockphoto.com/vectors/cute-small-green-chameleon-lizard-cartoon-animal-design-flat-vector-vector-id1207488059?k=20&m=1207488059&s=612x612&w=0&h=cGLsXcx-3BKTiszDL2kpMLxGwWBqwlDdj9mB8rMUTng=",
                "https://media.istockphoto.com/photos/smiling-crested-gecko-at-blue-background-picture-id1091920292?k=20&m=1091920292&s=612x612&w=0&h=75aAhrX24aurQT6ILa92W7EsN8MHtGorwU5pc22SVMU=",
                "https://media.istockphoto.com/photos/veiled-chameleon-isolated-on-white-background-picture-id842941952?k=20&m=842941952&s=612x612&w=0&h=waE2Tob8VZgLqxxChdeH7dDLdaK4liKiv4Wmy4nXtRk=",
            ],
        },
        {
            title: "Select all images with cats",
            code: "555555",
            imgSrcs: [
                "https://pbs.twimg.com/media/CREEBUnXAAACf3T?format=jpg&name=medium",
                "https://media.istockphoto.com/photos/green-chameleon-picture-id1354454896?k=20&m=1354454896&s=612x612&w=0&h=DVcN5YvFZcmd3-EVmpQg4eDgJ4OssH79Zonwu9x8Gsk=",
                "https://media.istockphoto.com/photos/shut-up-picture-id468989662?k=20&m=468989662&s=612x612&w=0&h=nbaIR4SvZS8W96GQxp6LhkUAttNQwa5d0f3rNhmdldI=",
                "https://media.istockphoto.com/photos/green-chameleon-hunting-portrait-of-an-exotic-animal-macro-picture-id842206608?k=20&m=842206608&s=612x612&w=0&h=SBeBoFbYbpwmW55zTIAuQ4mUtPd1hSvrdBBx22Y7XWI=",
                "https://media.istockphoto.com/photos/mexican-iguana-with-hat-and-scarf-picture-id907928160?k=20&m=907928160&s=612x612&w=0&h=MD0Kag7HzcisoGjCkMVBjon0ZGkDdkinY805IMD7tes=",
                "https://media.istockphoto.com/photos/isolated-exotic-pet-green-chameleon-picture-id152990200?k=20&m=152990200&s=612x612&w=0&h=sm2uQDoY70lQsbULgamWYybpboaRXkbIzO1A_YjjrTM=",
                "https://media.istockphoto.com/vectors/cute-small-green-chameleon-lizard-cartoon-animal-design-flat-vector-vector-id1207488059?k=20&m=1207488059&s=612x612&w=0&h=cGLsXcx-3BKTiszDL2kpMLxGwWBqwlDdj9mB8rMUTng=",
                "https://media.istockphoto.com/photos/smiling-crested-gecko-at-blue-background-picture-id1091920292?k=20&m=1091920292&s=612x612&w=0&h=75aAhrX24aurQT6ILa92W7EsN8MHtGorwU5pc22SVMU=",
                "https://media.istockphoto.com/photos/veiled-chameleon-isolated-on-white-background-picture-id842941952?k=20&m=842941952&s=612x612&w=0&h=waE2Tob8VZgLqxxChdeH7dDLdaK4liKiv4Wmy4nXtRk=",
            ],
        },
    ],
    products: [
        {

            imgSrc: "https://i.pinimg.com/736x/3e/6f/5f/3e6f5f92ac57fad94b918904ee29bc96--funny-fashion-fashion-fail.jpg",
            name: "Accordion Outfit",
            desc: "An outfit for those that love music and symmetry, because the outfit is symmertric and the pants look like accordions.",
            price: 110,
            id: 0,
        },
        {

            imgSrc: "https://teddyfeed.com/wp-content/uploads/2020/02/d3d9446802a44259755d38e6d163e820-8.jpg",
            name: "Avocado",
            desc:"A fit with a fluffy texture, suited mainly for those who love avocados.",
            price: 110,
            id: 1,
        },
        {

            imgSrc: "https://i2-prod.mirror.co.uk/incoming/article15007504.ece/ALTERNATES/s1200c/0_The-2019-Met-Gala-Celebrating-Camp-Notes-on-Fashion-Arrivals.jpg",
            name: "Pheonix",
            desc: "This fit, modeled by Cardi B, is a fit inspired by the pheonix, a mythological creature that can breathe out fire. Intimidating for sure, but confidence displayed as well.",
            price: 110,
            id: 2,
        },
        {

            imgSrc: "https://miro.medium.com/max/1400/1*o1sbsqRiFra5pyLjQHpQug.jpeg",
            name: "Sugar Wedding",
            desc: "This piece looks like sugar cubes were stitched together to create a wedding dress. It looks perfect, nearly flawless, but there is one downfall: you can't use your hands. Enjoy the snowman suit.",
            price: 110,
            id: 3,
        },
        {

            imgSrc: 'https://qph.cf2.quoracdn.net/main-qimg-05059316efb58156fe3153d1b3e8d166-lq',
            name: 'Wrong Side of the Bed',
            desc: 'Ever had such a terrible sleep that the bed morphed into your body? Well, this relatable piece conveys the feeling of sleeping on the wrong side of the bed.',
            price: 110,
            id: 4,
        },
        {

            imgSrc: 'https://hips.hearstapps.com/hbz.h-cdn.co/assets/17/10/hbz-unpractical-runway-looks-molly-goddard-gettyimages-642836062.jpg',
            name:'Blue Christmas',
            desc:"You heard about white christmas. There's green christmas as well. But have you heard about blue christmas?This piece, a blue christmas tree, chooses to challenge the idea that society has conformed to a green or white christmas. Masterpiece.",
            price: 110,
            id: 5,
        },

        {
            imgSrc: 'https://i.pinimg.com/736x/8a/31/18/8a3118f6239d2a3b5c48085ff34068bb.jpg',
            name:'2D',
            desc:'This is one of the most interesting pieces there is. It looks like a 2d image being pasted on the model. It is really interesting and a must have. A conversation-starter.',
            price: 110,
            id: 6,
        },

        {
            imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/58ab0cc1280000af8f999fbb-1511982952.jpg?crop=1xw:1xh;center,top&resize=480:*',
            name:'Cupcake',
            desc:'This piece, inspired by the cupcake, is a beautiful, sophisticated design, showing the different layers of the cupcake, likening it to the human being who also has multiple layers.',
            price: 110,
            id: 7,
        },

        {
            imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bgus-2328248-023-1646602072.jpg?resize=480:*',
            name:'Balencia Tape',
            desc:'This one does not need a description. CAUTION: you may be asked questions about this. (pun intended)',
            price: 110,
            id: 8,
        },


        {
            imgSrc: 'https://qph.cf2.quoracdn.net/main-qimg-9f739483031a2b7f2ddcad4a7cf8adf6.webp',
            name:'Mummy',
            desc:"Inspired by the spider, the top is a web covering the face with the arms being symbolized by faces. It also kinda looks like a mummy. I don't know, I'm not the designer.",
            price: 110,
            id: 9,
        },

        {
            imgSrc: 'http://www.washingtonpost.com/blogs/style-blog/files/2016/03/cdg_fw16_042.jpg',
            name:'I am a Present',
            desc:'Gifting someone a human for christmas? Well there is only one logical way to wrap the present. Add to cart quickly.',
            price: 110,
            id: 10,
        },

        {
            imgSrc: 'https://i.pinimg.com/originals/51/6a/70/516a706f4c1992ee5bc15e41a189818f.jpg',
            name:'Willy Wonka in AVATAR',
            desc:'Designed by Willy Wonka and inspired by Avatar, this piece is for anyone who is incredibly quirky and wants to dress like elizabeth banks in Hunger Games.',
            price: 110,
            id: 11,
        },

        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiTwPE2Ck3Ad7rvpkcRlDPY_3qpJgCYiXBA&usqp=CAU',
            name:'In the Future',
            desc:'In the future, society will dress like this. If you wanna catch the trend early for once, buy this asap.',
            price: 110,
            id: 12,
        },

        {
            imgSrc: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/06/2-593ff4ca1aafa-jpeg__700.jpg',
            name:'Infinite Hugs',
            desc:'Not getting enough hugs? Well there is an easy fix to that. This jacket will give you hugs everytime you wear it. MUST-BUY',
            price: 110,
            id: 13,
        },

        {
            imgSrc: 'https://media.gq.com/photos/5aa97c15cd49a054b4ba73e9/master/w_2122,h_3184,c_limit/180126_Beeker_VIP_001.jpg',
            name:'WESTBROOK 1',
            desc:"Going for the rough and strong look? Well this fit, modeled nicely by Russell Westbrook, does just that. He looks like he turned into the hulk.",
            price: 110,
            id: 14,
        },

        {
            imgSrc: 'https://i.pinimg.com/originals/22/d1/e6/22d1e6510597c1e2e410e560a0b4ba89.jpg',
            name:'WESTBROOK 2',
            desc:"This piece is inspired by Robin, Batman's sidekick. See? Robin can be for adults as well",
            price: 110,
            id: 15,
        },

        {
            imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUQEhMWFRUVFRUVFRYXFRUVFRUVFRUYFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQ8AugMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABIEAACAQIEAwUFBQQHBAsAAAABAgADEQQSITEFBkETIlFhcQcygZGhFEJSscFTgqLRI2JykrLC8BUkg+EWMzRDVGNzk7PD8f/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAwEQACAgEDAgQEBgIDAAAAAAAAAQIRAwQhMRJBBVFhcSKBocETIzKR0fAU4VKx8f/aAAwDAQACEQMRAD8A4ex1gzGBt4mACsxgzGJggArMYMxiYYgAdzBcwTqnJeF4GtFKlaotSsyjOtXZHt3lVDZSAetj6yvJk6FdNluLE8kulOjlo9Ym5noGjhuEvYjDYcgAgWpUtQfQbxhuUOD1gFFELbUEGohPiCQ2vT5zMtbDuqNT8PyVa+/+zgwYwZjO41/ZrwttQWW4sAtY2uCdRmDa+p6Smx3scuubD4q+mgdAR8XQ3/hlsdVjZVLSZYo5Qah2vE3M6LW9keMCZlrUWOmn9Iv8RW0qcd7N+I0lzdkKg8KbqzfBTYn4AyazY3xJFcsGXvFmRQx4GWmJ5Ux9MBmwtax6hGb55b2+MrKOGLEjYjQjrfzk3T3sSuOzQmqxtEUzrvHa9JlsGEV9ga14WqE027oNal+sWtQHS8j1KJS2m8kUadhIOqsatjl4zeOxkSWLllUx1THI2sdtLysqm3hR4pYExm8rstaoKCCCAgQzChmAAghQQAOS6OPqr7tV19HYfrIcnU8ICua+vQRSa7koJ38Jp+A4viNUouHqVHqMbknKVQEkC9xubX9LToXEeCcWpUVqUaoZ7XdCB73XKRaw0ErfZLxKjh8Me2qBCahte+236TpWP49h6dIVHqqFb3TuD6WmHIouT2X7HTxyydK+J7+rOOH2h42kzJXpkOlsy5mU22JAN5ZYX2rqCM6vbW4spGvmDfr9JB9qGIp4ipTq0GD2VlJCnYi4vp6znZXvaj4SUcGOSuq+bIT1OWL6dn7pHZ8J7UMMQSx06XpN9SBIfMfMXC8ZTHa6NrlqIrdounmNR5HTScypIopsxGltvOQBULLlPTaEdNFbpsHq5PZxT/f+SwqUlcBidPpHKeIQDRtupkTPYLT6dY5WpIUJ6Dr5y2uxT1bWg6tZXYa+cj4isM14jBUhYuToIjEEH3dpNR3Kuq0PI9xGxF0SLRKyzEuSnLV7DqiP2jSCO2l6RSVLdT5xuKaJlJaGBBaLQaxysoBH1isdbWMAQpNw9DMfIAm/hYXkMwTsGqCil3iZJwaXdb7Xg3SBK3RJocNLWIOmt/hLFaaDLqAbX38NoVavZGVRYE2HiZDwtInNUvoFI+kptvk1OKjwjqvstpYavhwKtNGZXchiASMzZiPyPym0pfZqrCj2WiB7g02UJdtrsoGs4x7OePNhqppupNOobm17qbWLC3l4a6TpxxmEpJ232upUsLhTVdgb7XGbvfGZ8qcZs04alC3t8jK+0tKKlKVGmFVWYkhdMx8/HXec2dCarkbA38NJsOc8Y7lKjpkUsAgO4VsxzN1BNvpMVxFiKr20vbx8BL8PBmzOpWv7sSq+MCIVXUtv4AStoVLMDCVbxuXJJKjPKbbsk4qsS1/lJmcMmXxkZEzr6Q/s4XvXuBIOuOC/E3Ft1aZHOYXWGhtoRvLw0KbU+13y7ypxlYG1vnJJ32KnHpdpjj4RlW+46x1soUAbyJRrtYpfeLpCOK+IU5Lp2JNMR60apLeTPsz+Bmm0Z6b4IdTC06aMW7zbD1MrKaXOkmcSx3aGwFl+unWR8FUyvczKrSt8ml9LkkuCxwmAGhcWuL+FhK1yA5I1W/zEm8Ux4ewQm1rHpKqEE+WGRrhFxieJL2ZSmLXsL7adZURVtISxqKitiMpOT3HqdK8KqttPjHkO0RjR3h6CJO2XzhFY7Q5Ue5HnYTRrwXECh/1FUKwYK3ZvZja4CtbvE+XkJr+QeWFTCpxEse0zdwDZEN1BHXMTbXoJr3xVV6tN2qMWD0xcm5y9opI/WUyla27GzBopTxvImu+3fgyfInINdB9oxK5O6ezpn39d2cfd00A311tNThuU6KvmK3ubi/Tymz717NqOhGnzEeFLSUyXU7K18Jyzm7lYY1qq5shp5GQ2JFyD3SLXsRYaHe2mkx/FvZlj79tT+zujgFcuIpqbAWse1K97TXzvOpcRJZ6zKO6GGZtO8x0RfVcwPqB4SGmg9BJ4JM1YvD1qI25Nbrj2/wBnD+McBxWDK/aKLU84uhNirDyZSQTtpfqJECqaZPUdZ6c5gwNHEYNqFZAy5diNVIGjKejDxnmSpek70jrZmQ/ukj9JdGfX7nLlDofowcOqAE5jYWMcDXBtE0sOOyZuo2jOFqAXBkpK+B4ZdLqXDEUq7KGUbMLGNuttIZOsU4J1lhmF4QjNrJ2CoAvZvhKoGSqVY3FzYSMr5RdGcemmjWYSgg2EsNJSYLG0goBeTv8AaFL8Uz2/I0pwrZmIqKQdYgScuHNTLbpcH5xxuFsou3yAuZo60Y+hvgrYUerpZiLWt0uD9RGZIgOk923jrCp7xMNDEST3JKnWMVnu15IWkCL3sY2aBIuJFNF2S2qPQvJODVuG4ekWyh6dK53t7pv9IeGosxVUF2LDL01Go9JC5Ox4HB1f9nhmPxpoRv8ACR+XOOVmftRlXJothfcEG+brYzLCStpnd0MZPHLp8tk+OGvrtZ0nG1BRUPV7oJt46kXtpfwMrMRzBRCnJmJ8co089ZS4vi1esMlRsy3vbKo1GxuB5yCyWk+hDweHKvznv6cV81ZruPcLKYQ5dQpDnxa51J08Tf4TKcOcCohYBlzC4IuCL6gj0jXEKtV6bKKrg20Odt/DfboR4GZXifEqmXKSVYHWxINxIuShwjXpdNLHilCbT5+p1TEVA6m22o+Wk81c4UwuPxCjbtCfnr+s9C8LxJbA0XJuTTW56k9SfjPP3OykcQr36v8Amoj0z+L5HnNVHpVeTKbMdhEstjYxVH3hHGfK5zC81GTZrcsuEpSYMAQrEW723wMYq0zSORrMPEai0r2bU20EAb1icbCMqJOJemR3RaMrTi6aTT8rcr1MUwOUinfVvH0i4QfqZV8E4FVxNQU6a38T0HrOk0vZemUXY3sL69baza8v8Ho4ZAlNLeJtqZed3/QisdM8uYfF9mxC6knvdbennBxHiDMLXFj5aiQA9jBUte8fSrsfU62EgX0islt/yj2EqkGwA3EscS62ykHMNx0ilNp1QQgmrsqWVctwdb7RVClcxWKKjQDWRw5HWTi9iMqTLinhgQAdpX4qm1J8t/MehjuAxJzgM1l+8bdBvCxJNaqzLt0HXKNI20Ha0db5FJfgdYdexxCj+O0Pk3huIZ+zCWza95lXYX8bx32X6cHqf8b9YrhGOrU8SKwFlpks19stjmHrlJ+MwNJTfuej8N63gm480qvzo1eN4BWpU+0fJlBANmJOpt4SsItreWnFuYRicOaaI9MsVILEFgAwOoGxI85nk4eu7sz+p0+Uub8ka9I8soXn2d8V22NhgeVlemlQ1j30V7BR94X3vMHzRyyq4h0FY3Dad0G9wDsCPGbrCc1pQoIhp6U0Ck57aIttBbymOxdd61Z6u3aMWuTcgE3CqANABYX8opqL2KtEtVLLL8b9Pbjz9PQv+CYc08GlNjcoXS/Q5XYXF/ScB5xr58fiGH7Qj+7Zf0noXhtcPQJXq9Q+fvtPOPFbHF1rm161S5/fMNOviZwdY335tkBTrJLUgyl83e8PGMVUsbA3jtJZpZiQhUJkmlhxHcPQLEKoJJ0AAuTOo8k8g2y18SNd1ToPM+ciSKHkvklq7CrWQiluB1b18p2Ph+Gp01CKuUDTaTMPQAAAFgJLRIqHa8hqkV/0I7dY6qeUXk8hDcPhPHgpXa1/H6R6tg8qhydCbDa+19fDSSmoLew8eguZGx2lkttc36m+w9NJJOyDGMPXKNmWKqYgsSfH84yqE7RVRCNxa+sdKxpySAaZte2njGpb8HAZaitsFvKmCYmha/pJPDK4SoGO1jeRlk7gPDziMVRw4BPaVEUgb2JGY/K5g+GNWmqO28t4I4fg1O+jOFZh516gNv4wInFpZCqrfxG19bkTV8ycPAwxDXWxpkAeTi3yIEr+T6NNcVmdvdViC7nRtB1NtiZkSffuel0ORY9NOa36b+dJFZkFgxBA8wRqel4suAJs+cMXTbDhVdWOddAwJtZtbCY3pLGqNWk1D1EOqSreqIfFMPVZCOzexH4Wtbx2jNGs1/cYfAfz/SdVocTw4pqrVqQ7qgg1afhax1nMKiKrHKeptroRfoP5SMo07sNDq5Z+pSh01Vetl1yk4NN1O61aot6tmH0YThPOmF7DiWJRelVmHo/f/wA09McEwwq4Smw0dLrfxAY2B+Fp5/8AanRA4pVP4lQn1Ayn/DHji4y9zz2tkpTl5qTMiovqZP4Zw96zinSUsx+nmfASVy7wCri6gp0xp95uij+c7dyxyvRwlMKi3b7zHcn1lxiKzkvk2nhVFSoA9U7novkJuKQEKlQElJRjANDHlMJaccVIAGDF3hBYrLAR5PoMbfykrDAX1W9/EAiJw1OwlvgaF9bRDRXngwLB6a5T1H3T526GVHE6BWqwcEaaX6gDpN9Qox6vwxKqFHFwRv1HmD0MXeyalWxzThtSwqeJX/8AYjh+DqVqi0qSl3c2VRuT+g63O1orimCbD1notuNL/iU6gzoXsgwChamJI75PZp4hQAXI9SQPhKtXqFp8TyVfFe4sUHOSiWvLvszw1NQ2LJrPpdFYpTU+FxZm9TYeU6fyXy5hcMrVaGHp02c2zAd4qLC2Y3IFxtIOBpCpZQLknTwsN2Pl/Lzmxo0wiBBsLCcvw7/Iy5XlyzbVcdlfZL0W7+XmaM/RGKjFFBzww+xVr/eCqPU1Ft+RMwuDpBVA8hNPz1VZnp0SbIAKlh1a7KC3kLHTzkTlXAJWrlKgJUIxtcjUFQPdsepnUkrnZ29BL/H0byS9ZfLZfYrVMNppuauEUaVFWpLlPaAE3Y6ZWNrE+QmWN7b/AEjarY16bUR1EVOPnW4l1kHF0rn4ETp9Dl7ClVvSvcC/efw9ZF5f4HTTNWKgku4pg65UViARfqbb+Fonjsyx8YxdLkk9vbe79/I5/wAEwuLSm3ZpXy3LDIKgFrAGxWV2LwKYpD9rHaMGZc50qLY6Etvta9/jO53lXxfgtLEA5gA3RwO98fxDyMFjrhmaPi8JyrJjVPl8v53z/dmYXljDUKKChTAQgbdWtuQes09JJk8VwOutU0QjOy99SpsQoNg6EkHQkDxl/wABxVUk0MTTZKqi4LLlFVPxDpmGxA9RvYTjJt0zJrdJjh+ZhknF71atJ9/Ovfde3FsgjywLTjgSTo5oQMWDAEigsYABirwssO0As8v0ll1gaekp6O9vOaHArtEwLHD041wzHirUqIu1M5T6i3/OLxuIFKi9Q6ZVJ+Q6ec5fw/GkVSSSA5JIubXJvr4xPga5Lv2iZTikII1pgNY32YzoPs64LXOEREpsA1znYZVyMSwIPmCNrm1pzXj+Hzmmw2JCn4nT9Z6owdAJSRFFgqqoHgFFgPkJnz4Y6jGoye3oWxk8U3QnhPDloqANTYAn06DwEnEyp4tzBh8IB275S3ugKzsR45VBNvOR/wDpfgShqDEpoL5CctU+QpNZifICWQjDHFQjsl2B48sl19Ld96Zj8bxt8W5Z6YplD2eUEnbXUnrcnpEYfEvTbNTcqToSuhI3t9B8oxQw1YZ6tak1Lt6jVEVrA2bU6bjcb2lvwDhX2moyFsoVc1wL31Atv5/SRjbR6rqw48N7dCXuvve5GxOPq1BlqVGYXvYsSL+P1kdhL7j/AC+uHpiorlrsFsQB0J6ekoaaO5yKpYnYAEk/KNpoeny48kOrHsv2JrccxIWy1XvoFF+uwAuJ0XDU8qKpNyFAJ8SBqZl+GcqFKq1arqwQgqqg2Lg6Fr+G9vH0l3xPH9mum8jkyxwQlkyOkjg6/JizSjDAl8lXP8fcsrwr6TF1ca7NckyZw3irK6o7EoxtrqVJ0BB8JysPjuHJkUHFxT2TtfXy+pnlpJRVp2XePq06SnEPoKaNcgEkIbZtBuNAfhMjzDx2jVajUw1UMyXvYMCt8tswYA62PrrNJzVXVMHXLbGmyfGr/Rr9WE5PwlbGof6wHyF/1nYySqXSdDwjSxyfmyv4W16NNO19TpGDxWIqoKiimAw01Y+RHzkpVxP4qZ+DD9ZC5Oe9Bh4VDb0KqfzvL8CWR3VnN1MVizSgkqT8iCHxH4aZ/eI/SGK9b9kD6P8AzEn2hR0UdXoiF9sqDei3wKn9YPtzfsan8P8AOTocA6l5f9nl6j73xmiwBmbo10Y6H1B0l9gamkZErufsaRSSkPvm7eg6fP8AKYmnRYjN8idJtOc8SopJoC2bQML6WNzaZ7iSUOzpvh2qDMD2ivbRwfu26b/SCdCpFlwvEq6rmINiPoRPU2HYFRPG2GxGQk7+Hr0vPXPAcV2mGpVOj06bA+OZQZBR6bLJT6qIHMXKFLF1O2qO+lMIEWwuQWYZm3tdthbbeY3A4enSdSqgFSDfc6G+51mr515rfBlEpohdkDZmJIXUgd0WvsesylGrns34rMbCwu2psOglfw9W3J6LwxZvwryfpaXT7br6k7nTmbDFkSk/asgYNlvlBNrd86HY7XlfyvzNUWoxRUFxbW7aXv4iYlh3iPM6fGank7gVerUOVLd2/eIXTbbeVKcpSNUMGHDp/wAOe8Uu/v8AyaTivHqtdBTfJYHN3QQb2I6k6amablHDKuFDC2aoWLHr7xUD6fWYvi3Dq9B71KVlIsGDK1z4WBuPjNFyLxUMHw5uCvfUEW7pIDD5kH94y5Pfcxa7HD/D/IrpTt1x6/Wv2NZiDZQPSZrmFv6Sx2teaGt3mC/Eyu49w9qgDILsNx4jy85i8WwTzaZxgraadedHE08lHImzNK3WEbkqo3ZlA8dTpD+zVScvZPfwyt/KaHgnBCrCrV94e6g1y+bHqfynl9H4fmzZV8LST3b2VHQyZowjdltjMKlVclRFdCbkMLgkbG3kbTm3HcPSp4molFQigjQEkZiBmOp8fynTsQl1K3IuCLjcabjzE5BjXqriKtOqb1FY5yfvEm+YDoDe49RPbZGT8ETeSW/C4+a3NXynxGlTpuruqkvcXNrjKBNLT4hSbaop/eEzfI9CnWwS1alNSXepuL+65QWv0sn1ly/AcMf+6X4C35RxulRj1ksUtRNu+fT2LIVQdiIvNKQ8t0Pu51/suw/WIPASPcxFZf3r/nJW/IzdOP8A5fuv4bL7NBeUX+zMUPdxRP8AaQGH9lxv7an/AO3/AM4W/IPw49pr6/weTVqsp0Yj4w2xDndm+Zkriop5h2dh4gXt66yBJxdqyhqnQp6hO5J9STLCmaH2RgzN24qdxbdw0yBck9DcGVcEbEKnaKHEnOE4ZWSqygYcotjbLUpO1J2875V30sPAzi06HyNxJKyUcCwN6QxNQEmwJY0mULY30VKtx536SvKrjsbfDpxhqY9XD2/fYvMVi8VjsRcoarkAWpI1gFFhpc5R1uTa5M0WG4dXoKtOuArBbgAgkA3sGIJF/SWXLPE8NhXftGVAKZNwNNwTe3XSQ+J8SbGVTXwyVXpMFCkLTW9gAbOz2I08OszJUurl+h33qfwc34TSUIr/AMRZcT4bQw2DpuqKjVHVnfdiWpliCx1tcnTaUnCeecPg6rMyvUBQqQlr3uCPeIHQyyrcJr1kXtCAcoFm7xXS1ri4+UwvF+BNRxZpuwYkBgwFgQ17aHqLW+EnhU5y3j0rsct6y8UsTp23b+f2NfzF7RsFiUponaKwa5DpaxIsBcEjqevST+S+K0ftJV6io3Z6BmVSSzrlsCdb2O0xvPXAESqalMaMiVAPMqCbfG8mNyylXmHDpSU9ki0cQ12Z9Eu9yzEk3IQb/el0sb6k+xBapx07wpbNPf6vv9js9IWuepiqWpJiCIqkIzmjo3ixEKITVQOsQBvMP7Q+HgBcQo7xHZtYb6Fk+VmHxE2ZrAzN85U61WmiUqZqDMXfKVuLKVUWJF/eJ08JGauJt8Pn0amEm6V73xTD5KoGnw/DqwIPZ5iDoQXYvYj96Xd4zhaWVFT8KqvyFo7JrZGScuqTl5tsVmgzRMKMiLzQXiLw7wA8a1dzESVxBlNViugJv8ev1vGAIyIi0WFhgRxVhYIQFkrCV2pMKiMVYXsw3FwQfmCR8YimhJAAuSbAAXJJ2AA3M63yF7PRTy4nFqDU3SkdQngX8W8thENFPyVyG+JK4rG5uz3VGJzP4Fr+6vl1nYMPQCgKoAAFgALAAdBHKdKPpTgP3CRJhufaVsXRfxp2/uuT/mnQFWYzn+nerhvSr+dOSx/qRKL3IfHwaiU/HKAPRenymh9n2HzNVxJBuEoYdT/Vp0lZrH1ZR+7KPiIsqHwtNpy1iqa01orlDBFcrsSKgD5wOou2/jpJ5OCzJwXpEUmgkbH4hKVJ61RiERSx+HQeJOwHnInDscK1GnWX3aiK6gm9g6g29dbSkpLOpWttIp11gbWC0aAFoLQ7QWgIIiFaHCIgAUKHCgAIIUK8APHVtYYEGXWOBYxBKJJweFeq60qSl3Y2VVFyf9eMd4VwyriKq0aKFnbYdAOrMeijxnd+SeTqWAp30euw79S38KeC/nESK3kTkJMIBWrWfEEeq0r9E8T/AFpukpxaoI6qxWASJHVWGoiwIWAAsx/Py2qYZv8A1R/8ZmzAmY9oGHvQp1B9yqL+SupH+LJJx5Q48lJxo9xfQRGLr3TCVFJVhQKhgSDelUZLXH+tYOJC6If6oiVS+Cpv+zxFSn8KiLU/MfWWyWyLnyI4txOvXpCnUqFlHSygX8TYC59ZueUqJTA0FPRNPQklfoRME1MtZRuzBR6sQBOq06YUBRoFAAHgBoJXMjk8kC0O0VaHaQKhEOKtBaACIRjkTaACIUcIiSIANmCKIgtAR49tLblzl+vjavZUV/tufcpjxY+PgNzLTk3kutj3za06APeq23sdVpg+8fPYfSd14JwejhaS0aCZUHzY9WY9SfGAFfynytQwNLJTF3Nu0qEd5z+g8BNCiRaLHQIDEKIsCGRDEAABFgQhFCFAKAlbzJh8+DrL4IWHqnfH1WWIMNlBBU7EEH0OhhwFnOq2tFD5WjuDUf7MrE/+JUj1tSH5EyPTUjDlTujZT6jQ/lG69T/dKFO/vYirWI8ezQU//s+k0S4XuXvsSuX8P2mJpDwcOf8AhjN+YE6RaYDlEf72vklRvoB/mE34aUz5K8nIq0OJzQXkSsVChZoV4AHBaEDATAAGJgvCJgAIIRMLNAClwmHWmgpooVVACqosABsABtJaCEix0CAwi8AeGVicsAFZ4oNGwsVFYDmaAVIyTDEYD3aCDthGWMbYmAGYxuG/psTTH3gaq/LO3+aZmhXJIB2QFV9Wcs36f3ZscebY3D/1+6fMZrW/iMytWhkxFSjoCrOdSBohAO/qPnLk/htmjGnKkuS95R/7UT/5Tf40m3FSYzlI5qlRgNAoW/mTe38P5TTNUtKm03sQzQcJ9MtmicKgh9oJX9rElzEVFlnEGYSvVpKpjSAD+kSTEQoCF3gMQBAYAAmFBaHlgAyoiwISrHAIAALDyxQEUBAY2KcI0o+BDtACN2MPspJtDywEQKiGM5DLQ0401KAzI8y1Ozq4Z+odj8AUmZ4tRNXHNSVrNUNZCdu7la5O/l9Jcc51wcUtMbIgv/aY3I+WWM4NFbiBqAZh/Ska/iIAN/Qy3iH98zTj6oJSr14NBwfhqUaQpUhoPqbAXPyEsaeFMk4QDQWA9JOWmJUZ223b5IK4aH9nk/KIWUQERUoCLySRaFaADGWDLHoRgIatCIjkIwAatBaLMKACBFCIvBeADoigYyDFXgA7eHmjBaC8Bj+aDPGLwQAfzwGrGDeIKmAGD43wCocfUxAwpqhiDctSZD3QLZHa428Irk7lyvSrM1RGRCGtndWa7MDYBWNhpNz2cWFh2o1PVzePopcV60HTFto+rxm0UDAyj+aDNGM0PNAB68EZBh5oAOGEYjNBeABmJMO8KAhJiYoxN4DP/9k=',
            name:'Breakfast',
            desc:'Breakfast is the most important meal of the day. So in honor of the meal, this piece is created. Eggs, Bread, The Cloth. Instant fave.',
            price: 110,
            id: 16,
        },
        {
            imgSrc: 'https://teddyfeed.com/wp-content/uploads/2020/02/6364d3f0f495b6ab9dcf8d3b5c6e0b01-9.jpg',
            name:'Layers',
            desc:'This must have taken forever to make. Hey at least it looks good.',
            price: 110,
            id: 17,
        },

        {
            imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1175212319.jpg',
            name:'Blue Dress',
            desc:'This is actually a really pretty dress, all trolling aside. There will be multiple oohs and aahs for whoever walks with this on.',
            price: 110,
            id: 18,
        },

        {
            imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUFBcUFBQYGBcXFxkYGBoXGRcZGBkXFxcYGBkXFxkaICwjHBwoIBkXJDUkKC0vMjIyGSI4PToxPCwxMi8BCwsLDw4PHRERHTEoIigxMTExOjMxMTExMTEzMTExMTEzMTExMTExMTExMTExMTExMTExMzExMTExMTEvMTExMf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAACAQMDAQYEAwYEBgIDAAABAhEAAyEEEjFBBRMiUWFxBjKBkUKh8BQjUrHB0QdywuEVM2Jjc4JD8RYXs//EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EAC4RAAICAgEDAgQFBQEAAAAAAAABAhEDITEEEkFRcRMyYbEigaHB8BSR0eHxBf/aAAwDAQACEQMRAD8A5KKMUBRgVYIOjFFR0ACgKFCgAUdFQoAOjpNHQAdGBQW07yEUmIkgYz096d/ZyCQr7wMcQ24KC0ZhgMjBMxxmpqEmrSGJikEU8ooitQAaApQFLC0e2gYkClhaAWlqKACApQFKApUUAJApVCKOgYkUKUKFAFSKVSaVQQDoUKFAAoUdCgAUKFCgAqOOmc4wJP0HnQpSkgggwQQQfIg800Ml6oBG2ICoXzBVpYQ3JJ6kGDBpCCBA/oR9jUsdnfuxeDoqM5UByVYZOQqr4gY/ACR1ECaTZ0j7ghKBjIEkjPIGRyZAHrV8u7u+wCLiLClASCIZiAJYGDIDHrOSATB5imttPGwUbawgrImQZli08evQxQiozqxDQWjinNtKCVWMa20oCnIoitRGN0sUIoRQMFChFLRKAEqtCpK24oU6EUFHQFHSIgoUIoUAChQoUAGKOiFLoGJpyzb3EyYAUsfYUmKlaHZvC3CQjkIxESFJBJz7VKFXsDVfB/wrbvhb10kgiVQEge5j6CB5Vqu3PgyzcWZZG5kZE8ZDc+1R+wuzX7u0EuFdnhYLGWQxg8jg1dXLJ1AXc7KVyCpZcSRmKolK3bfP6GxQ7Vwck7T0jae89tyCRBlZAYNgMAes/rFMxWy+Oez1W33gUtcm3bDRLAItxycYyStZBRV0ZOUbZmyR7ZaAFpYWipQNSIAIpMUs0moskJIoopYFLW3SoBCpTyrFHIFJBmnwAl2oU6EmhSsdGeoUfOVUx/bnNCKCsKhQo6ACoRRxRxQMEUoCgBS1WgAKKCWSq7yWLMSFHA2jcCT6SF/PHBoxU/sjRd7dtpB2F17xuAlsEF2ZuFAWcmpRkou2gqy97F7eu27ahLiAgkePJ24yQWBwIzkZPOKv9R273aDuNRYZjA27zcmSSRtFhT1x4hHkah2exrD6h3s3SUUMyhEkuUbZGnCeIKFBlpU4EblNaBdNeZhbfUhyV720ltD3rAA4Z9/dpt8m3gnz4OaSi3adfSjqQlUe1xuvPqZf4j7QuNpkRWXddAN4AySEc92ztE2y2fBAJ2OSOlZHT6dVdtocLAA3EEMYWWx6hvuOIrefFVu2mlRLahQ95LgCsH3K1q4qvvABZiwcHoAqAACBWX12iuWiA4ieCMj2nzq/HKPbSMedS7m6/wBESKI0o0RFSKAUYFBVp9EjmlQCUt0LjgYFJuXegphjQ3QxW6afsio60/aMUhnovsvu7tm1dFtYe2rRtXEqDHHTihVF/htre90KrObTsn0nePyaPpQqsicPde4t3LFxGgybbMABz+vvVNVnr7pu2bVyZgwZMweKrWFSjwTyc64ERRxRijUVIrExRxSoo6AABVr8N6FL+pt27gc2zuLi385VVLQvkcDJ9aq5rWf4fW9t9rreKLTgW1nvX3sqlVHPyhzI6CozlUWWY490kjVXPhyxbtubdtSLe5LkbDut3V8DtcugyVP8MdeKxRvau4RZ0u9Fs21R9lzYp7xnYM8kDG8gQJETzx0Xt/UH9kvNbPeG3ZdVKkG0tllOxgfxshjzyvmJrJfBKi4l9zi6zqCc5VEWMcHJbgdfaqYOTTbNrUW1Di/sVd+92nbvC0bjXXUreCqe8Q4IDEwIBAYEGJ+skh8Qa92XTpaRSlzvFtJZ2bGHJ2n8OTO7Ga0XY+quXtRqLvd3Ldu3ZtqTcERDN4mTLEyzwEnAPUirk6QSHuCdyPsG3/nWHKg7jAazHhO2ZPvTk4rwCxfh1J8lD2V2bqt3e6q+/ebn/dAlVtswAO9FhJZSDCjELPkLTtDSLctlTkMRic9SDA+UjA+vrT6qqAKMCIEyZjGJM4H8qNWBMj88ff6ffPkKrcnZcscVGuf3Od6iw1u5ctkf8sqCfRxuU+mKQErZHRor6vUXF3qdg2tBBdFheBkCCT5krPJrKuQP9ulaoO0c3LBRehKqBzUe7cmjuPNNVJsrCoUdETRQBg0tAzTtHFMrJMDrVrpj3cbeRnIBz7HFIZt+yO1LGktt+ysQWCF990NuPGF2wInymhWe7GSbtnftIYvIIGALZiYHU7Y9jQqsnSMDotZsVkbKP+R/iFOTUbTaYswkgDkkkce3nT8fvBK7hzExIqSashTaFRShQciTtBA6A0BUiIDSSaNjSCaAFou5lQEAsRzwB1rc6LShVBIx+cYkg9DJHFZj4eTcXkDEHPsRH86V8Rahw4AuMRBO2Y2g+GMcyB19fOq2rdGnHJwg5eo3qO0XBu27bubTFwtslikMRJCEwpPnzmtz8DKLli5sUtcBY3rTMAL+4RtVv/iQAAmAJ4zFZS3p0BSyAPCu5jEFmwMkjzMx7eVWvwoTp9SqFmC3dqEiB4xm2HP8DE7W9GBnFRlTTSJ44tNTf/DbpozCEXQFQH9m1JUFbPQ6dLR/5h2qRvb+YqM6ICzAQXYuQWLHcwy0zOeYxyYwKla26SxUiGMF1BHdo67l/dDO0Yz5lqrNX2pZssFdgbjkbVwD4v4pMIkjk8n2E0KL/M1uSW29D62skkT5zz1yRxGDnjmOlV+u7YW3geJhOBxPOW4B488k+1N67V3Dbui4QCJFpbTEhtywNzQMzAxAAjyrAaW5dRltZEsPC0CPEJ2k4ExzVscZRLqbfGi67W7Wu2wyEKQ+W8PykndCsD5g4I6VXb3IDNbZQxgE8cT7x61N+ItSDb2iPEwwPJf/AKH3qRfuBrRMiNoIPoBI/pVilSRV8Lucu58K0VLUmlNTTNVhlDJpBNCiIoAl6a3A3H9CntO4uFpwhBAbMz5geVLvm3fZTbUpbW3bW4sg7rqrDEeSmAfqaLVXdvhUCSMDoB5mgZd9mX7dnUWw5fbs6eKfAYAk4A3GhVbfnvLBPGz05FuJoVWWGRe0AiPmWJHpipVq+sQ/lx5z60rXWdunssTySQPQyZNQ71so5VsER1B5E0LZDcRwUYNImhNWEBZNJuJ8vQE/y6+2aKanXtIe7F27KBx+642tg8HMHHBjBGTSboeknfIdlTZHeC6kHhRu3PB8iMe9K02qt5uMFa4xgK3yqOhk4AjmoFq1LKOjGJH9DV72d2UlxwgWV5JMzB6SMioyaXJOGGc1V6LTRdlq9q4QZuFEdXGFCPIUAzEna8+hX60rXb7sLPzODAx4jjr/ANMZro+mshQQABACgqIwitA56T5gZOawvbOrVLrPp7ublspc2cgHBUyJEgAdD4TxVeOVs1ZoOEE09/2H9Z2xqbI/ZUO4yAr/ADXNjKsIFAjcD1OeMTms/tZmIIYucmdxYyOTOTiM1Pvdh6m3aW/sITaHlT4kXlWI5AjOOOsVpuy+0XvozWiFuMqq3hHhaMfMsFZkirdR4M0e7Iqb4KHsDU7S6M2CICnncZ+VT55+oFWn/wCPrdIa8zLPCqBubcREk8efnnpU46bT6KLlxzcu3GPiaDcPntB4XqTjkDOKoLPa1x9VbuXGItbu7Vd2EkNs8I/EYHiPnVbbbtF8VGKUZck/tvs0W7yG38tu2GIZmYAzGJ46TxVDqXuWgbTbYZZxMAMTgT0mRWn+KdUqc8lMDzJ8x9j9qy1uG2PeZip8AIgELmGJ6iZpw42RzpxlcPTfsNq8qDSTQVNsqQQVYgg8j9f0oEVaZgUaQSATAJgnyHnRGrS32OWRWGSROTCGRgSOD/agAabs+5A7nadpJIOCw6+4x+dR/wDhupDHeFJbruFXOmRluMPFtCqq7mDCABhSAOMf3pzUHzoSGyFfWbtk9FttP1AA/M0KWhkp/wCL/UKFVkjH6q89zafwooUekYNIFl4naatH7IuWFLlkIBAPPUgYxFSdJqN8KQM8QKbTS0hRSlyykR+lPCy3MU72lozbfcBAJ+xo01R6ijub4BRSdMRptK1x1tqJZmgZA/M1dWuzrmquW9KxGzTbgzIZEFhIk9cQMdDVZpEFy4FJ27pAjzjArb/Alu33b28d6rEtH4l6MJGQOPoKU5UizFjUpq+C2Oit20WEQEAKg2iFjr54yR7etN9l9lC1LFt79W2qsAnIkDPl6Vn/AIm7Zf8AbLaWnA7swMSpLDxSvlHTzNXfafagt6e7cyGVSArQIdoVc9fPr08jVPa+fU3/ABIq16EzQa5LjMuQQ5HMFoiWX7HjyJrG9qdg9wGcbXTYVIllhj8tyMiVPr19alfDOstuUG4boMLgGVx16+IfnWq12mD23UgERgGTxkD1x5CfamriyDccsWZvsDtd1ss1zUJ3aKLZtsgFwRG3aRJfwzyDwZiJqDpu0raB2sFlO3KkEY4BQzgj34JxS/ifSKYLbQc7GGA45K1V9koqusGXKuWEYCiIP1JH0q5pNWZI3CSivINN2Vf1BNy2u7MHxj1P4jMYbFaLR/CwGw3FBOyWkz45BDIZAG0iOsz95nwraKWoEw9x2E52gGAuD/0KfrV9PH5/bn1OI+oquU29I0RwRSTfJlO39GGYG5JABAJMDJIJPTHg69az96wTb7u2Dcho8PiaMnhfaujukkzweeojPT2n3gjyqPbsi2WYQqsdxgAAGAJMR4cflnioKbRfLEmnXk5jZyGYkkyMmfWZJ9vyoya0PxHojbLkKQjMGBjEk5Hpnd9KzrGtOOakrRzsuP4b7QialaDUsHRJlS4G0k7SSQM+QOJioTGkz1pvZWtM1qO3e3QwAKnbCmQIMYwKLUGR9Kh9lXWdSxMloJPUzPNSdS8A+1EVSHJ27GLbHvOPD3fh643ChQQ/J/4/9VCojsyw1V9wNzMyEieIP5UvT32RgymCpkfQ0endnMKqjzOYwPLj6UrXuouHiBAkCAYETHmalF+pW/oa3U67S3rW12XvYwJJMnn2zWP1ICMVBBqFcuSZH3o7JO4HnPXrUfOiV6JVhWBDAwQZB9RV5pLxLSoNtuhQsBMQSDO4fc0Vi2lwAgRPTyNXvZXZRJDEYHHrUu1DTZm+0NM7OMcL4mJMsZ6k8nk/WpLaK9c04Zncp3m0eEsAApkl5gGdo2nPBrRaL4bfUnUXNwW3ZbaYy5ZpwvRQPDLHpNaG12P3oVCHXY1vcLT7LLIW2G5p15dhbO1n48WJ6UOTjo2dkJW0zMfB/ZPd21u94P3rCV2+IC3OC04Eny8vStjYsyJPXn1npkep/saY0mjS2UW2CEAdgGTYQWJIBXG09MR1EjgaDS6UQPVT04kdZE/kKrcnLZfGEcaOR9r9nMdYbKsFDsChcwqhxJJ6DO7jn3pGp1KG4blkSFtLZJMDKNMqBzKoseYNaj4w+HmvXFuIVB2lCGnJDYyJ828zx9M32P2eg2vedVW3dLEE8urbVkxAAJkk4wOlXqScDHKDWTRrOz17vu0I4T/Scc/qKno38xj7YPTqKhuIEjjkHnHmD1FSzyP16VnR0JpUqHWx18z9sTP6BzxSHGP6+oxyPtP34knv4PQRmevE/wAvX34ogrMdoUj3hSSAYCA/McBcxAPNQyZIwVsai2tFXruzC+nuKCJYEpKnbCnaC78ABlABIxiudXUKkqwIZSVYHkMpgg+oINdr7F0KXie88IUCCoNuT8xX/KrAxBOZNU3x/wDDtm/cL2fBqBAcEbbd0RCyxwLmIB6xB6ELpcnbFylSTevcy9ZHvklG20t+xycmgFJ6elSdTpLlsgXLbISJAdSpI9Jqfpr1pkC3B8vAHPuvqYremmjBVB9iMNpAPygY8vQ1K1DDPtUIdpgs7MXzAAfbIC9MU3f7RDYXn1IxTXAE1XBZVnK24Pod1Co+mdSyHgtbznmGNHUSRAv6pUi3bHG4gc8+Zqt1VwuRbXI3mCYknaq8+WKireIJJySCPvSApNBCyZf0bW32EgmATtIPPSRU3T2oAkCar9PaKkECt98G/Dh1z7iCtpHC3GHAMbiPtH3E1JUtsENdgdnkobkcnHsMVq+2e7sWbC23DXLltS4keEtHUcZnHpWr+Mrens6ZVChWACWguIVYn3UD8yK5W6sxJ3Dw5BHn0io22TXBou0e0tT2Xp7ZRQXuXf3tu5blCEW4HQMPmDkyGHQD1FPdlfHFq6q210iae421LbpFxERiA3CqwMbsCcxNZrWfEWpuIbd253inpcVGg+akiRinPgvQ27msUFdqhWZoJABEBSP/AGZRHrHWq+2lsm5XK1o3z2Au8+W1R9Jn3/28wRVzpR4VMRjP+3P86r9V8rnzuH8lU/r6R+GrbskBranrEfUVTFbo2Zpfgspe3NL4HMZSW+g844EE+XoKwXYfZaXbANxsXNTLLuCt3bPtCycAF1GOs11jtjTzbcqOUYfWDzH9j9eDj37LNvTLYQg7LbrIie9Vu8VmDCcFV2+fJFRyTUfw3tkMb79vx+xV2OwrYkW3dN22RaPd7l+RtqsSGG7JP86l6fThGQXWd52ypItmHJVlUKPGRKAnd1P1ftXVdZVY3oWAknAK3F3IflSWjwjyigZgi20jxGFIUCYZJV8rbhIwRMn3rm/EnHVnUcVJbXP2Cv8AZ4t7gQdqGUa4C+0KxVmwflVYORyZk0ogEZU8FigluHMjY4Eb9sk+vlT+t2973m5YYqxMGW8Co67l/ADsY7pOD0FR1kDxEsogk75nIXcHALKHAHONs8VDI7b9wi24ofsX7iMz2yrMVbbBDB58SwjGVUB26jC+oFIuarxd6x3EsW3SUDBSNrlSMnaxAHko8zCO8HhuOf4Scbh+7OxjvBlbYkHPkZnihbVoyd0EE5W7AG9GfY2RK7QBJw2etRt1XgO1X3NfT3K/trsg37RsoQLgIZAy7QzLJClsKHZXxA/BExxznU6drblXVlZGIZTgggxB8iK61Zu90y3CPEsMwLbMhipMGFZ2BnmPCOBmpXxh8G2taO8tkWtQYljJV8QBcA68DcOPXFdToMlxcfQ5nXQqSl6/c5ZotDbvFF3BJMbokAZkkTWz/wD1mjhWt6lrqMJD27VrbzHLXRPWsW2h1OhvbL1sBl2ttYyl0bts22GG5985itjf/wAVb9tRt0tmIwAzACSw6e351v8ABgY6v+FskDvbojzS16+V00Kh2v8AGPUEwdLZH/u/9qFAjk9jTO4ZgDtQSx6Aep86ctPtIO0GPOrfs/tVRprmnYASDBAEtOc+oP5VAtWQybv1zTEPXdYpUbVgnn09K6r/AIPOtjRarVuTtN0KBJz3aAgBeJJuRPp6ViPgv4JvdoXJAKWFaHuYxHKoD8z9PIdfI9C+MdHpdHbtabTL3ZUbmAJhhEBrg/E5M+I5x7VFuySRRdudrPfcs7EmDtH4UBM7R6VRO7Gf6Udy/JnnGaQDg55FMkRXNaH4HQm/I432lPqGugx90B+lZ5xW8/ws0e437hEjdbUT/EhLyPUSppS4HHk1mqH7sn/uP7fb8/zp74ceVZfIyOevuab1C/uCf+438+P15U18OXIdh5if61mXzG6W8T9zTXbAcAHiZNUfbmiW2qOGYlbgJ3S8kjbMczAjHEmry9qkQAuwE4E8k+QHWs/+y3b9z94GCDcZIUgEGV7lhBBhoLRwpHqa+ocXpK39jN09p23SX6matWNpNqJthgwBSR3N1XI3kZxG0L12LQVQwhpPyk7ouzuHd+JYDBsNAAAGetT+0uzTbv2rak+L92GZoKw29G3dSNrKCQct9audZY0wUpsEqdxI8BU7stvImSWOR5msmTBK3J0vJ0YdVGklb8fz3M27SobxkBIYzDGYlSRmWBkg8bAJGaSBLdNxORuXxEqUUKxw6tkZ6Mc1I1KqVTu7e3YAJBDM28GY6OYcnPMkSMmn/wDg1xreEIYqS0lQrHZAUKZCyesdTjNUxxTyfLsseaEPm1yQHDHLjJIXcQ1uZVp3MgMIG4GM9eKNIchiTDgtJVWCG6pXeWUz+EBQDgMKebQ3truEiJmZU4YOJRwcLLRiJg4nD+k0D3BvIGC0TO7DBgTsJBIIMSMcedOODI5dtDlnh29yf00RrawCAYIYFgpVygYMrtDZ3FpmCY9AKuz2q9vTjvAqtEeOBOTnaT0GSZ6GBxWZ1M7iHQoNzTviQCVLRILMzLuI9JHlTYtsPDHElIaCzKPCuWYvKYLRjY0QaePI8Tdc8CyYo5Um+OSv+OWOp04e67JctXP3cr4XZsBSR4VJlcgwJ9DOG1/dhh3m+IMBNoIO9p3TWw+I9bbt2gtxGZHAQBQsAAFkcbiDMTnOVnwxFZg6Q3yFDqrKgMutwg+JgBuRWiIEEjr6V0+knOcLkczq4QhKokFdPpyA229B4M24oUq5obo8JtluPlBK/wAuaOtWzLooihHQ4q27Otzb4849DIz9ppu5f3W0QT5t9Dj+9ab4X+FdXqk/coNiyS7nahP8IaMn2+sUWFHWdD2hb0nZelvGAV01rYBje7W1O2B5mST0ya5b212q9+5cutlnM/5RwAPYQKPtftHUOLdm8pT9mtrZFuPlKAKSfNjAz7VT2jJI96SGSbYBWetKcxj0FNou1c80yz5pjFXa6Z/h4GS1bTcqh2e6QTDPKELt84CqT7VzBmrrHYekKJprk4t6RgfRygERz16VGb0SirLK5cB05/8AI/2DH8o/rVZ2LfC3Aw6mDPr+jzFS0cfsqkedz1/+Qxx0gVQ6d9twc8yOueSJ58qyt7R04RTjJfVm87XRdgcsRGBxnd4Qo3SASSIMenWsr8QfFzWrZCWgXRisXB4doja0LBk4xiIq/wC2WS5pCH+Vts/cH71yztdCLRaDsYt3bchghgwescVJ4k593h8nPWo0+UP6b44a8NR+1PatlLavYKLtYOrmNgZiXYHY3/qelP8Aw/qbxfa91rkornvWa4wdRkgkyJAPpgEQa5wLe+4q9WYD7muw6Ps8W7lh3woQ7j0+Ugz6SxP0NXPHGSqStEFNradFj2Vobdy4r3O8JHiUM5xcVoZjESfl+mOAALa3p0KJbd2Vm+dd7AudviUyZIIXkeWDmotsorBgwKo0kAA/NK7ieQAM+w9KuXfwh1XvD+HaVmD5FiBH1qUYKC7YrRCUnJ2wnssV27jIYEGSJAaQpIzmINRNTqu7BdgRPhUTMscAiOn9ASaet3mIdxkDdhxDKyzK4wwnqD55pvtDSB7e24wIIM4jociD5Hio5L7X28ksddy7uDH3rzuWZ95K53S4O4FRBG3bLCMQNuYGZqi7d7ZSx3YRA73MASCm22UKktBJ+bjrJMjEuds9vW9M6C5vdoUkKDMLInxPADENxMjmYqg+L+0LVxrOxxcdC3iRgdqY8J2nGYgciG53VyOnwylkTmnTs6+fNGONqDVqv4in7a7cuagwwCop3BFiN+QWJifxNjpNB+0HslWSPEkHcCeHY+dVTn8zUjXthP8AL/qau1CMYKo8HGlNydtlh/x+8AD4MzMA4gwOvlQqkDx60KlZE7R8If4YKm27rfE2CLQOB/5GHP8AlGPU10LW62xpLW64yW7SCAIgY4VVHJ9AKovir42s6SbaRcvD8APhQ/8Acbp/lGfbmuO9tdu3dVcNy9cLnMDhUHki8Afz6zUOR8ln8aduW9bf7y3a7sAbdx+e5HDPGBAwOcdfKisXFUZ9qjvd6D79aVp3A6/epDJD6hT1/I1HN4foU+z1GY5pjFW3DsqA/Myrx/EQP61263tTTXRiUYr0nY+0gkeWIzjwnjNca7FAbU2Q0QbqcmATuBAnpJgfWuq/tRe3cJXad6WyJ/gFxjn3OP0KqnwW4Vcl7oUlw/sqZ/G+c4/eMffr19Oao92YByI6iRjFWGnuzYEfxXP/AOjZHrk/l5VU7QY9/X2jyPXy64rO+TqRVJ+5P+MdTu7Kug/wp9+8Ux96R2vatr2La2hfBpbJQwpxc7rfBYYZjmRBziqT4w1RXQXEz81vny3qTz9Kido6zU3NPb7OCb2sxb8E7rndBgA042iAR/lBq6G0c/N2xlT9DNdg6bvNXaWYyWJ/yqW++AK7HqFgWXnhT94HP51zTsrstrfaA7uWt2n7t3bw7n2lXVI5hj9I54nqWtSAI4DxB4gj+eYq1S9DKnGUbQ9ftqbgElSYdSpgt1gmOPQ1a2NwRDtAOC4AHXLEe5z5/XFVOndyFaJIUrBO0njmRhsexkeeJ+m1RKk7ZUfKwhZ8QWCrHBGc8GJHkBiHrDoGi3BUlmaMgOxGJ6E5x/Kme3HVLLyFDODbURyXG3gD1pntXXNbtpuQbnIA/GiuQTBiCeDnHHNZNtS1yGZnZgFK7n3SAwE7VByCZxjAk+WPqeoUbgufsbem6ZzqXj7mb+MuzluWv2hPC1oANMeJWMgt5HIgR1I5IrCla6nrLK3LLKygobZIVYEmdyi2oOCRBBn7RjlgGKXQzbg0/DF1sFGdryNMtWtzRobe57gUra321A3byXYbTtPgPv51XAVMvalgoURm2F4HAYmt5iIuoRFYhG3LiDEHgSIPkZH0oUpjPShQBY6x2cyFb3g5qLsYfhP2NOtqnHDmPekhrjyJJ8/96Wx7EK1KtmiRIpSimMcBptjSy2KZY0hhMa6D8JX7jaI72LTecKTztW3bGTyck+fT0jnprS9kfFKWNOtk2mJXeSwYZ3OWGPQEDnpOJqGRNrRbgkoztmysH9yPMM5Gem8z/qqFOF54+vP6/RqyvWQlm3ydyBzMYLjdH5n7VTPdjaOJWYPWs3k6i3FtFb8TqXsd31d0UeUlgRz6imfiXs65oLyXLLHu5HdXG2nxbPGjAefi6CQfQ038SXCRaUSSHLgDqyABZPQS3Xy96t/j5Rct7RdG+zN1rQjKPC7j6jP3PmDV0NGHqEmm34pFb8JdpXL+suAgC2d94jJ2udiAK3QFiDx5+tdN1pBDHOOnQmPPzyfyrm3w5bsaWx3rOO8uW0aVMsSTvVVXoACAT5n2jdaDUPesC8VC95tYJzCGNpf/AKmEN5AEDpJsVXozPDLHFOqTLTTOpXDSfCZxwPP7x7VK05WTbA8AE/iEMSSVB+x5xmqVF2OyTAEOIOdpJx7Az9Gp7tO7cW3KmGSHLQZETML1HIPpPNRlLtTkxRj3SUV5HPilG2JBJO/C+EnjLLMeIDjkjPnWZcsRghSQWbIQicKzAZwitOcbTjFPa7UPeP7xpKBp8BiFJkoMiZKjI8QB6YpouoJfIO8ypKABmUsTuGSCPSZHNcbPkU5uSO30+N48ai9vYWoYKHuAF/C0DKkkeIgE8yQsRjJmMVyh3LEseWJJjiTkxXT+1yo09zd+7RrbBmZSxm4CMkgElcADkyBmRXMUzW3/AM9abMPXt2kIC1JdPl9v6mm0SasU0paMdP610TnEBUoqsxoz5UKYEfTaJ7j7UEnn0AHJJqzeyqJsAyOT5mnNBrIskKoBYsWaMkbjAqHd1GKr22T1RXuaINSHfNBWqQhRNJNAmjTbPin0iOfrxQ3QIQabfg+1WlvuyoEAdZYDJxy0/qKg3LRUwwj1nFUxzJui14nFXZ1C/wBsad7aFb1sgKBG4A4UcjkHkEH1rCt21qLjLbC2yD8q54EkeLd4TAmqnul9f19Ktew7CbiSdpPhDMcZ+YEdJ8Ik+ZquUoxTa2/Bohlm2orS8hL2kXKGCtxGHhYyN28EMMZgjKnmB61e/EOlt94oMXHt2wrMTuG4liVCzAiQIjkE4wBnjpiusNsZAdiPoC4z9K0Pa+rFxBcKKlxtqOFEAlDc8eSSSQEBJzgc8maVG/puzI02r/yVml0pu3FticyWgEwiiWOPTA9SK6pplGwRwAIGIC+Sn6jH+xrJfDfZ+yy1xlBe6IAPIt+3Wfm54ir/AE18d2pkjAH1j8gcj6zVi0Y+vzfEnS4WiTqLcMrfhBKkbjMMeQRkcDH96PX6zagJBmSgIEkGIkhhEQRnINHel0Bx7yRDDIx7xiYxVVq9ejIyckkfNjYVDSRPsQY6H1zVndY3Toy4Y901aISkxMKWOCYViU5aFMYJO04kg+k08gbGAFgbxCbZYg3A2W8zA/6iB0IgWrkBSeFJPAEkGQxMHgqBPSMejqbAMjEQQO7UAW4eF3DOTAwABPUTXDO7F3oo/jLWoLXdTua7FwFTKwrLBbgTCxAE4zHXH21rQduWb+outFsbbcqrSAWEiSZPJMnaIAkjzJip2Df/AIVz03CeY/vXZ6eUIY0m1fucXqXKeRtLXCK/T81e2LsAcDH9arn7OuWyN4ieMj+VWKacwMdK1xkpK0ZWmnsdNwEdCfrQol01HUhFYlzwQMCMVDdjFOW38NIY1CyRFZaCinTRKKdgJFEadIFFAoARvIo0vMMdPI8falYooFRcIvkkptDiC234jbPnG5fyzU7Tai0ojepC9GO0sf4hj3/QqsAin7dsHgDOc1nliSe3ouhkdaWyVae297wH8BHMbfDECQJH+9WV11he8kqOYkkLugk+nr5A1A0CG3c3gkHaYK8qfMSR95nNOvcYkIDgr4uM7pIXP3/Qq7mqNuDI8fTyl5vXuy1t/GVnaAdw2rA8L+UYxV92V2ir2rbCQGHU9PI+vp0rGjs8dRS00I2jbuU9SrMs/Y02cw31rVm2fNTiARx7elZ/tXVDvN6JsMjdlOTkNKziJH196oWs3VHhvXR/7bvp4pqp1QvFp71p6xH5wKozw741Zdhn2O6Nj3wkMBifQRxz6ZMRx96FrVHaVyCFzE/5gfIEFhn61krervqAJVh9QfuP7Upe17gIJtTB5DT/ADHvWH+ml7mz+oRqbCfr+v6/3o9VfRRL9enUwOn5f/VVw7ft7Adjq/k20iYYiDMkSB9/Oql9W1x9zdSYEmBJmBNTxdLKTuWkZp5UlrkdN5rlwE+eB0AmtWOzrhiENZjQYuA+RBrc3+0IKlWzHJyPtiumvwqkZXt2yvGhuD8B+xoVZ2u1c5ifMRQp9zCkcwU0RFEKOoiERQoyKKmAQowfWhRgmInFMBJmjottHtoAFP6YSaY2GnrCwahPgnDTJqkiYJgASPSevpIH5VIt7JDtyWBzxAAAIxJqIWKtIJBgQRHlmZpSI1x1G7qPwqOs8AQacKvfoap5LwKFebs0DqIpNpPCKfvKM0VpPCKDKMMhNVGrtQ3ETWlRIE1T65dzVXl+UsxclU1vFIKVNdKae3g+1ZYy2aHErLrSfQU7aXrTLLUzTZWK3rSML5HdM2asjdPnVZawanqaaESFvce1CmlE0dOxmdWk0KFRECgKFCgAxRihQpAKohQoUDHFpSihQpMnHkXc+epWj+dfcUKFRXJe/k/Mv2pdvgfrpQoVMoHjwPrVZqP1+dHQqvJ8rJY+SFSW+X6GhQrF5Nq4Kl+ads8UKFdCPBz5cjlvmp1vihQqaIDq0dChQM//2Q==',
            name:'Focus',
            desc:'There is so much going on in this piece. You can literally never get bored of looking at this dress.',
            price: 110,
            id: 19,
        },

        {
            imgSrc: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2012/01/03/09/clownPA_220x350.jpg?width=968',
            name:'Happy Birthday, Artist',
            desc:'Are you a painter? Is it your birthday? Need something for your birthday party? Look no further! This is perfect for this occasion. Heck, you can continue painting with this on after the birthday.',
            price: 110,
            id: 20,
        },

        {
            imgSrc: 'https://i.pinimg.com/474x/6a/c3/fe/6ac3fe0fcc2108847c9e107a5b2305cd--crazy-fashion-bizarre-fashion.jpg',
            name:'Upside down',
            desc:'Whos going to tell her that the umbrella is upside down?',
            price: 110,
            id: 21,
        },

        {
            imgSrc: 'https://do.lolwot.com/wp-content/uploads/2015/07/20-times-high-fashion-was-especially-ridiculous-1.jpg',
            name:'Pink Hoodie',
            desc:'Add this to your collection if you like pink hoodies.',
            price: 110,
            id: 22,
        },

        {
            imgSrc: 'https://www.mandatory.com/assets/uploads/gallery/ridiculous-met-gala/gettyimages-1340263421.jpg',
            name:'Zebra',
            desc:'Hey, that is a cool take on a referee! NBA, buy this for them.',
            price: 110,
            id: 23,
        },

        {
            imgSrc: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-05/met-leto-kb-inline-220502-7d2384.jpg',
            name:'Spikes',
            desc:'Wear this if you have a fight coming up. Lets see if your opponent hits you now.',
            price: 110,
            id: 24,
        },

        {
            imgSrc: 'https://i2-prod.birminghammail.co.uk/incoming/article16237356.ece/ALTERNATES/s615b/0_The-2019-Met-Gala-Celebrating-Camp-Notes-on-Fashion-Arrivals.jpg',
            name:'Rainbow Effie',
            desc:'Look at all the colors! So beautiful. Buy this if you like rainbows. MUST-HAVE (disclaimer: cane not included)',
            price: 110,
            id: 25,
        },

        {
            imgSrc: 'https://www.gannett-cdn.com/presto/2019/08/29/USAT/cea9c54b-a300-413e-8e03-775231a0219f-GTY_1027959404.JPG?width=592&format=pjpg&auto=webp&quality=70',
            name:'Sky',
            desc:"The sky is falling, and it is now a part of you. This outfit, inspired by Blue from the movie 'Rio',makes you feel flying!",
            price: 110,
            id: 26,
        },

        {
            imgSrc: 'https://static.more.com/wp-content/uploads/migrated/20_lady-gaga-tiered-white-dress-white-wig.jpg',
            name:'Created by the table cloths in weddings, this piece does justice to royal white. Wear this if a wedding is coming up. ',
            desc:'Good Headphones',
            price: 110,
            id: 27,
        },

        {
            imgSrc: 'https://content.moss.co.uk/images/extralarge/966111101_01.jpg',
            name:'White Shirt',
            desc:'White shirt',
            price: 110,
            id: 28,
        },

        {
            imgSrc: 'https://media.gq.com/photos/5582de973655c24c6c94cd0c/master/w_320%2Cc_limit/style-2011-06-fashion-week-outrageous-givenchy-00270h.jpg',
            name:'Lizard',
            desc:'Chameleons can camoflauge, or change into different colors. Now you can too! If you wear this outfit, people will think that you are in the jungle.',
            price: 110,
            id: 29,
        },

        {
            imgSrc: 'https://i.pinimg.com/474x/92/53/ae/9253ae6ba03e4df6bfb7d68e2d9725ac.jpg',
            name:'Shiny',
            desc:"Buying this will make you so cool that people will have to buy sunglasses to be ten feet near you.",
            price: 110,
            id: 30,
        },

        {
            imgSrc: 'https://www1.pictures.livingly.com/mp/a9URb8Drt_sl.jpg',
            name:'The Royal Family',
            desc:'There is this rumor going around that buying this outfit means that you are automatically inducted in the royal family',
            price: 110,
            id: 31,
        },


    ],
}
