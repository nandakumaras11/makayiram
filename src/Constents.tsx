import { capricornFirstFloorImages, capricornGroundFloorImages, capricornThumb, capricorunFF_Icon, capricorunGF_Icon, cardamom, cycling, geminiCImages, geminiImages, geminiRoom_Icon, geminiSuit_Icon, geminiThumb, indoor, orionImages, orionRoom1Icon, orionRoom2Icon, orionRoom3Icon, orionRoom4Icon, orionRoom5Icon, orionSuit_2Images, orionSuit_3Images, orionSuit_4Images, orionSuit_5Images, orionThumb, taurusImages, taurusThumb, taurus_Icon, teaWalk, walkImg } from "./Images"
export const newRoomDetails = [
    {
        category: "Suites", rooms: [
            {
                name: "Orion - 01 ",
                Categorisation: "Suite with garden view",
                descriptionOld: "Bath attached room with a sit-out & patio with garden view",
                description: "Suite room with a sit-out & patio that offers a gorgeous garden view.",
                detailedDescription: "The aesthetically-designed suite rooms of this pentagonal complex are surrounded by tall trees as far as eyes could see. Look yonder and you will find huge sweet pots dangling, dripping the golden elixir like there’s no tomorrow. Wake up and smell the honey, honey!",
                occupancy: 3,
                Tariff: "11,500.00 (2 pax/exclusive of taxes)",
                photos: orionImages,
                icon: orionRoom1Icon
            },
            {
                name: "Orion – 02",
                Categorisation: "Suite with garden view",
                descriptionOld: "Bath-attached room with a sit-out and patio with garden view",
                description: "Suite room with a sit-out & patio that offers a gorgeous garden view.",
                detailedDescription: "The aesthetically-designed suite rooms of this pentagonal complex are surrounded by tall trees as far as eyes could see. Look yonder and you will find huge sweet pots dangling, dripping the golden elixir like there’s no tomorrow. Wake up and smell the honey, honey!",
                occupancy: 3,
                Tariff: "11,500.00 (2 pax/exclusive of taxes)",
                photos: orionSuit_2Images, //change
                icon: orionRoom2Icon
            },
            {
                name: "Orion – 03",
                Categorisation: "Suite with plantation view",
                descriptionOld: "Bath-attached room with a sit-out and patio with green plantation view",
                description: "Suite room with a sit-out & patio that offers a gorgeous garden view.",
                detailedDescription: "The aesthetically-designed suite rooms of this pentagonal complex are surrounded by tall trees as far as eyes could see. Look yonder and you will find huge sweet pots dangling, dripping the golden elixir like there’s no tomorrow. Wake up and smell the honey, honey!",

                occupancy: 3,
                Tariff: "11,500.00 (2 pax/exclusive of taxes)",
                photos: orionSuit_3Images, //change
                icon: orionRoom3Icon,
            },
            {
                name: "Orion – 04",
                Categorisation: "Suite with plantation view",
                descriptionOld: "Bath-attached room with a sit-out and patio with green  plantation view",
                description: "Suite room with a sit-out & patio that offers a gorgeous garden view.",
                detailedDescription: "The aesthetically-designed suite rooms of this pentagonal complex are surrounded by tall trees as far as eyes could see. Look yonder and you will find huge sweet pots dangling, dripping the golden elixir like there’s no tomorrow. Wake up and smell the honey, honey!",
                occupancy: 3,
                Tariff: "11,500.00 (2 pax/exclusive of taxes)",
                photos: orionSuit_4Images,
                icon: orionRoom4Icon
            },
            {
                name: "Orion – 05",
                Categorisation: "Suite with plantation view",
                descriptionOld: "Bath-attached room with a sit-out and patio with green  plantation view",
                description: "Suite room with a sit-out & patio that offers a gorgeous garden view.",
                detailedDescription: "The aesthetically-designed suite rooms of this pentagonal complex are surrounded by tall trees as far as eyes could see. Look yonder and you will find huge sweet pots dangling, dripping the golden elixir like there’s no tomorrow. Wake up and smell the honey, honey!",
                occupancy: 3,
                Tariff: "11,500.00 (2 pax/exclusive of taxes)",
                photos: orionSuit_5Images,
                icon: orionRoom5Icon
            },
            {
                name: "Gemini Suite",
                Categorisation: "Suite with plantation trail view",
                descriptionOld: "Bath-attached room with a living room and balcony with plantation trail view",
                description: "Suite room with a living room and balcony that presents an amazing view of the plantation trail.",
                detailedDescription: "When you are surrounded by green, nothing should come b’tween. And that’s precisely why our trail view suite remains the pick of the lot.Located on the fringes of our trail to wilderness, you could sneak a peek at nature’s intimate moods here, eavesdropping on its many secrets!",
                occupancy: 3,
                Tariff: "10,000.00 (2 pax/exclusive of taxes)",
                photos: geminiImages,
                icon: geminiSuit_Icon
            },
        ],
        thumbline: orionThumb,
    },
    {
        category: "apartments", rooms: [
            {
                name: "Capricorn – Ground Floor",
                Categorisation: "Apartment with two bedrooms, garden and plantation view",
                descriptionOld: "Ground floor of a two-floor apartment with two bath-attached bedrooms, living room and sit-out with garden & plantation view",
                description: "Ground floor of a two-floor apartment with a living room and sit-out that offers a nice view of the garden and the plantation.",
                detailedDescription: "Adjacent to the expansive organic plantation draping the woods of Western Ghats, our fully-equipped two-storied apartment offers a bird’s-eye view of the property in all its glory. Here, you could give ear to the soothing wakeup call of our resident singer: Malabar Whistling Thrush.",
                occupancy: 6,
                Tariff: "9000.00 (4 pax/exclusive of taxes)",
                photos: capricornGroundFloorImages,
                icon: capricorunGF_Icon
            },
            {
                name: "Capricorn – First Floor",
                Categorisation: "Apartment with two bedrooms, garden and plantation view",
                description: "First floor of a two-floor apartment with two bath-attached bedrooms, living room and sit-out with garden & plantation view",
                detailedDescription: "Adjacent to the expansive organic plantation draping the woods of Western Ghats, our fully-equipped two-storied apartment offers a bird’s-eye view of the property in all its glory. Here, you could give ear to the soothing wakeup call of our resident singer: Malabar Whistling Thrush.",
                occupancy: 6,
                Tariff: "9000.00 (4 pax/exclusive of taxes)",
                photos: capricornFirstFloorImages,
                icon: capricorunFF_Icon
            }
        ],
        thumbline: capricornThumb,
    },
    {
        category: "cottages", rooms: [
            {
                name: "Taurus",
                Categorisation: "Plantation cottage with two bedrooms,garden and plantation view",
                descriptionOld: "Stand-alone cottage with two bath-attached bedrooms, along with living and dining rooms with plantation & garden view",
                description: "Stand-alone cottage with two bedrooms, along with living and dining rooms presenting a splendid view of the plantation and the garden.",
                detailedDescription: "Cosy. Compact. Complete. Taking a cue from the old colonial lodges, our tranquil cottage serves as the perfect vantage point to contemplate life, as nature has designed.Just a stone’s throw away from the wonders of our organic cardamom plantation, in case you were wondering!",
                occupancy: 6,
                Tariff: "15,000.00 (5 pax/exclusive of taxes)",
                photos: taurusImages,
                icon: taurus_Icon
            }
        ],
        thumbline: taurusThumb,
    },

    {
        category: "Double Rooms", rooms: [
            {
                name: "Gemini Room",
                Categorisation: "Room with balcony and plantation trail view",
                descriptionOld: "Bath-attached room with a balcony with plantation trail view",
                description: "Double room with a balcony providing a nice view of the plantation trail.",
                detailedDescription: "When it’s time to unwind, there’s a dream place in here to find. Case in point: our groovy trail view room that boasts of the best in ambience and luxury. Here, you could experience hitherto unexplored sights and sounds of nature that leave a lasting impression on your mind, enough to sway you to visit us more often.",
                occupancy: 3,
                Tariff: "8000.00 (2 pax/exclusive of taxes)",
                photos: geminiCImages,
                icon: geminiRoom_Icon
            },
        ],
        thumbline: geminiThumb,
    },
    // {
    //     category: "apartments", rooms: []
    // }
]
export const menuDetails = [
    { menu: "Home", to: "/#home", order: 0 },
    { menu: "About", to: "/About", order: 1 },
    { menu: "Rooms", to: "/#rooms", order: 2 },
    { menu: "Activities", to: "/activities", order: 4 },
    // { menu: "Contact", to: "/#contact", order: 5 },
    { menu: "Book now", to: "bookNow", externalLink: "https://bookings.resavenue.com/resBooking/rooms?regCode=VXIA1026&roomSearchId=211c3a15b7e54424a665f96dd648aa7d", order: 7 }
    // { menu: "logo", to: "", img: "logo.jpg" },
    // { menu: "Rates & Reservation", to: "" },
]

