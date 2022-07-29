export {}

//constant array of survey and proudct objects to retrieve in dynamic routes
module.exports = {
    giftCodes: {
        "111111": 80,
        "222222": 80,
        "999999": 80,
        "444444": 80,
        "555555": 80,
        "666666": 80,
        "000000": 10000,
    },
    surveys: [
        {
            title: "Family Feud",
            code: "111111",
            questions: [
                [
                    {
                        label: "Name the worst last name you could imagine.",
                    },
                    {
                        label: "Name the family member that you would bring with you on a trip to disneyland.",
                    },
                    {
                        label: "Name a superpower that you would not want to have.",
                    },
                    {
                        label: "Name something that tastes exponentially worse on a plane.",
                    },
                    {
                        label: "Name the first thing you would do when you wake up.",
                    },
                    {
                        label: "Name a sport that the US is not the best at.",
                    },
                    {
                        label: "Name a US president that would be the worst at video games.",
                    },
                    {
                        label: "Name the tv show that people would most likely want to be in.",
                    },
                    {
                        label: "Provide the average amount of screen time that you had the last week.",
                    },
                    {
                        label: "Name a song other than the national anthem that represents the USA.",
                    },
                ],
                [
                    {
                        label: "heeheeheehaw",
                    },
                ],
            ],
        },
        {
            title: "Never Have I Ever",
            code: '222222',
            questions: [
                [
                    {
                        label: "Never Have I Ever Ran Track In High School",
                        options: [
                            "I have",
                            "I Have Not",
                        ],
                    },
                    {
                        label: "Never Have I Ever Got Arrested",
                        options: [
                            "I have",
                            "I Have Not",
                        ],
                    },
                    {
                        label: "Never Have I Ever Regifted A Present",
                        options: [
                            "I have",
                            "I Have Not",
                        ],
                    },
                    {
                        label: "Never Have I Ever Voted",
                        options: [
                            "I have",
                            "I Have Not",
                        ],
                    },
                    {
                        label: "Never Have I Ever Ran Traveled To Another Country",
                        options: [
                            "I have",
                            "I Have Not",
                        ],
                    },
                    {
                        label: "Never Have I Ever Got An Allergic Reaction",
                        options: [
                            "I have",
                            "I Have Not",
                        ],
                    },
                    {
                        label: "Never Have I Ever dropped mentos into coke or Pepsi",
                        options: [
                            "I have",
                            "I Have Not",
                        ],
                    },
                ],
            ],
        },
        {
            title: "Watch this ad and enter the code in the gift card section. Ad: https://youtu.be/NmE1veP251g",
            code:"999999",
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
            title: "Select the scenes that you would want as a part of your next vacation.",
            code: "555555",
            imgSrcs: [
                "https://cdn.pixabay.com/photo/2016/11/14/04/00/beach-1822544_1280.jpg",
                "https://cdn.pixabay.com/photo/2019/12/15/18/24/winter-4697776__340.jpg",
                "https://cdn.pixabay.com/photo/2014/01/30/18/26/skyline-255116__480.jpg",
                "https://cdn.pixabay.com/photo/2016/08/15/08/22/greece-1594689__480.jpg",
                "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
                "https://cdn.pixabay.com/photo/2015/07/09/13/05/rollercoaster-837861__480.jpg",
                "https://cdn.pixabay.com/photo/2013/02/26/01/10/auditorium-86197__340.jpg",
                "https://cdn.pixabay.com/photo/2016/08/01/20/13/girl-1561989__480.jpg",
                "https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552__340.jpg",
            ],
        },
        {
            title: "Select the political issues that matter the most to you.",
            code: "666666",
            imgSrcs: [
                "https://cdn.vox-cdn.com/uploads/chorus_asset/file/13439425/shutterstock_285980522.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KXVs2so9YBuKcobnYgBrPArBog4tQ_xqtw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNmHkBXRaXyZNmteJWzl6H2VWw4AaOxl4mFyX_eGw3vxM6hQhIE5VJ2hA1oQ6vskzKoM&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqex-4LrTsa4pF0RILVMCMyqZ-SIDBbAArTQlwR4gTEREl-ltdqS6hGyWXOXFyoo-tDs&usqp=CAU",
                "https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwa4TzM2zHyaHUiDc_o11SmsTTdVk5DvQ0Yw&usqp=CAU",
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESERgREhIYGBgYGRgaGRgSGBgZGBIZGRoZHBkaGhgcJi4lHR4rIRkaJjgmKzA0NTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzEnJCw9NDQ0NDQ3NzQ2NDQ0PTQ0NTQ0NDUxNDQ0NDQ0NDQ0NDQ0NjQ0NDE0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAYFBwj/xABFEAACAQIEAgYGBwcCBAcAAAABAgADEQQFEiEGMRMiQVFxgQcyYZGhsRRCUnKCwtEVI0NikqLBsuFEU5PSJTRjc4Pi8P/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACoRAAICAQMDAwMFAQAAAAAAAAABAhEDEiExEyJBBDJRYaHBI3GBsfAU/9oADAMBAAIRAxEAPwDdgR4EKiPAlgACOCwgR4WAMCxwWPAjgsAYFh0yS0NoBHpi0yS0VoAzTFpklorQBmmLTH2itAGaYtMfaK0Aj0waZLaDTAI9MGmS2g0wCIrBpk2mLTAIdMGmTaYrQCHTAVk1oCsAhKwaZNpjSsAi0xpWTFYCsAgKxjLLBWMZYIKzLIXSWmWROskFTTFJdMUA6QEcBEoj1EgkQEeBCBHAQBARAQgRwEgAAhAhAhtABaG0daK0AbaG0daK0AbaK0daG0AZaK0faK0AZaC0ktBaAR2itH2itJBHaK0faK0AjtFaPtBaAMtARJCI20AbaNtHkRQCMiAiPIgtAIyIxlkpEYRAIWEhcSywkDiCCvaKPtBJB0FEkURqiSKJUkIEcBABHgQBAQgQgQwBWhiAhtAEBFaK0NoALRWjooALRWjooA20Vo6KANtBHwWgDYrR1oLQBtooYrQBsFo4iCSBpEBjjBAGGAxxggAghtFaAMMYRJSI0iAQMJE4lhhIXEAr2hhtFBBfUR4ECiOAkEjgI4CARwgBjgIgIoAhDaECGACGKGCAQxQwSCKGK0AEUNobQBsUNooA2C0dFAG2gtHQQBsBEcYIA2AiPIjZIGEQWjzBAGWitH2gtAGEQGPIjSIBEwkLiWGEhcQCvaKPtBALyxwgEcIA4RwgEcJACIRBHCAKGKGCBRRRQSKERQwAQxQwAQxRQARQwQAQQxQAQQwGAAxscY0yQIwQmAwBjGwvKort3/AS23KUA4nNmk01TNsaTT2JTVbv+Ujeo32jMljOMKzVnpYHAtieiYo76wiBxzVSRuR5TocN8TrjddN6TUa1IgVKVTml+RBtuvkPiJm9dXZZab4O9hqhLWuTt2+UsGQYY3fyMssJvhbcdzLIu4jaQtJ2kLibFCKKKKCS4scsaI4QQPEcI1Y4SAERwjY4QAiGCGAKGCKAGGCGAERRCKAKKKKAKKKKACAwwQARSLFE6djbeUuv9o/GYTzaZVRpHHqV2dCAznsG+03vjSp+0feZX/p+hfo/U6MBkGEPMeHPzk5m8ZaopmUo6XQ1uRlCw38Z0DOYyre1phn8GmLyYelk2Pw9StUyrFUKtKpUZ2pVrHRUaxYBl7bW7Rtbxlrh7OS+OfD4vBJQxbIGNRLHp0Ww9bc22Ftz6vZa0hfhfH4arUqZZiaa06rl2o4hSVVjsSrAE/Ls52l7IeF69PFNj8biBWr6CiimulKak8l5E9o5DmeZN5VyVb1+SyTs1mGtr98tNKOGVQ4I5y600wO4lMvI1pC8maQvOgyIooYoJLQjhGrHCCB4jhGCOEAdCIBCJAHRRRQQERRRQSGGCGAERRCKAKKKVGqtfnKSmo8loxcuC3FKfSt3/KLpX7/lKdaP1LdNluAyotZ9QF+ZA5CW5eMlJWisouPJDij1fMTM8WZpVwuCq4iiFLoFKhwSu7qDcAjsJmmxPq+YmT47XVlmJAF/3Z5dtiDObMv1F/Btj9jOHhG4irU0qrWwaq6K63V7gMAwv1DvY981GTJi1oKuLdHq3bU1IWW1zptcDst2TJ5Fw1iquEoVBmmIRWpU2CIABTBUWUb8gNvKbLKsK9CilJ6j1WW96lT13uSd9+y9vKUyVx+C0DpYLkfL/MsGV8Lzby2/qlgzrw+xGGT3M5+bZkuGp9IwuOXdv7jPO247UtdaA336zMf8ATVcciocP1Sttrqxt39bkezbzmEyrBuzgpg6Rtv1yB8Cm/lOb1LTkkzTEmlaOriuNay0taUaYJvzqAnt+oCCB7bzh1PSLiC99CKvcFLED7xIv7psMywmKNHS1HDgDeylW+Sief4ug+q3RU/JRMYqPDReTl4ZpqHHCDrqKhPO+inb4mavhHiX6aXBBBQKesFFwb/ZJ9ky+Hy/EGmCuHpAWG+wPjsZ1+DqL065FRQrMp0imTpPMte82wNKVL+yk1Jq2/sbVpE8laRtO4wIYoYoBZEcIwRwgDxHCNEeIARCIBCJADDFDBAhDGtyMqdJ3CZzmol4x1F2GUg5h1GU66+C/TfyXRFKtNjrF/b8jLU0jLUrKSjpdCnLLueVu3nOpKBYXPjMs64L4vJlsVxHWw2YJhcSiLRqj9zWTUBruBoe5sDc2v7V7zZtTiDEVswGDwiropdbE1HBYJf1UWxA1G3b7e4yP0jVqDYUYZ0FSrVdRRQesHBHXFtxa9vbqt2yr6PKq4bpcuqoExCOzsdV/pAb69zzt8t++ZpLTf8Av3L27o29NiWW/eJfMoa+ug72Evma4PazPLyQ4k2QnwnHzTBricO9BiVV1KlltcA919rynxHm+Iw9TSFBRh1bBSbi973I9kpYPiDEMd0HgdA/NObNkWujbHHtKNL0f2UKMxxwUCwVa1lAHIAAWA9gmgyHJBhEZBWq1dTFi2IfWy7AWBsNtvjKGaZ7iEF0VF81b5tM+eKsfqANRLX3sifrK9Ry8kqKXg9Hw62LeC/mkxM80z7jatRANJ9zzJ6Jhtf6o3vvO/6PMyxeLwrYjFVVfW5FMKqqUVdiGCgDn7TOvDK4pGGRd1nL4tz2lV1UV6pAAJqMqg3NzYXN9pysnrU9d3xFJF5WL6jz7BcTsellqQwil9WvVanYXXs1agduU83yrG1wRocg77qiW+Ce0TDNierU2aQyKqSPVM4zKk1LTTem5A2ZVXfx0k/Oec10LVLl0AJ3urWG/jOzm2Y4tKCtfEtqA3CgAc9t6Y7piWx+Jd7Fn3P1rD37TOEXK2JSS2PSKeY01pjeidvq0Ha9vOXuFc3R8UFLILhgtkZNR7hfn4TDp9KVQopvytqDuefcAs2Po6y4Mz1qoBZbaFqA6lPPULgd3d2zXDDuTIlO1RvzGNHmMadxgRwQwQCcR4jRHCACo+kXAkf0lvsiHFNZR4zkZrmi4ai1Z0d1XTdaa6nOohdlvvz915yZcklLSmbwinG2jsLiT9mPFc90wR9I+EDBegxJY3IXoxqPguq5/wBpoMgz1MYjulKqmhtJFZdJbYG4AJuN/hK6prlkqMXwaHD1dV9rWNvHYH/MmlPAG+s/z/lWXJ0xdxTMJKpNAc7HwMo9LLzcj4SkVAFzMc6dqjXFVOzDce8VYrDOlDB6ekCPXqalDBaSA8weV7N/T7ZrMpzVcVh6eIT1XUMPZcbjxBuPKefZTi8ZicXicxwuDTEU3JoIXqLT0olr6Qd2DbE//rdH0b1WoVK+WVlKVKbdIiEg6UexKqRswBKm/wDPKyj215RKas3+He7i/t+Rl+UqIAdfP5GXZrgvTuUye4U5ennt2zl5/wAUtQIXD0umNyHF2XRYE92/Z75w8PxXjajW/ZzeIYm9/ITPNOLdJl8aa5OjQ4Z/8QfMK9TpG06aSldK4de225ubX623rN3iz8+4Yp4qpTriq1KrSa61KQGore+lgeYv8yO0zn4/ifF0T/5B+W9+Q5ctJM5FX0jVwLfQHB9uoW/tMyUnyXdcHotJd0vzBHsnQnmr8d1+qyYF3Asdi9ie4HRaafhjiyjjFCPppVyXvh2fU4CnnyG1t5vhkt15Msm+5yuNGapU6F6asirrFwpOzLf1j3kdk4mT4DAvU0PQS42OpEAHibSHiLFh8bUSm1OsNViXI1U2HVamAd7DT751uHaZUgihQBvsSQt9+8icc3J5G2zeNKKoHEuX5fSp3GHoLttpRCT2fZ75ha64W4KoAL/VRP0m44srVFvqWj5P8tpkcDin6dBoBuw2BJB8rb/7yd92GXeIMmYUVc02UC256IDrC3JN52vQ/XPQ4ilcWR1IA5gsDe58hOJxe1fSL4dFFjY7C57e3smx9GSURly9G5Ylm6QkW0ubFlBsNQG2829NdmeaqM76U+kTEUqri1LRpVlsSXuSwI593ZORk/EtGmRdnsOwJ7+Ql/0g1ajYxRiUKILilpBfpFuLsQL2PkJJkdagpBBqnu003B9+iVzNauGTBOuS1nHHGHKaQKi7Dmrb++Y8ZyKlQEFt2HMKPnPQs7zBKtPRbEWUW3Dm3t3TeYdqShgA1TY3GpP1WZ3HclpmgrZoSuzn30z8jO9wMGcvUZ1a3VAFri9jew2tOeS4QXd+XICmP8SbhSqxxNkZuR16yD1diRsTY7S3p33DIu03BjGjzI2npHKMghggE4jxIlj1kAhxyFlFjbeUxSfvl7EtsJXDicGaMXNtnVibUTDZuGXP8Fe1zSqC9/5auw983A190zWa5TWqZrhMWig06SVA7FgCpZWAsvM7sJqdUrJRaW/gmLdvYsZadnv9v8iS5KWAb1/v/kSWKtUIpY8gCTb2TthtBHNLeTJH9Uj2GcnFYDpab02ZgHVlJVrMAwsbHsO8xWZ8V46pVLYSpS6P6qvfXfkb7CNy/NM+dhrbDW7blVBHiATObLOMns+DaEZR5Npk+SUsJQTD0QQiXtc7kkkkkjmbmQVuHKD4tMb1hVRSgKtZXU32de31j8O6YfHZ3n6kgGhbvUK3z/SURxVngca2TTffSiXt7Lyirm/uWt8Ueu0aYVlPtPyMuXni2L4pzcEHp6SAEldSXPLtCqRexnoPD/EX7Sw9QUQ9N1UL0lROoXK+sv2gCOU6MLWmkZZE7sy/F2IFPFuaSM6ndjTd1COLXUgAi5B+Ebk+Z1n2TCYhvukkHzInP4gxDYOv0dZjWLXZ3w+qyv6p16msHI7J0MgzDDjdMHWbtF22H9845p6m5KjZPZU7Dnmc1EJD0cQniU/MsylfPQW3NXn/AOl/tNTndJat2GFqofvqfm5mcbAAOrgVQQQR6p3HnEa8oO/DDm2cv0WmnQrBAOexVvMDaxHfNz6NcgpJQXHOVetUuyvYhqSsLFOdj42HOcHNkq1aYdiNLLpJrEbD2BNxvvtOh6K80f8AeYJn1imNSFR1EW9ityASbm+829NJOVNFcsXV2Zv0jYA4TMOkpszGvqqFFunR7gWDC+q5ueyOyXMsWOoMPUdtjvV7+Q3WdP0nBHx1NWA2pC5Zil7seTeUkyTLqBIZlHIfxms1hy2MrnrVVCF1Zz+IxjFs9XCOv3a6ke4CZvD5m6VEZkcAML3c2Ivvew+U9F4gy7CFF/c07/yOwt43ImFxeWUb2FNgO7WP8tKrTwyWpco6fFVSvUph0wZCW9cFzs2w9ce2af0TVaYwRpB71BUZnTe9PUbLc8twsy+OrJ9F0szkgAAPiiQLcuoGtttJfRRrOPrFTZBS64UllZtS6ST3+tNfTbOimXc0PpWQnDJ+6BUML1gOvSN9lW29m7bTGZRSw1hqxFX22Sr8LTY+lWvpw6BagDa96R/ir32v9U/OY3JcUthemo/A5lvUcjGd/G4bLzT2qYjUebaKtj8Jk6+FwurapVtf6yN+k371UbDEk2t2DDsRe32r3mCx+IQObKD+Bx8Lzmg7e1l5I7mvCBRqarew5UkHzWd7gSqhxDCi506SXFTRdgLW06e25HleZXAZgjJ1aa3FgdOGdreLaucsZfnvQ4lHIawYXGhFBHJtr32BJ5zXD2zKSpo9fJkbGR4fErURaiG6uoZT3gi4icz0DAF4ZHqhgEi1RH9KJzFcyHMcxp0KZqVL2BA6ovcnlKOVE0cvM+NMOKjUyj3RiD1RuRt38ocHxHSqeqGH3yo/zPNsxL4mu9ZkN3P1QhGwsLXN+yaLhzh6rq1ltIXc3ah5Wu288/MlKV3udWNtKq2NHieL6NM2ZH/CEI+DSFeOsJe2mp/QP1mNzvB1Q56xO53CqR/YbThPQctuCfwH9ZEYJq2xKbT4PTsN6SMHTZl01DrcW6u+6ou/ZzB7ZtcZmKUaTVqmyIpZrbkAc9p8747CkA3B7xyXy25TeYHjnTlqodDYkDo1Rkco2krYNvz0EG97EzsxySjXwYSXcc4fvsQ9UU9Su+oXCHbsuDve01mS5bSYfvKNP8QRfibzB5RllQ76HFzyRiB/awt5zb4LIAaZZmrg220YrTv4MxvOGfu5OlN0V86wVFT1MOn4UVviLTL1qa6rGkPwpb80lzXA1kY6a1cDuZy/xE5lChWL2apUt907+8yYra7IbfFD8+wurdFIBXYsR2c9uyei+ifNab5f0APWoMQ/Kw1ksCD5GeX4mjiaVRKodmKODpd1N9JuLpfcGep0+LcHXw+lfVdGVgtkIuCr2HjedWGkubMcnPBjOK8dSOZP9FbR1iKhZgVqVL7spN7L7hNNw/mFfYAg/iQX9xmKwJqJWcYVL0rkJ0qjXo/m6w3m2yKpiyeqtJOy5Gn885szuXg1gtiLi3QSSU37+o/xIvMLVUh7qXHgUH+03fEKYoE6xSf2quq/98x+IL3v0K+VMfrKwfJLRz85wTpZy7X9ZdboSCN+S3Hdznr3o/z9sZglao+qohKObKLkcjpFrCxHZPLswqVWQAUVAHbZVvttteW+Ac1TCvVRxaq9iLnqFF5799zOrBJ+TLIi/wAZ4hxmbrWO1lKdGASKZvpvf62xnXyrGU7bdJ2eqhv7wszfFmbNmFRERQyU72IFm1nZh1jYjYS5kOTHYaWH3ygB89QmGetV2aY7rg0ufZvSdN0rA7btTc7eazC46tTJuGf/AKdvyzW55lSKg00+ze1mN/JhaYfGYRwdkYW9n/2lINN7kytcF562H6GzvV5clVVH+m8k9HKVjjycK4RAFNfpN9dMN6qmx63u8Zz8ThXqUuT7bgWpqLDv3Jj+EM3fBVHpM2mnU3F7E69gLnawtfv7J04aT5Msl/Bq/SnjMO+igEVqo31q3WorfdSBuNWxnByHABudRhfud/8AFpS4rxK1MQr0wQ7C7v8AVfYBbar8rdgHnLGSvUBBZ/GxQfJZGdtjEaHNcMKSEim7C2zGvVXa1+W8xWJxKs9ujYXNrtVdrTe5nRw7YcOXGu2/Wffztaee4xGB7B+MfpMcW5fJaL9KtSprbQCbdvSG57JpOFMqwmLDPUbQ6FToRQOrYWa7A/W1DymRw4pso1aL+2o17+AtOngFxFJhUo0n0n1ujVz0gF7DWb2Fz3TfHSluZSuj118ag7RK1TMUHaJh0q4g79HV8ND7ezlBV+lN/Bqf0kTssxs2P7Xp/aEUw30LFH+C/wDUv6xSbI3N6KluRgqhagKuoZTzDAEHxBiilC5zq3D+CexNBR/7ZdL37whF/OEcM4TsFQexa9cD3a4IpDhEm2E8J4PtWofGvWP54F4SwH/Lbzq1v++KKRpQtlmjw3gB/wAMh+/qf/UTL9LBUAulaSBe4IoHutFFJpCyP9kYW9xSUfduv+m0P7Iw9raXHhUqD5NFFI6cRqZE/D+EY9ZGP/yVf+6T0slwqerRT8Q1H3teGKT04/BGpk64WkBYU0A9ij9I9KCL6qgeAA+UUUUibZFVy7Dt61JD4opPvtGDKsMOVFB4KB8ooocELYv2Phr3NJTcEb3Ox9kgHDuDH8BPPUfmYoo6cfgjUxy5Hgx/w9LzRT8xLNHA0afq0qa/dRR8hFFCSJthqYOiTdqaE+1VP+Iz9nUP+UnkoEUUOCFsRwdLe9NTfncX+cgqZXhT/Ap/0iKKNEfgWwfQaFrdElhyBRdvhCKVNeSKPBQPlFFIoBdu8A+IvKr4akdzSpnxRf0iigELZbhj/wAPS/6afpB9AoDlQpj8CfpFFAJKeHRTcU0Fu5VFvcJNc98MUEDCYxjFFLAj1RRRQQf/2Q==",
                "data:image/jpeg;base64,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",
                "data:image/jpeg;base64,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",
            ],
        }
    ],
    politicalIssueCaptchaLabels: ["global warming", 'guns', 'the economy', 'the military', 'COVID', 'Abortion', 'Taxes','Relations with Foreign Countries','Student Loans'],

    vacationCaptchaLabels: ['Relaxation and Serenity', 'Quiet Resilience', 'Warmth of City Life', 'Appreciation of Architecture', 'Experiencing Nature', 'Thrill and Adventure', 'Cultural Values', 'Embracing Discovery', 'Accepting Vibrance and Change'],

    products: [
        {
            imgSrc: "https://i.pinimg.com/736x/3e/6f/5f/3e6f5f92ac57fad94b918904ee29bc96--funny-fashion-fashion-fail.jpg",
            name: "Accordion Outfit",
            desc: "An outfit for those that love music and symmetry, because the outfit is symmertric and the pants look like accordions.",
            price: 799.99,
            id: 0,
        },
        {
            imgSrc: "https://teddyfeed.com/wp-content/uploads/2020/02/d3d9446802a44259755d38e6d163e820-8.jpg",
            name: "Avocado",
            desc:"A fit with a fluffy texture, suited mainly for those who love avocados.",
            price: 799.99,
            id: 1,
        },
        {
            imgSrc: "https://i2-prod.mirror.co.uk/incoming/article15007504.ece/ALTERNATES/s1200c/0_The-2019-Met-Gala-Celebrating-Camp-Notes-on-Fashion-Arrivals.jpg",
            name: "Pheonix",
            desc: "This fit, modeled by Cardi B, is a fit inspired by the pheonix, a mythological creature that can breathe out fire. Intimidating for sure, but confidence displayed as well.",
            price: 799.99,
            id: 2,
        },
        {
            imgSrc: "https://miro.medium.com/max/1400/1*o1sbsqRiFra5pyLjQHpQug.jpeg",
            name: "Sugar Wedding",
            desc: "This piece looks like sugar cubes were stitched together to create a wedding dress. It looks perfect, nearly flawless, but there is one downfall: you can't use your hands. Enjoy the snowman suit.",
            price: 799.99,
            id: 3,
        },
        {
            imgSrc: 'https://qph.cf2.quoracdn.net/main-qimg-05059316efb58156fe3153d1b3e8d166-lq',
            name: 'Wrong Side of the Bed',
            desc: 'Ever had such a terrible sleep that the bed morphed into your body? Well, this relatable piece conveys the feeling of sleeping on the wrong side of the bed.',
            price: 799.99,
            id: 4,
        },
        {
            imgSrc: 'https://hips.hearstapps.com/hbz.h-cdn.co/assets/17/10/hbz-unpractical-runway-looks-molly-goddard-gettyimages-642836062.jpg',
            name:'Blue Christmas',
            desc:"You heard about white christmas. There's green christmas as well. But have you heard about blue christmas?This piece, a blue christmas tree, chooses to challenge the idea that society has conformed to a green or white christmas. Masterpiece.",
            price: 799.99,
            id: 5,
        },
        {
            imgSrc: 'https://i.pinimg.com/736x/8a/31/18/8a3118f6239d2a3b5c48085ff34068bb.jpg',
            name:'2D',
            desc:'This is one of the most interesting pieces there is. It looks like a 2d image being pasted on the model. It is really interesting and a must have. A conversation-starter.',
            price: 799.99,
            id: 6,
        },
        {
            imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/58ab0cc1280000af8f999fbb-1511982952.jpg?crop=1xw:1xh;center,top&resize=480:*',
            name:'Cupcake',
            desc:'This piece, inspired by the cupcake, is a beautiful, sophisticated design, showing the different layers of the cupcake, likening it to the human being who also has multiple layers.',
            price: 799.99,
            id: 7,
        },
        {
            imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bgus-2328248-023-1646602072.jpg?resize=480:*',
            name:'Balencia Tape',
            desc:'This one does not need a description. CAUTION: you may be asked questions about this. (pun intended)',
            price: 799.99,
            id: 8,
        },
        {
            imgSrc: 'https://qph.cf2.quoracdn.net/main-qimg-9f739483031a2b7f2ddcad4a7cf8adf6.webp',
            name:'Mummy',
            desc:"Inspired by the spider, the top is a web covering the face with the arms being symbolized by faces. It also kinda looks like a mummy. I don't know, I'm not the designer.",
            price: 799.99,
            id: 9,
        },
        {
            imgSrc: 'http://www.washingtonpost.com/blogs/style-blog/files/2016/03/cdg_fw16_042.jpg',
            name:'I am a Present',
            desc:'Gifting someone a human for christmas? Well there is only one logical way to wrap the present. Add to cart quickly.',
            price: 799.99,
            id: 10,
        },
        {
            imgSrc: 'https://i.pinimg.com/originals/51/6a/70/516a706f4c1992ee5bc15e41a189818f.jpg',
            name:'Willy Wonka in AVATAR',
            desc:'Designed by Willy Wonka and inspired by Avatar, this piece is for anyone who is incredibly quirky and wants to dress like elizabeth banks in Hunger Games.',
            price: 799.99,
            id: 11,
        },
        {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiTwPE2Ck3Ad7rvpkcRlDPY_3qpJgCYiXBA&usqp=CAU',
            name:'In the Future',
            desc:'In the future, society will dress like this. If you wanna catch the trend early for once, buy this asap.',
            price: 799.99,
            id: 12,
        },
        {
            imgSrc: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/06/2-593ff4ca1aafa-jpeg__700.jpg',
            name:'Infinite Hugs',
            desc:'Not getting enough hugs? Well there is an easy fix to that. This jacket will give you hugs everytime you wear it. MUST-BUY',
            price: 799.99,
            id: 13,
        },
        {
            imgSrc: 'https://media.gq.com/photos/5aa97c15cd49a054b4ba73e9/master/w_2122,h_3184,c_limit/180126_Beeker_VIP_001.jpg',
            name:'WESTBROOK 1',
            desc:"Going for the rough and strong look? Well this fit, modeled nicely by Russell Westbrook, does just that. He looks like he turned into the hulk.",
            price: 799.99,
            id: 14,
        },
        {
            imgSrc: 'https://i.pinimg.com/originals/22/d1/e6/22d1e6510597c1e2e410e560a0b4ba89.jpg',
            name:'WESTBROOK 2',
            desc:"This piece is inspired by Robin, Batman's sidekick. See? Robin can be for adults as well",
            price: 799.99,
            id: 15,
        },
        {
            imgSrc: 'data:image/jpeg;base64,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',
            name:'Breakfast',
            desc:'Breakfast is the most important meal of the day. So in honor of the meal, this piece is created. Eggs, Bread, The Cloth. Instant fave.',
            price: 799.99,
            id: 16,
        },
        {
            imgSrc: 'https://teddyfeed.com/wp-content/uploads/2020/02/6364d3f0f495b6ab9dcf8d3b5c6e0b01-9.jpg',
            name:'Layers',
            desc:'This must have taken forever to make. Hey at least it looks good.',
            price: 799.99,
            id: 17,
        },
        {
            imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1175212319.jpg',
            name:'Blue Dress',
            desc:'This is actually a really pretty dress, all trolling aside. There will be multiple oohs and aahs for whoever walks with this on.',
            price: 799.99,
            id: 18,
        },
        {
            imgSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUFBcUFBQYGBcXFxkYGBoXGRcZGBkXFxcYGBkXFxkaICwjHBwoIBkXJDUkKC0vMjIyGSI4PToxPCwxMi8BCwsLDw4PHRERHTEoIigxMTExOjMxMTExMTEzMTExMTEzMTExMTExMTExMTExMTExMTExMzExMTExMTEvMTExMf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAACAQMDAQYEAwYEBgIDAAABAhEAAyEEEjFBBRMiUWFxBjKBkUKh8BQjUrHB0QdywuEVM2Jjc4JD8RYXs//EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EAC4RAAICAgEDAgQFBQEAAAAAAAABAhEDITEEEkFRcRMyYbEigaHB8BSR0eHxBf/aAAwDAQACEQMRAD8A5KKMUBRgVYIOjFFR0ACgKFCgAUdFQoAOjpNHQAdGBQW07yEUmIkgYz096d/ZyCQr7wMcQ24KC0ZhgMjBMxxmpqEmrSGJikEU8ooitQAaApQFLC0e2gYkClhaAWlqKACApQFKApUUAJApVCKOgYkUKUKFAFSKVSaVQQDoUKFAAoUdCgAUKFCgAqOOmc4wJP0HnQpSkgggwQQQfIg800Ml6oBG2ICoXzBVpYQ3JJ6kGDBpCCBA/oR9jUsdnfuxeDoqM5UByVYZOQqr4gY/ACR1ECaTZ0j7ghKBjIEkjPIGRyZAHrV8u7u+wCLiLClASCIZiAJYGDIDHrOSATB5imttPGwUbawgrImQZli08evQxQiozqxDQWjinNtKCVWMa20oCnIoitRGN0sUIoRQMFChFLRKAEqtCpK24oU6EUFHQFHSIgoUIoUAChQoUAGKOiFLoGJpyzb3EyYAUsfYUmKlaHZvC3CQjkIxESFJBJz7VKFXsDVfB/wrbvhb10kgiVQEge5j6CB5Vqu3PgyzcWZZG5kZE8ZDc+1R+wuzX7u0EuFdnhYLGWQxg8jg1dXLJ1AXc7KVyCpZcSRmKolK3bfP6GxQ7Vwck7T0jae89tyCRBlZAYNgMAes/rFMxWy+Oez1W33gUtcm3bDRLAItxycYyStZBRV0ZOUbZmyR7ZaAFpYWipQNSIAIpMUs0moskJIoopYFLW3SoBCpTyrFHIFJBmnwAl2oU6EmhSsdGeoUfOVUx/bnNCKCsKhQo6ACoRRxRxQMEUoCgBS1WgAKKCWSq7yWLMSFHA2jcCT6SF/PHBoxU/sjRd7dtpB2F17xuAlsEF2ZuFAWcmpRkou2gqy97F7eu27ahLiAgkePJ24yQWBwIzkZPOKv9R273aDuNRYZjA27zcmSSRtFhT1x4hHkah2exrD6h3s3SUUMyhEkuUbZGnCeIKFBlpU4EblNaBdNeZhbfUhyV720ltD3rAA4Z9/dpt8m3gnz4OaSi3adfSjqQlUe1xuvPqZf4j7QuNpkRWXddAN4AySEc92ztE2y2fBAJ2OSOlZHT6dVdtocLAA3EEMYWWx6hvuOIrefFVu2mlRLahQ95LgCsH3K1q4qvvABZiwcHoAqAACBWX12iuWiA4ieCMj2nzq/HKPbSMedS7m6/wBESKI0o0RFSKAUYFBVp9EjmlQCUt0LjgYFJuXegphjQ3QxW6afsio60/aMUhnovsvu7tm1dFtYe2rRtXEqDHHTihVF/htre90KrObTsn0nePyaPpQqsicPde4t3LFxGgybbMABz+vvVNVnr7pu2bVyZgwZMweKrWFSjwTyc64ERRxRijUVIrExRxSoo6AABVr8N6FL+pt27gc2zuLi385VVLQvkcDJ9aq5rWf4fW9t9rreKLTgW1nvX3sqlVHPyhzI6CozlUWWY490kjVXPhyxbtubdtSLe5LkbDut3V8DtcugyVP8MdeKxRvau4RZ0u9Fs21R9lzYp7xnYM8kDG8gQJETzx0Xt/UH9kvNbPeG3ZdVKkG0tllOxgfxshjzyvmJrJfBKi4l9zi6zqCc5VEWMcHJbgdfaqYOTTbNrUW1Di/sVd+92nbvC0bjXXUreCqe8Q4IDEwIBAYEGJ+skh8Qa92XTpaRSlzvFtJZ2bGHJ2n8OTO7Ga0XY+quXtRqLvd3Ldu3ZtqTcERDN4mTLEyzwEnAPUirk6QSHuCdyPsG3/nWHKg7jAazHhO2ZPvTk4rwCxfh1J8lD2V2bqt3e6q+/ebn/dAlVtswAO9FhJZSDCjELPkLTtDSLctlTkMRic9SDA+UjA+vrT6qqAKMCIEyZjGJM4H8qNWBMj88ff6ffPkKrcnZcscVGuf3Od6iw1u5ctkf8sqCfRxuU+mKQErZHRor6vUXF3qdg2tBBdFheBkCCT5krPJrKuQP9ulaoO0c3LBRehKqBzUe7cmjuPNNVJsrCoUdETRQBg0tAzTtHFMrJMDrVrpj3cbeRnIBz7HFIZt+yO1LGktt+ysQWCF990NuPGF2wInymhWe7GSbtnftIYvIIGALZiYHU7Y9jQqsnSMDotZsVkbKP+R/iFOTUbTaYswkgDkkkce3nT8fvBK7hzExIqSashTaFRShQciTtBA6A0BUiIDSSaNjSCaAFou5lQEAsRzwB1rc6LShVBIx+cYkg9DJHFZj4eTcXkDEHPsRH86V8Rahw4AuMRBO2Y2g+GMcyB19fOq2rdGnHJwg5eo3qO0XBu27bubTFwtslikMRJCEwpPnzmtz8DKLli5sUtcBY3rTMAL+4RtVv/iQAAmAJ4zFZS3p0BSyAPCu5jEFmwMkjzMx7eVWvwoTp9SqFmC3dqEiB4xm2HP8DE7W9GBnFRlTTSJ44tNTf/DbpozCEXQFQH9m1JUFbPQ6dLR/5h2qRvb+YqM6ICzAQXYuQWLHcwy0zOeYxyYwKla26SxUiGMF1BHdo67l/dDO0Yz5lqrNX2pZssFdgbjkbVwD4v4pMIkjk8n2E0KL/M1uSW29D62skkT5zz1yRxGDnjmOlV+u7YW3geJhOBxPOW4B488k+1N67V3Dbui4QCJFpbTEhtywNzQMzAxAAjyrAaW5dRltZEsPC0CPEJ2k4ExzVscZRLqbfGi67W7Wu2wyEKQ+W8PykndCsD5g4I6VXb3IDNbZQxgE8cT7x61N+ItSDb2iPEwwPJf/AKH3qRfuBrRMiNoIPoBI/pVilSRV8Lucu58K0VLUmlNTTNVhlDJpBNCiIoAl6a3A3H9CntO4uFpwhBAbMz5geVLvm3fZTbUpbW3bW4sg7rqrDEeSmAfqaLVXdvhUCSMDoB5mgZd9mX7dnUWw5fbs6eKfAYAk4A3GhVbfnvLBPGz05FuJoVWWGRe0AiPmWJHpipVq+sQ/lx5z60rXWdunssTySQPQyZNQ71so5VsER1B5E0LZDcRwUYNImhNWEBZNJuJ8vQE/y6+2aKanXtIe7F27KBx+642tg8HMHHBjBGTSboeknfIdlTZHeC6kHhRu3PB8iMe9K02qt5uMFa4xgK3yqOhk4AjmoFq1LKOjGJH9DV72d2UlxwgWV5JMzB6SMioyaXJOGGc1V6LTRdlq9q4QZuFEdXGFCPIUAzEna8+hX60rXb7sLPzODAx4jjr/ANMZro+mshQQABACgqIwitA56T5gZOawvbOrVLrPp7ublspc2cgHBUyJEgAdD4TxVeOVs1ZoOEE09/2H9Z2xqbI/ZUO4yAr/ADXNjKsIFAjcD1OeMTms/tZmIIYucmdxYyOTOTiM1Pvdh6m3aW/sITaHlT4kXlWI5AjOOOsVpuy+0XvozWiFuMqq3hHhaMfMsFZkirdR4M0e7Iqb4KHsDU7S6M2CICnncZ+VT55+oFWn/wCPrdIa8zLPCqBubcREk8efnnpU46bT6KLlxzcu3GPiaDcPntB4XqTjkDOKoLPa1x9VbuXGItbu7Vd2EkNs8I/EYHiPnVbbbtF8VGKUZck/tvs0W7yG38tu2GIZmYAzGJ46TxVDqXuWgbTbYZZxMAMTgT0mRWn+KdUqc8lMDzJ8x9j9qy1uG2PeZip8AIgELmGJ6iZpw42RzpxlcPTfsNq8qDSTQVNsqQQVYgg8j9f0oEVaZgUaQSATAJgnyHnRGrS32OWRWGSROTCGRgSOD/agAabs+5A7nadpJIOCw6+4x+dR/wDhupDHeFJbruFXOmRluMPFtCqq7mDCABhSAOMf3pzUHzoSGyFfWbtk9FttP1AA/M0KWhkp/wCL/UKFVkjH6q89zafwooUekYNIFl4naatH7IuWFLlkIBAPPUgYxFSdJqN8KQM8QKbTS0hRSlyykR+lPCy3MU72lozbfcBAJ+xo01R6ijub4BRSdMRptK1x1tqJZmgZA/M1dWuzrmquW9KxGzTbgzIZEFhIk9cQMdDVZpEFy4FJ27pAjzjArb/Alu33b28d6rEtH4l6MJGQOPoKU5UizFjUpq+C2Oit20WEQEAKg2iFjr54yR7etN9l9lC1LFt79W2qsAnIkDPl6Vn/AIm7Zf8AbLaWnA7swMSpLDxSvlHTzNXfafagt6e7cyGVSArQIdoVc9fPr08jVPa+fU3/ABIq16EzQa5LjMuQQ5HMFoiWX7HjyJrG9qdg9wGcbXTYVIllhj8tyMiVPr19alfDOstuUG4boMLgGVx16+IfnWq12mD23UgERgGTxkD1x5CfamriyDccsWZvsDtd1ss1zUJ3aKLZtsgFwRG3aRJfwzyDwZiJqDpu0raB2sFlO3KkEY4BQzgj34JxS/ifSKYLbQc7GGA45K1V9koqusGXKuWEYCiIP1JH0q5pNWZI3CSivINN2Vf1BNy2u7MHxj1P4jMYbFaLR/CwGw3FBOyWkz45BDIZAG0iOsz95nwraKWoEw9x2E52gGAuD/0KfrV9PH5/bn1OI+oquU29I0RwRSTfJlO39GGYG5JABAJMDJIJPTHg69az96wTb7u2Dcho8PiaMnhfaujukkzweeojPT2n3gjyqPbsi2WYQqsdxgAAGAJMR4cflnioKbRfLEmnXk5jZyGYkkyMmfWZJ9vyoya0PxHojbLkKQjMGBjEk5Hpnd9KzrGtOOakrRzsuP4b7QialaDUsHRJlS4G0k7SSQM+QOJioTGkz1pvZWtM1qO3e3QwAKnbCmQIMYwKLUGR9Kh9lXWdSxMloJPUzPNSdS8A+1EVSHJ27GLbHvOPD3fh643ChQQ/J/4/9VCojsyw1V9wNzMyEieIP5UvT32RgymCpkfQ0endnMKqjzOYwPLj6UrXuouHiBAkCAYETHmalF+pW/oa3U67S3rW12XvYwJJMnn2zWP1ICMVBBqFcuSZH3o7JO4HnPXrUfOiV6JVhWBDAwQZB9RV5pLxLSoNtuhQsBMQSDO4fc0Vi2lwAgRPTyNXvZXZRJDEYHHrUu1DTZm+0NM7OMcL4mJMsZ6k8nk/WpLaK9c04Zncp3m0eEsAApkl5gGdo2nPBrRaL4bfUnUXNwW3ZbaYy5ZpwvRQPDLHpNaG12P3oVCHXY1vcLT7LLIW2G5p15dhbO1n48WJ6UOTjo2dkJW0zMfB/ZPd21u94P3rCV2+IC3OC04Eny8vStjYsyJPXn1npkep/saY0mjS2UW2CEAdgGTYQWJIBXG09MR1EjgaDS6UQPVT04kdZE/kKrcnLZfGEcaOR9r9nMdYbKsFDsChcwqhxJJ6DO7jn3pGp1KG4blkSFtLZJMDKNMqBzKoseYNaj4w+HmvXFuIVB2lCGnJDYyJ828zx9M32P2eg2vedVW3dLEE8urbVkxAAJkk4wOlXqScDHKDWTRrOz17vu0I4T/Scc/qKno38xj7YPTqKhuIEjjkHnHmD1FSzyP16VnR0JpUqHWx18z9sTP6BzxSHGP6+oxyPtP34knv4PQRmevE/wAvX34ogrMdoUj3hSSAYCA/McBcxAPNQyZIwVsai2tFXruzC+nuKCJYEpKnbCnaC78ABlABIxiudXUKkqwIZSVYHkMpgg+oINdr7F0KXie88IUCCoNuT8xX/KrAxBOZNU3x/wDDtm/cL2fBqBAcEbbd0RCyxwLmIB6xB6ELpcnbFylSTevcy9ZHvklG20t+xycmgFJ6elSdTpLlsgXLbISJAdSpI9Jqfpr1pkC3B8vAHPuvqYremmjBVB9iMNpAPygY8vQ1K1DDPtUIdpgs7MXzAAfbIC9MU3f7RDYXn1IxTXAE1XBZVnK24Pod1Co+mdSyHgtbznmGNHUSRAv6pUi3bHG4gc8+Zqt1VwuRbXI3mCYknaq8+WKireIJJySCPvSApNBCyZf0bW32EgmATtIPPSRU3T2oAkCar9PaKkECt98G/Dh1z7iCtpHC3GHAMbiPtH3E1JUtsENdgdnkobkcnHsMVq+2e7sWbC23DXLltS4keEtHUcZnHpWr+Mrens6ZVChWACWguIVYn3UD8yK5W6sxJ3Dw5BHn0io22TXBou0e0tT2Xp7ZRQXuXf3tu5blCEW4HQMPmDkyGHQD1FPdlfHFq6q210iae421LbpFxERiA3CqwMbsCcxNZrWfEWpuIbd253inpcVGg+akiRinPgvQ27msUFdqhWZoJABEBSP/AGZRHrHWq+2lsm5XK1o3z2Au8+W1R9Jn3/28wRVzpR4VMRjP+3P86r9V8rnzuH8lU/r6R+GrbskBranrEfUVTFbo2Zpfgspe3NL4HMZSW+g844EE+XoKwXYfZaXbANxsXNTLLuCt3bPtCycAF1GOs11jtjTzbcqOUYfWDzH9j9eDj37LNvTLYQg7LbrIie9Vu8VmDCcFV2+fJFRyTUfw3tkMb79vx+xV2OwrYkW3dN22RaPd7l+RtqsSGG7JP86l6fThGQXWd52ypItmHJVlUKPGRKAnd1P1ftXVdZVY3oWAknAK3F3IflSWjwjyigZgi20jxGFIUCYZJV8rbhIwRMn3rm/EnHVnUcVJbXP2Cv8AZ4t7gQdqGUa4C+0KxVmwflVYORyZk0ogEZU8FigluHMjY4Eb9sk+vlT+t2973m5YYqxMGW8Co67l/ADsY7pOD0FR1kDxEsogk75nIXcHALKHAHONs8VDI7b9wi24ofsX7iMz2yrMVbbBDB58SwjGVUB26jC+oFIuarxd6x3EsW3SUDBSNrlSMnaxAHko8zCO8HhuOf4Scbh+7OxjvBlbYkHPkZnihbVoyd0EE5W7AG9GfY2RK7QBJw2etRt1XgO1X3NfT3K/trsg37RsoQLgIZAy7QzLJClsKHZXxA/BExxznU6drblXVlZGIZTgggxB8iK61Zu90y3CPEsMwLbMhipMGFZ2BnmPCOBmpXxh8G2taO8tkWtQYljJV8QBcA68DcOPXFdToMlxcfQ5nXQqSl6/c5ZotDbvFF3BJMbokAZkkTWz/wD1mjhWt6lrqMJD27VrbzHLXRPWsW2h1OhvbL1sBl2ttYyl0bts22GG5985itjf/wAVb9tRt0tmIwAzACSw6e351v8ABgY6v+FskDvbojzS16+V00Kh2v8AGPUEwdLZH/u/9qFAjk9jTO4ZgDtQSx6Aep86ctPtIO0GPOrfs/tVRprmnYASDBAEtOc+oP5VAtWQybv1zTEPXdYpUbVgnn09K6r/AIPOtjRarVuTtN0KBJz3aAgBeJJuRPp6ViPgv4JvdoXJAKWFaHuYxHKoD8z9PIdfI9C+MdHpdHbtabTL3ZUbmAJhhEBrg/E5M+I5x7VFuySRRdudrPfcs7EmDtH4UBM7R6VRO7Gf6Udy/JnnGaQDg55FMkRXNaH4HQm/I432lPqGugx90B+lZ5xW8/ws0e437hEjdbUT/EhLyPUSppS4HHk1mqH7sn/uP7fb8/zp74ceVZfIyOevuab1C/uCf+438+P15U18OXIdh5if61mXzG6W8T9zTXbAcAHiZNUfbmiW2qOGYlbgJ3S8kjbMczAjHEmry9qkQAuwE4E8k+QHWs/+y3b9z94GCDcZIUgEGV7lhBBhoLRwpHqa+ocXpK39jN09p23SX6matWNpNqJthgwBSR3N1XI3kZxG0L12LQVQwhpPyk7ouzuHd+JYDBsNAAAGetT+0uzTbv2rak+L92GZoKw29G3dSNrKCQct9audZY0wUpsEqdxI8BU7stvImSWOR5msmTBK3J0vJ0YdVGklb8fz3M27SobxkBIYzDGYlSRmWBkg8bAJGaSBLdNxORuXxEqUUKxw6tkZ6Mc1I1KqVTu7e3YAJBDM28GY6OYcnPMkSMmn/wDg1xreEIYqS0lQrHZAUKZCyesdTjNUxxTyfLsseaEPm1yQHDHLjJIXcQ1uZVp3MgMIG4GM9eKNIchiTDgtJVWCG6pXeWUz+EBQDgMKebQ3truEiJmZU4YOJRwcLLRiJg4nD+k0D3BvIGC0TO7DBgTsJBIIMSMcedOODI5dtDlnh29yf00RrawCAYIYFgpVygYMrtDZ3FpmCY9AKuz2q9vTjvAqtEeOBOTnaT0GSZ6GBxWZ1M7iHQoNzTviQCVLRILMzLuI9JHlTYtsPDHElIaCzKPCuWYvKYLRjY0QaePI8Tdc8CyYo5Um+OSv+OWOp04e67JctXP3cr4XZsBSR4VJlcgwJ9DOG1/dhh3m+IMBNoIO9p3TWw+I9bbt2gtxGZHAQBQsAAFkcbiDMTnOVnwxFZg6Q3yFDqrKgMutwg+JgBuRWiIEEjr6V0+knOcLkczq4QhKokFdPpyA229B4M24oUq5obo8JtluPlBK/wAuaOtWzLooihHQ4q27Otzb4849DIz9ppu5f3W0QT5t9Dj+9ab4X+FdXqk/coNiyS7nahP8IaMn2+sUWFHWdD2hb0nZelvGAV01rYBje7W1O2B5mST0ya5b212q9+5cutlnM/5RwAPYQKPtftHUOLdm8pT9mtrZFuPlKAKSfNjAz7VT2jJI96SGSbYBWetKcxj0FNou1c80yz5pjFXa6Z/h4GS1bTcqh2e6QTDPKELt84CqT7VzBmrrHYekKJprk4t6RgfRygERz16VGb0SirLK5cB05/8AI/2DH8o/rVZ2LfC3Aw6mDPr+jzFS0cfsqkedz1/+Qxx0gVQ6d9twc8yOueSJ58qyt7R04RTjJfVm87XRdgcsRGBxnd4Qo3SASSIMenWsr8QfFzWrZCWgXRisXB4doja0LBk4xiIq/wC2WS5pCH+Vts/cH71yztdCLRaDsYt3bchghgwescVJ4k593h8nPWo0+UP6b44a8NR+1PatlLavYKLtYOrmNgZiXYHY3/qelP8Aw/qbxfa91rkornvWa4wdRkgkyJAPpgEQa5wLe+4q9WYD7muw6Ps8W7lh3woQ7j0+Ugz6SxP0NXPHGSqStEFNradFj2Vobdy4r3O8JHiUM5xcVoZjESfl+mOAALa3p0KJbd2Vm+dd7AudviUyZIIXkeWDmotsorBgwKo0kAA/NK7ieQAM+w9KuXfwh1XvD+HaVmD5FiBH1qUYKC7YrRCUnJ2wnssV27jIYEGSJAaQpIzmINRNTqu7BdgRPhUTMscAiOn9ASaet3mIdxkDdhxDKyzK4wwnqD55pvtDSB7e24wIIM4jociD5Hio5L7X28ksddy7uDH3rzuWZ95K53S4O4FRBG3bLCMQNuYGZqi7d7ZSx3YRA73MASCm22UKktBJ+bjrJMjEuds9vW9M6C5vdoUkKDMLInxPADENxMjmYqg+L+0LVxrOxxcdC3iRgdqY8J2nGYgciG53VyOnwylkTmnTs6+fNGONqDVqv4in7a7cuagwwCop3BFiN+QWJifxNjpNB+0HslWSPEkHcCeHY+dVTn8zUjXthP8AL/qau1CMYKo8HGlNydtlh/x+8AD4MzMA4gwOvlQqkDx60KlZE7R8If4YKm27rfE2CLQOB/5GHP8AlGPU10LW62xpLW64yW7SCAIgY4VVHJ9AKovir42s6SbaRcvD8APhQ/8Acbp/lGfbmuO9tdu3dVcNy9cLnMDhUHki8Afz6zUOR8ln8aduW9bf7y3a7sAbdx+e5HDPGBAwOcdfKisXFUZ9qjvd6D79aVp3A6/epDJD6hT1/I1HN4foU+z1GY5pjFW3DsqA/Myrx/EQP61263tTTXRiUYr0nY+0gkeWIzjwnjNca7FAbU2Q0QbqcmATuBAnpJgfWuq/tRe3cJXad6WyJ/gFxjn3OP0KqnwW4Vcl7oUlw/sqZ/G+c4/eMffr19Oao92YByI6iRjFWGnuzYEfxXP/AOjZHrk/l5VU7QY9/X2jyPXy64rO+TqRVJ+5P+MdTu7Kug/wp9+8Ux96R2vatr2La2hfBpbJQwpxc7rfBYYZjmRBziqT4w1RXQXEz81vny3qTz9Kido6zU3NPb7OCb2sxb8E7rndBgA042iAR/lBq6G0c/N2xlT9DNdg6bvNXaWYyWJ/yqW++AK7HqFgWXnhT94HP51zTsrstrfaA7uWt2n7t3bw7n2lXVI5hj9I54nqWtSAI4DxB4gj+eYq1S9DKnGUbQ9ftqbgElSYdSpgt1gmOPQ1a2NwRDtAOC4AHXLEe5z5/XFVOndyFaJIUrBO0njmRhsexkeeJ+m1RKk7ZUfKwhZ8QWCrHBGc8GJHkBiHrDoGi3BUlmaMgOxGJ6E5x/Kme3HVLLyFDODbURyXG3gD1pntXXNbtpuQbnIA/GiuQTBiCeDnHHNZNtS1yGZnZgFK7n3SAwE7VByCZxjAk+WPqeoUbgufsbem6ZzqXj7mb+MuzluWv2hPC1oANMeJWMgt5HIgR1I5IrCla6nrLK3LLKygobZIVYEmdyi2oOCRBBn7RjlgGKXQzbg0/DF1sFGdryNMtWtzRobe57gUra321A3byXYbTtPgPv51XAVMvalgoURm2F4HAYmt5iIuoRFYhG3LiDEHgSIPkZH0oUpjPShQBY6x2cyFb3g5qLsYfhP2NOtqnHDmPekhrjyJJ8/96Wx7EK1KtmiRIpSimMcBptjSy2KZY0hhMa6D8JX7jaI72LTecKTztW3bGTyck+fT0jnprS9kfFKWNOtk2mJXeSwYZ3OWGPQEDnpOJqGRNrRbgkoztmysH9yPMM5Gem8z/qqFOF54+vP6/RqyvWQlm3ydyBzMYLjdH5n7VTPdjaOJWYPWs3k6i3FtFb8TqXsd31d0UeUlgRz6imfiXs65oLyXLLHu5HdXG2nxbPGjAefi6CQfQ038SXCRaUSSHLgDqyABZPQS3Xy96t/j5Rct7RdG+zN1rQjKPC7j6jP3PmDV0NGHqEmm34pFb8JdpXL+suAgC2d94jJ2udiAK3QFiDx5+tdN1pBDHOOnQmPPzyfyrm3w5bsaWx3rOO8uW0aVMsSTvVVXoACAT5n2jdaDUPesC8VC95tYJzCGNpf/AKmEN5AEDpJsVXozPDLHFOqTLTTOpXDSfCZxwPP7x7VK05WTbA8AE/iEMSSVB+x5xmqVF2OyTAEOIOdpJx7Az9Gp7tO7cW3KmGSHLQZETML1HIPpPNRlLtTkxRj3SUV5HPilG2JBJO/C+EnjLLMeIDjkjPnWZcsRghSQWbIQicKzAZwitOcbTjFPa7UPeP7xpKBp8BiFJkoMiZKjI8QB6YpouoJfIO8ypKABmUsTuGSCPSZHNcbPkU5uSO30+N48ai9vYWoYKHuAF/C0DKkkeIgE8yQsRjJmMVyh3LEseWJJjiTkxXT+1yo09zd+7RrbBmZSxm4CMkgElcADkyBmRXMUzW3/AM9abMPXt2kIC1JdPl9v6mm0SasU0paMdP610TnEBUoqsxoz5UKYEfTaJ7j7UEnn0AHJJqzeyqJsAyOT5mnNBrIskKoBYsWaMkbjAqHd1GKr22T1RXuaINSHfNBWqQhRNJNAmjTbPin0iOfrxQ3QIQabfg+1WlvuyoEAdZYDJxy0/qKg3LRUwwj1nFUxzJui14nFXZ1C/wBsad7aFb1sgKBG4A4UcjkHkEH1rCt21qLjLbC2yD8q54EkeLd4TAmqnul9f19Ktew7CbiSdpPhDMcZ+YEdJ8Ik+ZquUoxTa2/Bohlm2orS8hL2kXKGCtxGHhYyN28EMMZgjKnmB61e/EOlt94oMXHt2wrMTuG4liVCzAiQIjkE4wBnjpiusNsZAdiPoC4z9K0Pa+rFxBcKKlxtqOFEAlDc8eSSSQEBJzgc8maVG/puzI02r/yVml0pu3FticyWgEwiiWOPTA9SK6pplGwRwAIGIC+Sn6jH+xrJfDfZ+yy1xlBe6IAPIt+3Wfm54ir/AE18d2pkjAH1j8gcj6zVi0Y+vzfEnS4WiTqLcMrfhBKkbjMMeQRkcDH96PX6zagJBmSgIEkGIkhhEQRnINHel0Bx7yRDDIx7xiYxVVq9ejIyckkfNjYVDSRPsQY6H1zVndY3Toy4Y901aISkxMKWOCYViU5aFMYJO04kg+k08gbGAFgbxCbZYg3A2W8zA/6iB0IgWrkBSeFJPAEkGQxMHgqBPSMejqbAMjEQQO7UAW4eF3DOTAwABPUTXDO7F3oo/jLWoLXdTua7FwFTKwrLBbgTCxAE4zHXH21rQduWb+outFsbbcqrSAWEiSZPJMnaIAkjzJip2Df/AIVz03CeY/vXZ6eUIY0m1fucXqXKeRtLXCK/T81e2LsAcDH9arn7OuWyN4ieMj+VWKacwMdK1xkpK0ZWmnsdNwEdCfrQol01HUhFYlzwQMCMVDdjFOW38NIY1CyRFZaCinTRKKdgJFEadIFFAoARvIo0vMMdPI8falYooFRcIvkkptDiC234jbPnG5fyzU7Tai0ojepC9GO0sf4hj3/QqsAin7dsHgDOc1nliSe3ouhkdaWyVae297wH8BHMbfDECQJH+9WV11he8kqOYkkLugk+nr5A1A0CG3c3gkHaYK8qfMSR95nNOvcYkIDgr4uM7pIXP3/Qq7mqNuDI8fTyl5vXuy1t/GVnaAdw2rA8L+UYxV92V2ir2rbCQGHU9PI+vp0rGjs8dRS00I2jbuU9SrMs/Y02cw31rVm2fNTiARx7elZ/tXVDvN6JsMjdlOTkNKziJH196oWs3VHhvXR/7bvp4pqp1QvFp71p6xH5wKozw741Zdhn2O6Nj3wkMBifQRxz6ZMRx96FrVHaVyCFzE/5gfIEFhn61krervqAJVh9QfuP7Upe17gIJtTB5DT/ADHvWH+ml7mz+oRqbCfr+v6/3o9VfRRL9enUwOn5f/VVw7ft7Adjq/k20iYYiDMkSB9/Oql9W1x9zdSYEmBJmBNTxdLKTuWkZp5UlrkdN5rlwE+eB0AmtWOzrhiENZjQYuA+RBrc3+0IKlWzHJyPtiumvwqkZXt2yvGhuD8B+xoVZ2u1c5ifMRQp9zCkcwU0RFEKOoiERQoyKKmAQowfWhRgmInFMBJmjottHtoAFP6YSaY2GnrCwahPgnDTJqkiYJgASPSevpIH5VIt7JDtyWBzxAAAIxJqIWKtIJBgQRHlmZpSI1x1G7qPwqOs8AQacKvfoap5LwKFebs0DqIpNpPCKfvKM0VpPCKDKMMhNVGrtQ3ETWlRIE1T65dzVXl+UsxclU1vFIKVNdKae3g+1ZYy2aHErLrSfQU7aXrTLLUzTZWK3rSML5HdM2asjdPnVZawanqaaESFvce1CmlE0dOxmdWk0KFRECgKFCgAxRihQpAKohQoUDHFpSihQpMnHkXc+epWj+dfcUKFRXJe/k/Mv2pdvgfrpQoVMoHjwPrVZqP1+dHQqvJ8rJY+SFSW+X6GhQrF5Nq4Kl+ads8UKFdCPBz5cjlvmp1vihQqaIDq0dChQM//2Q==',
            name:'Focus',
            desc:'There is so much going on in this piece. You can literally never get bored of looking at this dress.',
            price: 799.99,
            id: 19,
        },
        {
            imgSrc: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2012/01/03/09/clownPA_220x350.jpg?width=968',
            name:'Happy Birthday, Artist',
            desc:'Are you a painter? Is it your birthday? Need something for your birthday party? Look no further! This is perfect for this occasion. Heck, you can continue painting with this on after the birthday.',
            price: 799.99,
            id: 20,
        },
        {
            imgSrc: 'https://i.pinimg.com/474x/6a/c3/fe/6ac3fe0fcc2108847c9e107a5b2305cd--crazy-fashion-bizarre-fashion.jpg',
            name:'Upside down',
            desc:'Whos going to tell her that the umbrella is upside down?',
            price: 799.99,
            id: 21,
        },
        {
            imgSrc: 'https://do.lolwot.com/wp-content/uploads/2015/07/20-times-high-fashion-was-especially-ridiculous-1.jpg',
            name:'Pink Hoodie',
            desc:'Add this to your collection if you like pink hoodies.',
            price: 799.99,
            id: 22,
        },
        {
            imgSrc: 'https://www.mandatory.com/assets/uploads/gallery/ridiculous-met-gala/gettyimages-1340263421.jpg',
            name:'Zebra',
            desc:'Hey, that is a cool take on a referee! NBA, buy this for them.',
            price: 799.99,
            id: 23,
        },
        {
            imgSrc: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-05/met-leto-kb-inline-220502-7d2384.jpg',
            name:'Spikes',
            desc:'Wear this if you have a fight coming up. Lets see if your opponent hits you now.',
            price: 799.99,
            id: 24,
        },
        {
            imgSrc: 'https://i2-prod.birminghammail.co.uk/incoming/article16237356.ece/ALTERNATES/s615b/0_The-2019-Met-Gala-Celebrating-Camp-Notes-on-Fashion-Arrivals.jpg',
            name:'Rainbow Effie',
            desc:'Look at all the colors! So beautiful. Buy this if you like rainbows. MUST-HAVE (disclaimer: cane not included)',
            price: 799.99,
            id: 25,
        },
        {
            imgSrc: 'https://www.gannett-cdn.com/presto/2019/08/29/USAT/cea9c54b-a300-413e-8e03-775231a0219f-GTY_1027959404.JPG?width=592&format=pjpg&auto=webp&quality=70',
            name:'Sky',
            desc:"The sky is falling, and it is now a part of you. This outfit, inspired by Blue from the movie 'Rio',makes you feel flying!",
            price: 799.99,
            id: 26,
        },
        {
            imgSrc: 'https://static.more.com/wp-content/uploads/migrated/20_lady-gaga-tiered-white-dress-white-wig.jpg',

            name:'Wedding Jealousy ',
            desc:'Created by the table cloths in weddings, this piece does justice to royal white. Wear this if a wedding is coming up.',
            price: 799.99,
            id: 27,
        },
        {
            imgSrc: 'https://content.moss.co.uk/images/extralarge/966111101_01.jpg',
            name:'White Shirt',
            desc:'White shirt',
            price: 799.99,
            id: 28,
        },
        {
            imgSrc: 'https://media.gq.com/photos/5582de973655c24c6c94cd0c/master/w_320%2Cc_limit/style-2011-06-fashion-week-outrageous-givenchy-00270h.jpg',
            name:'Lizard',
            desc:'Chameleons can camoflauge, or change into different colors. Now you can too! If you wear this outfit, people will think that you are in the jungle.',
            price: 799.99,
            id: 29,
        },
        {
            imgSrc: 'https://i.pinimg.com/474x/92/53/ae/9253ae6ba03e4df6bfb7d68e2d9725ac.jpg',
            name:'Shiny',
            desc:"Buying this will make you so cool that people will have to buy sunglasses to be ten feet near you.",
            price: 799.99,
            id: 30,
        },
        {
            imgSrc: 'https://www1.pictures.livingly.com/mp/a9URb8Drt_sl.jpg',
            name:'The Royal Family',
            desc:'There is this rumor going around that buying this outfit means that you are automatically inducted in the royal family',
            price: 799.99,
            id: 31,
        },
    ],
}