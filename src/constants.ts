import _ from "lodash";
import type { Category } from "./types";

export const categories: Category[] = [
  {
    name: "L2",
    weightLimitInGrams: 10000,
    rowClassName: "bg-cyan-200",
    items: [
      {
        code: "D1404",
        image: "D1404.png",
        name: "Mix Free Univerzal",
        weightInGrams: 500,
        maxPrice: 0.54,
      },
      {
        code: "D0407",
        image: "D0407.png",
        name: "PROMIX®PK špeciál, bezgluténová múčna zmes zmes na jemné pečivo",
        weightInGrams: 1000,
        maxPrice: 1.09,
      },
      {
        code: "D0408",
        image: "D0408.png",
        name: "PROMIX®CH špeciál, bezgluténová múčna zmes na chlieb",
        weightInGrams: 1000,
        maxPrice: 1.09,
      },
      {
        code: "D0386",
        image: "D0386.png",
        name: "Bezlepková sypká zmes Mantler bez laktózy",
        weightInGrams: 1000,
        maxPrice: 1.13,
      },
      {
        code: "D1226",
        image: "D1226.png",
        name: "Mix it- Univerzal",
        weightInGrams: 1000,
        maxPrice: 1.33,
      },
      {
        code: "D0976",
        image: "D0976.png",
        name: "Cake Mix – bezgluténová piškótová zmes",
        weightInGrams: 1000,
        maxPrice: 1.34,
      },
      {
        code: "D1154",
        image: "D1154.jpg",
        name: "Pohánková múka hladká bezgluténová zo slovenskej pohánky",
        weightInGrams: 500,
        maxPrice: 0.69,
      },
      {
        code: "D0685",
        image: "D0685.png",
        name: "Jizerka – bezlepková zmes „ZELENÁ“",
        weightInGrams: 1000,
        maxPrice: 1.44,
      },
      {
        code: "D1155",
        image: "D1155.jpg",
        name: "Pohánková krupica bezgluténové zo slovenskej pohánky",
        weightInGrams: 500,
        maxPrice: 0.7,
      },
      {
        code: "D1401",
        image: "D1401.jpg",
        name: "Mix For Bread",
        weightInGrams: 1000,
        maxPrice: 1.57,
      },
      {
        code: "D1280",
        image: "D1280.jpg",
        name: "Rolls mix – bezgluténová múčna zmes na rožky",
        weightInGrams: 500,
        maxPrice: 0.81,
      },
      {
        code: "D0272",
        image: "D0272.png",
        name: "Knedľa bezgluténová v prášku",
        weightInGrams: 250,
        maxPrice: 0.45,
      },
      {
        code: "D0172",
        image: "D0172.png",
        name: "PROMIX®UNI, bezgluténová múčna zmes univerzálna",
        weightInGrams: 1000,
        maxPrice: 1.8,
      },
      {
        code: "D1031",
        image: "D1031.png",
        name: "Bread mix dark – bezgluténová zmes na tmavý chlieb a pečivo s pohánkou",
        weightInGrams: 1000,
        maxPrice: 1.7,
      },
      {
        code: "D0173",
        image: "D0173.png",
        name: "PROMIX®T, bezgluténová múčna zmes univerzálna tmavá",
        weightInGrams: 1000,
        maxPrice: 1.83,
      },
      {
        code: "D1030",
        image: "D1030.png",
        name: "Bread mix white – bezgluténová zmes na svetlý chlieb a pečivo",
        weightInGrams: 1000,
        maxPrice: 1.68,
      },
      {
        code: "D0872",
        image: "D0872.png",
        name: "PROMIX ®Alfa, bezgluténová múčna zmes univerzálna mineralizovaná",
        weightInGrams: 1000,
        maxPrice: 2.04,
      },
      {
        code: "D1073",
        image: "D1073.jpg",
        name: "Mix C Patisserie – múčna zmes bezgluténová",
        weightInGrams: 1000,
        maxPrice: 2.18,
      },
      {
        code: "D0873",
        image: "D0873.png",
        name: "PROMIX® Beta, racionálna bezgluténová múka mineralizovaná",
        weightInGrams: 1000,
        maxPrice: 2.24,
      },
      {
        code: "D0974",
        image: "D0974.png",
        name: "Mix per Pane – zmes na chlieb",
        weightInGrams: 1000,
        maxPrice: 2.38,
      },
      {
        code: "D0194",
        image: "D0194.png",
        name: "PROMIX®FORTE, bezgluténová múčna zmes silná",
        weightInGrams: 1000,
        maxPrice: 2.47,
      },
      {
        code: "D0337",
        image: "D0337.png",
        name: "PROMIX-UNI komfort – univerzálna bezlepková zmes pre automatické pečenie",
        weightInGrams: 400,
        maxPrice: 1.1,
      },
      {
        code: "D1074",
        image: "D1074.jpg",
        name: "Mix per Pane Integrale – zmes na chlieb, bezgluténová",
        weightInGrams: 1000,
        maxPrice: 2.5,
      },
      {
        code: "D0973",
        image: "D0973.png",
        name: "Bakery mix – bezgluténová zmes na kysnuté cesto",
        weightInGrams: 1000,
        maxPrice: 2.46,
      },
      {
        code: "D0335",
        image: "D0335.png",
        name: "Muffin bezgluténový v prášku",
        weightInGrams: 300,
        maxPrice: 0.93,
      },
      {
        code: "D0298",
        image: "D0298.jpg",
        name: "Mix B – bezlepková zmes na prípravu chleba",
        weightInGrams: 1000,
        maxPrice: 2.74,
      },
      {
        code: "D1104",
        image: "D1104.png",
        name: "Halušky bezgluténové v prášku",
        weightInGrams: 300,
        maxPrice: 0.9,
      },
      {
        code: "D0657",
        image: "D0657.jpg",
        name: "Mix it Dunkel – chlebová zmes tmavá",
        weightInGrams: 1000,
        maxPrice: 3.06,
      },
      {
        code: "D0256",
        image: "D0256.png",
        name: "Cícerová múka instantná",
        weightInGrams: 500,
        maxPrice: 1.77,
      },
      {
        code: "D0175",
        image: "D0175.png",
        name: "KRUPICA bezgluténová",
        weightInGrams: 500,
        maxPrice: 2.33,
      },
      {
        code: "D0658",
        image: "D0658.jpg",
        name: "Paniermehl – breadcrumbs – strúhanka bez lepku",
        weightInGrams: 300,
        maxPrice: 1.75,
      },
      {
        code: "D0254",
        image: "D0254.png",
        name: "Strúhanka bezgluténová pečivová",
        weightInGrams: 350,
        maxPrice: 2.02,
      },
      {
        code: "D1318",
        image: "D1318.png",
        name: "Pancakes&Waffles – bezgluténová sypká zmes na prípravu vaflí alebo palaciniek",
        weightInGrams: 350,
        maxPrice: 2.22,
      },
      {
        code: "D0977",
        image: "D0977.png",
        name: "Fine Mix – bezgluténová zmes na perníky",
        weightInGrams: 300,
        maxPrice: 2.48,
      },
    ],
  },
  {
    name: "L3",
    weightLimitInGrams: 2000,
    rowClassName: "bg-lime-200",
    items: [
      {
        code: "DP025",
        image: "DP025.jpg",
        name: "Kukuričné cestoviny Felicia",
        weightInGrams: 500,
        maxPrice: 0.34,
      },
      {
        code: "D0632",
        image: "D0632.jpg",
        name: "Kukuričné cestoviny Felicia Conchigliette",
        weightInGrams: 500,
        maxPrice: 0.34,
      },
      {
        code: "D0633",
        image: "D0633.jpg",
        name: "Kukuričné cestoviny Felicia Fusilli",
        weightInGrams: 500,
        maxPrice: 0.34,
      },
      {
        code: "D0634",
        image: "D0634.jpg",
        name: "Kukuričné cestoviny Felicia Penne Rigate",
        weightInGrams: 500,
        maxPrice: 0.34,
      },
      {
        code: "D0635",
        image: "D0635.jpg",
        name: "Kukuričné cestoviny Felicia Spaghetti",
        weightInGrams: 500,
        maxPrice: 0.34,
      },
      {
        code: "DP026",
        image: "DP026.jpg",
        name: "Bezlepkové cestoviny Schär",
        weightInGrams: 250,
        maxPrice: 0.27,
      },
      {
        code: "D0662",
        image: "D0662.jpg",
        name: "Spaghetti – bezlepkové cestoviny",
        weightInGrams: 250,
        maxPrice: 0.27,
      },
      {
        code: "D0663",
        image: "D0663.jpg",
        name: "Penne – bezlepkové cestoviny",
        weightInGrams: 250,
        maxPrice: 0.27,
      },
      {
        code: "D0664",
        image: "D0664.jpg",
        name: "Fusilli – bezlepkové cestoviny",
        weightInGrams: 250,
        maxPrice: 0.27,
      },
      {
        code: "D0686",
        image: "D0686.jpg",
        name: "Bio ryžové cestoviny Felicia FUSILLI TRICOLORE",
        weightInGrams: 500,
        maxPrice: 1.06,
      },
      {
        code: "D0340",
        image: "D0340.png",
        name: "MUESLI bezlepkové granulované",
        weightInGrams: 200,
        maxPrice: 0.7,
      },
      {
        code: "D0771",
        image: "D0771.webp",
        name: "Felicia BIO celozrnné ryžové fusilli",
        weightInGrams: 250,
        maxPrice: 0.82,
      },
      {
        code: "D0180",
        image: "D0180.png",
        name: "PROCEL bezgluténové cestoviny",
        weightInGrams: 250,
        maxPrice: 0.9,
      },
      {
        code: "D0942",
        image: "D0942.jpg",
        name: "Fruit Müsli, müsli s ovocím bezgluténové",
        weightInGrams: 375,
        maxPrice: 2.4,
      },
      {
        code: "D0939",
        image: "D0939.jpeg",
        name: "Maestro Vital, chlieb bezgluténový viaczrnný obohatený vápnikom krájaný",
        weightInGrams: 350,
        maxPrice: 1.99,
      },
      {
        code: "D0874",
        image: "D0874.png",
        name: "LINSI chlieb s ľanom bezgluténový",
        weightInGrams: 300,
        maxPrice: 1.63,
      },
      {
        code: "D0876",
        image: "D0876.webp",
        name: "Parená knedľa bezgluténová",
        weightInGrams: 320,
        maxPrice: 1.71,
      },
      {
        code: "D0940",
        image: "D0940.jpg",
        name: "Maestro Classic, chlieb bezgluténový krájaný",
        weightInGrams: 300,
        maxPrice: 1.94,
      },
      {
        code: "D0941",
        image: "D0941.webp",
        name: "Maestro Cereale, chlieb bezgluténový viaczrnný krájaný",
        weightInGrams: 300,
        maxPrice: 2.07,
      },
      {
        code: "DP024",
        image: "DP024.png",
        name: "Chlieb bezgluténový",
        weightInGrams: 360,
        maxPrice: 2.24,
      },
      {
        code: "D0185",
        image: "D0185.png",
        name: "Svetlý chlieb bezgluténový",
        weightInGrams: 360,
        maxPrice: 2.24,
      },
      {
        code: "D0251",
        image: "D0251.png",
        name: "Tmavý chlieb bezgluténový",
        weightInGrams: 360,
        maxPrice: 2.24,
      },
      {
        code: "D0877",
        image: "D0877.png",
        name: "Parené buchty bezgluténové s lekvárom",
        weightInGrams: 320,
        maxPrice: 2.06,
      },
      {
        code: "D0978",
        image: "D0978.png",
        name: "Panfette- integrale- celozrnný chlieb krájaný",
        weightInGrams: 340,
        maxPrice: 3.05,
      },
      {
        code: "D0661",
        image: "D0661.webp",
        name: "Ciabatta Rustica – pečivo bežné bezgluténové viaczrnné",
        weightInGrams: 200,
        maxPrice: 2.42,
      },
      {
        code: "D0875",
        image: "D0875.jpg",
        name: "Panini, Hamburger – bezgluténové žemle bez lepku",
        weightInGrams: 300,
        maxPrice: 3.0,
      },
      {
        code: "D0979",
        image: "D0979.png",
        name: "Panfette- krájaný chlieb biely",
        weightInGrams: 300,
        maxPrice: 3.27,
      },
      {
        code: "D0293",
        image: "D0293.jpg",
        name: "Bon Matin – bezlepkové sladké žemle",
        weightInGrams: 200,
        maxPrice: 2.71,
      },
      {
        code: "D0479",
        image: "D0479.jpg",
        name: "Pain Campagnard – bezlepkový domáci chlieb",
        weightInGrams: 240,
        maxPrice: 2.81,
      },
      {
        code: "D0660",
        image: "D0660.jpg",
        name: "Ciabatta – predpečené bezlepkové žemle",
        weightInGrams: 200,
        maxPrice: 2.51,
      },
    ],
  },
];

/*export const allItems = _.flow([
  _.partialRight(_.map, ({items}: Category) => items),
  _.flatten
])(categories)*/