// export const roomDetails = [
//     {
//         name: "Orion",
//         description: "The aesthetically-designed suite rooms of this pentagonal complex are surrounded by tall trees as far as eyes could see. Look yonder and you will find huge sweet pots dangling, dripping the golden elixir like there’s no tomorrow. Wake up and smell the honey, honey!",
//         thumbline: orionThumb,
//         images: orionImages
//     },
//     {
//         name: "Taurus",
//         description: "Cosy. Compact. Complete. Taking a cue from the old colonial lodges, our tranquil cottage serves as the perfect vantage point to contemplate life, as nature has designed. Just a stone’s throw away from the wonders of our organic cardamom plantation, in case you were wondering!",
//         thumbline: taurusThumb,
//         images: taurusImages
//     },
//     {
//         name: "Gemini Suite",
//         description: "When you are surrounded by green, nothing should come b’tween. And that’s precisely why our trail view suite remains the pick of the lot. Located on the fringes of our trail to wilderness, you could sneak a peek at nature’s intimate moods here, eavesdropping on its many secrets!",
//         thumbline: geminiThumb,
//         images: geminiImages
//     },
//     {
//         name: "Capricorn",
//         description: "Adjacent to the expansive organic plantation draping the woods of Western Ghats, our fully-equipped two-storied apartment offers a bird’s-eye view of the property in all its glory. Here, you could give ear to the soothing wakeup call of our resident singer: Malabar Whistling Thrush.",
//         thumbline: capricornThumb,
//         images: capricornImages
//     }
// ]

