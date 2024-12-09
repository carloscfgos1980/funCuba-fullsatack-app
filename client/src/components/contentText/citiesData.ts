const citiesData = [
  {
    id: "Havana",
    name: "Havana",
    image: "city_havana.png",
    description:
      "If you are an outgoing person, Havana is gonna blow ur mind! The city is very rich in history and culture (museums and theaters with a varied program). There is also a very nice beach (Guanabo) a few miles away from the city. Being in Havana gives you the feeling of having it all, you can get up in the morning, enjoy a delicious breakfast while observing the busy city life, it is like watching a movie. Then you get in a taxi (an old American car) for a few minutes that takes you to a nice sandy warm beach. In the afternoon go back to the city and sit at a bar in Havana Vieja to sip a mojito while listening to live music. Later on, you can have dinner in a local restaurant (paladar). Normally this will be the end of the night, not in Havana... we say: “la fiesta no se acaba hasta que se acabe” (Party never ends) Nightclubs usually get their pick after midnight and party could go until the sunrise." ,
    airB: [
      {
        idAirB: "analsa",
        name: "Analsa",
        route: "havana/analsa/analsa1.png",
      },
      {
        idAirB: "jardin",
        name: "El Jardin",
        route: "havana/jardin/jardin1.png",
      }
    ],
  },
  {
    id: "Viñales",
    name: "Viñales",
    image: "city_vinales.png",
    description:
      "Viñales is one of the finest places for natural tourism in Cuba. Mogotes (small mountains) are world famous for their particular shape. There are also caves that could be busy and a large amount of activities like hiking. Viñales produce, according to many experts, the best tobacco of the world. It is not the cigar but the tobacco plantation. There you can visit the farms and talk to the owners, it could be a very nice chat while you taste a cigar and drink some rum... What a life, eh? There is not much of night life. We would recommend 3 or 4 nights before to go ahead into the party vibe again.",
    airB: [
      {
        idAirB: "jorge-anna",
        name: "Jorge & Anna Luisa",
        route: "vinales/jorge_anna/jorge_anna3.png",
      },
      // {
      // idAirB: 'obrapia',
      // name: 'Obrapia',
      // route: 'havana/obrapia/obrapia1.jpg'
      // },
      // {
      // idAirB: 'vista_mar',
      // name: 'Vista Mar',
      // route: 'havana/vista_mar/vista1.jpg'
      // }
    ],
  },
  {
    id: "Cienfuegos",
    name: "Cienfuegos",
    image: "city_cienfuegos.png",
    description:
      "Cienfuegos is another place that is not valued in all its potential. It is a beautiful city with a French influence in architecture. There are plenty of fun places to visit at night, go to bars or nightclubs where you can try your dancing skills and how much alcohol you can put in your system. The city is fun to walk, enjoying the noise and friendly crowd, it won't take long before you find the sea. You can even use a “bicitaxi” or a horse ride. El Nicho is a waterfall so beautiful that it will leave you breathless. Pure oxygen, just the sound of the birds and other creatures in the countryside. While you are in Cienfuegos you can enjoy a ride through the bay or just go to Rancho Luna beach. We recommend 4 nights in Cienfuegos.",
    airB: [
      {
        idAirB: "hermanas",
        name: "Hermanas",
        route: "cienfuegos/hermanas/hermanas2.png",
      },
      {
        idAirB: "lalita",
        name: "Lalita",
        route: "cienfuegos/lalita/lalita8.png",
      },
      {
        idAirB: "luisa",
        name: "Doña Luisa",
        route: "cienfuegos/luisa/luisa1.png",
      },
      {
        idAirB: "puntapie",
        name: "Punta Pie",
        route: "cienfuegos/punta_pie/punta_pie10.png",
      },
    ],
  },
  {
    id: "Trinidad",
    name: "Trinidad",
    image: "city_trinidad.png",
    description:
      "Trinidad is very singular. Like Pompeya, it seems like a city that stop in time, you can do archeological work just to check the houses or the street (cobblestones). Just walk Trinidad is a pleasure. Street is full with people, stands that offer local traditional handicraft. These is the place where you should get your souvenirs! \n Trinidad is also reach in culture and night activities. There are art galleries/workshops that you can visit and have a chat with the artist. Gastronomy is quite good also, the influence of the international visitors has push for a better service and diversity, it is one of the few places in Cuba where you can have a real vegetarian menu.",
    airB: [
      {
        idAirB: "liliana",
        name: "Hostal Liliana",
        route: "trinidad/liliana/liliana1.png",
      },
      // {
      // idAirB: 'obrapia',
      // name: 'Obrapia',
      // route: 'havana/obrapia/obrapia1.jpg'
      // },
      // {
      // idAirB: 'vista_mar',
      // name: 'Vista Mar',
      // route: 'havana/vista_mar/vista1.jpg'
      // }
    ],
  },
   {
      id: "Giron",
      name: "Giron",
      image: "city_giron.png",
      description: "Girón is one of the pearls of Cuba, highly underdeveloped which is maybe the reason why it is such a special place. Girón is located on the East Havana and South of the most famous Cuban resort area: Varadero. There is no big city in the zone which helps to keep the water clear and transparent, excellent for diving and snorkeling. It is not only the wonderful beach, it also has a very rich natural park (Guama) where you can watch endemic species of animals and plants. A day in Laguna del Tesoro is magic. Don't forget the mosquito protector coz it is a swamp. Girón doesn't have much of a night life. Three or four days would be our recommendation.",
    airB: [
      {
        idAirB: "dos_mares",
        name: "Dos Mares",
        route: "cienfuegos/dos_mares/dos_mares1.png",
      },
      {
        idAirB: "hermanas",
        name: "Hermanas",
        route: "cienfuegos/hermanas/hermanas2.png",
      },
      {
        idAirB: "lalita",
        name: "Lalita",
        route: "cienfuegos/lalita/lalita8.png",
      },
      {
        idAirB: "luisa",
        name: "Doña Luisa",
        route: "cienfuegos/luisa/luisa1.png",
      },
      {
        idAirB: "puntapie",
        name: "Punta Pie",
        route: "cienfuegos/punta_pie/punta_pie10.png",
      },
    ],
  }
  //  {
  //     id: 'Santa Clara',
  //     description: 'Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara Santa Clara',
  //     airB:[
  //                 {
  //         idAirB: 'analsa',
  //         name: 'Analsa',
  //         route: 'havana/analsa/analsa1.jpg'
  //         },
  //         {
  //         idAirB: 'obrapia',
  //         name: 'Obrapia',
  //         route: 'havana/obrapia/obrapia1.jpg'
  //         },
  //         {
  //         idAirB: 'vista_mar',
  //         name: 'Vista Mar',
  //         route: 'havana/vista_mar/vista1.jpg'
  //         }
  //     ]
  // }
];

export default citiesData;