// export const subRoomDetails = [
//     {
//         key: "Gemini Suite",
//         name: "Gemini Room",
//         description: "When it’s time to unwind, there’s a dream place in here to find. Case in point: our groovy trail view room that boasts of the best in ambience and luxury.Here, you could experience hitherto unexplored sights and sounds of nature that leave a lasting impression on your mind, enough to sway you to visit us more often.",
//         thumbline: geminiThumb,
//         images: geminiCImages
//     },
// ]
export const aboutMakayiram = (<>Life is either a daring adventure or nothing at all.A tranquil abode in the lap of wilderness – flanked by the towering Chokramudi peak in the east – Makayiram Retreat is the perfect getaway spot for bravehearts and weary at heart that offers the holiday of a lifetime. Located on the outskirts of Pothamedu – a quaint village dotted with breathtaking views of Munnar valley – Makayiram Retreat takes ‘harmony with nature’ to new heights; creating a unique and unparalleled sensory experience for travelling souls and hardcore trekkies alike.<p>Every tiny detail here has been expertly curated to capture the yesteryear charm of plantation life. More or less a ‘hermitage’ with thirteen cosy and lovely rooms, the property is set amidst lush-green cardamom plantation and majestic woods that goes back to prehistoric times. The air is cool and heartening and the scenery drop-dead gorgeous; so a simple stroll around the property goes a long way towards getting out of the humdrum of everyday life and bouncing back. The exclusive restaurant serves a locally-sourced cuisine featuring gastronomical delights that will tantalise your taste buds and the roaring BBQ pit offers a bonfire-barbeque experience that’s bona-fide awesome.</p><p>Makayiram Retreat is a gift of time, crafted over millions of years by nature; where organic plantation gradually came into being in harmony with the beating heart of wilderness. The soothing melody of Malabar Whistling Thrush sings the praises of its splendor. The aureate drops of honey dripping from zooming busy bees anoint its grandeur.</p><p>There’s nothing in the world like it</p>.</>);

type activitiesProps = {
    activity: string,
    description: string,
    image: string
}[];
export const activities: activitiesProps = [
    {
        activity: "Trail Walks",
        description: "A cool walk through the woods in the early hours, accompanied by the chirping of crickets and hopping giant squirrels, that takes you through the hidden paths of pristine Ghats. Up there are many wondrous sights that weguarantee one won’t dare describe and it’s all for you to take in while youare with us for the sojourn of a lifetime.",
        image: walkImg
    },
    {
        activity: "Organic Cardamom Plantation Tour",
        description: "A scented deep dive into the world of cardamom with a fun trek through the dense plantation in the company of experts sharing the minutiae of cardamom farming, the processing through traditional driers among many other things.Who said learning can’t be fun too?",
        image: cardamom
    },
    {
        activity: "Tea Estate Tour",
        description: "Perfect to a tee; that’s how we like everything to be. We take the adage so seriously that we have curated a special tea estate tour that includes a walk through the picturesque gardens, an interaction session with the planters and workers, a visit at tea factory witnessing the preparation and participating in the tea testing.It will be some quail- tea time, we assure you!",
        image: teaWalk
    },
    {
        activity: "Cycling",
        description: "There's a special thrill in roaming around on a bike that we encourage our guests to get on a bicycle to discover the beauty of our property and the nearby attractions.A refreshing and healthy adventure on wheels, folks!",
        image: cycling
    },
    {
        activity: "Indoor Games",
        description: "If lazing around is how you choose to spend your day, then we’ve got you covered! Be it an exciting round of Caroms, or an invigorating game of Chess, or an adrenaline-pumping match of Foosball, we have an array ofindoor games that can help you idle the time away.",
        image: indoor
    },
]

export const aboutHomePageContent = "Life is either a daring adventure or nothing at all.A tranquil abode in the lap of wilderness – flanked by the towering Chokramudi peak in the east – Makayiram Retreat is the perfect getaway spot for bravehearts and weary at heart that offers the holiday of a lifetime. Located on the outskirts of Pothamedu – a quaint village dotted with breathtaking views of Munnar valley – Makayiram Retreat takes ‘harmony with nature’ to new heights; creating a unique and unparalleled sensory experience for travelling souls and hardcore trekkies alike."
export const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};