import _ from 'lodash';
import type { Category } from "./types";

export const categories: Category[] = [
  {
    name: 'L2',
    weightLimitInGrams: 10000,
    rowClassName: 'bg-cyan-200',
    items: [
      {
        code: 'D1404',
        name: 'Mix Free Univerzal',
        weightInGrams: 500,
        maxPrice: 0.54,
      },
      {
        code: 'D0407',
        name: 'PROMIX®PK špeciál, bezgluténová múčna zmes zmes na jemné pečivo',
        weightInGrams: 1000,
        maxPrice: 1.09,
      },
      {
        code: 'D0408',
        name: 'PROMIX®CH špeciál, bezgluténová múčna zmes na chlieb',
        weightInGrams: 1000,
        maxPrice: 1.09,
      },
      {
        code: 'D0386',
        name: 'Bezlepková sypká zmes Mantler bez laktózy',
        weightInGrams: 1000,
        maxPrice: 1.13,
      },
      {
        code: 'D1226',
        name: 'Mix it- Univerzal',
        weightInGrams: 1000,
        maxPrice: 1.33,
      },
      {
        code: 'D0976',
        name: 'Cake Mix – bezgluténová piškótová zmes',
        weightInGrams: 1000,
        maxPrice: 1.34,
      },
      {
        code: 'D1154',
        name: 'Pohánková múka hladká bezgluténová zo slovenskej pohánky',
        weightInGrams: 500,
        maxPrice: 0.69,
      },
      {
        code: 'D0685',
        name: 'Jizerka – bezlepková zmes „ZELENÁ“',
        weightInGrams: 1000,
        maxPrice: 1.44,
      },
      {
        code: 'D1155',
        name: 'Pohánková krupica bezgluténové zo slovenskej pohánky',
        weightInGrams: 500,
        maxPrice: 0.70,
      },
      {
        code: 'D1401',
        name: 'Mix For Bread',
        weightInGrams: 1000,
        maxPrice: 1.57,
      },
      {
        code: 'D1280',
        name: 'Rolls mix – bezgluténová múčna zmes na rožky',
        weightInGrams: 500,
        maxPrice: 0.81,
      },
      {
        code: 'D0272',
        name: 'Knedľa bezgluténová v prášku',
        weightInGrams: 250,
        maxPrice: 0.45,
      },
      {
        code: 'D0172',
        name: 'PROMIX®UNI, bezgluténová múčna zmes univerzálna',
        weightInGrams: 1000,
        maxPrice: 1.80,
      },
      {
        code: 'D1031',
        name: 'Bread mix dark – bezgluténová zmes na tmavý chlieb a pečivo s pohánkou',
        weightInGrams: 1000,
        maxPrice: 1.70,
      },
      {
        code: 'D0173',
        name: 'PROMIX®T, bezgluténová múčna zmes univerzálna tmavá',
        weightInGrams: 1000,
        maxPrice: 1.83,
      },
      {
        code: 'D1030',
        name: 'Bread mix white – bezgluténová zmes na svetlý chlieb a pečivo',
        weightInGrams: 1000,
        maxPrice: 1.68,
      },
      {
        code: 'D0872',
        name: 'PROMIX ®Alfa, bezgluténová múčna zmes univerzálna mineralizovaná',
        weightInGrams: 1000,
        maxPrice: 2.04,
      },
      {
        code: 'D1073',
        name: 'Mix C Patisserie – múčna zmes bezgluténová',
        weightInGrams: 1000,
        maxPrice: 2.18,
      },
      {
        code: 'D0873',
        name: 'PROMIX® Beta, racionálna bezgluténová múka mineralizovaná',
        weightInGrams: 1000,
        maxPrice: 2.24,
      },
      {
        code: 'D0974',
        name: 'Mix per Pane – zmes na chlieb',
        weightInGrams: 1000,
        maxPrice: 2.38,
      },
      {
        code: 'D0194',
        name: 'PROMIX®FORTE, bezgluténová múčna zmes silná',
        weightInGrams: 1000,
        maxPrice: 2.47,
      },
      {
        code: 'D0337',
        name: 'PROMIX-UNI komfort – univerzálna bezlepková zmes pre automatické pečenie',
        weightInGrams: 400,
        maxPrice: 1.10,
      },
      {
        code: 'D1074',
        name: 'Mix per Pane Integrale – zmes na chlieb, bezgluténová',
        weightInGrams: 1000,
        maxPrice: 2.50,
      },
      {
        code: 'D0973',
        name: 'Bakery mix – bezgluténová zmes na kysnuté cesto',
        weightInGrams: 1000,
        maxPrice: 2.46,
      },
      {
        code: 'D0335',
        name: 'Muffin bezgluténový v prášku',
        weightInGrams: 300,
        maxPrice: 0.93,
      },
      {
        code: 'D0298',
        name: 'Mix B – bezlepková zmes na prípravu chleba',
        weightInGrams: 1000,
        maxPrice: 2.74,
      },
      {
        code: 'D1104',
        name: 'Halušky bezgluténové v prášku',
        weightInGrams: 300,
        maxPrice: 0.90,
      },
      {
        code: 'D0657',
        name: 'Mix it Dunkel – chlebová zmes tmavá',
        weightInGrams: 1000,
        maxPrice: 3.06,
      },
      {
        code: 'D0256',
        name: 'Cícerová múka instantná',
        weightInGrams: 500,
        maxPrice: 1.77,
      },
      {
        code: 'D0175',
        name: 'KRUPICA bezgluténová',
        weightInGrams: 500,
        maxPrice: 2.33,
      },
      {
        code: 'D0658',
        name: 'Paniermehl – breadcrumbs – strúhanka bez lepku',
        weightInGrams: 300,
        maxPrice: 1.75,
      },
      {
        code: 'D0254',
        name: 'Strúhanka bezgluténová pečivová',
        weightInGrams: 350,
        maxPrice: 2.02,
      },
      {
        code: 'D1318',
        name: 'Pancakes&Waffles – bezgluténová sypká zmes na prípravu vaflí alebo palaciniek',
        weightInGrams: 350,
        maxPrice: 2.22,
      },
      {
        code: 'D0977',
        name: 'Fine Mix – bezgluténová zmes na perníky',
        weightInGrams: 300,
        maxPrice: 2.48,
      },
    ]
  },
  {
    name: 'L3',
    weightLimitInGrams: 2000,
    rowClassName: 'bg-lime-200',
    items: [
      {
        code: 'DP025',
        name: 'Kukuričné cestoviny Felicia',
        weightInGrams: 500,
        maxPrice: 0.34,
      },
      {
        code: 'D0632',
        name: 'Kukuričné cestoviny Felicia Conchigliette',
        weightInGrams: 500,
        maxPrice: 0.34,
      },
      {
        code: 'D0633',
        name: 'Kukuričné cestoviny Felicia Fusilli',
        weightInGrams: 500,
        maxPrice: 0.34,
      },
      {
        code: 'D0634',
        name: 'Kukuričné cestoviny Felicia Penne Rigate',
        weightInGrams: 500,
        maxPrice: 0.34,
      },
      {
        code: 'D0635',
        name: 'Kukuričné cestoviny Felicia Spaghetti',
        weightInGrams: 500,
        maxPrice: 0.34,
      },
      {
        code: 'DP026',
        name: 'Bezlepkové cestoviny Schär',
        weightInGrams: 250,
        maxPrice: 0.27,
      },
      {
        code: 'D0662',
        name: 'Spaghetti – bezlepkové cestoviny',
        weightInGrams: 250,
        maxPrice: 0.27,
      },
      {
        code: 'D0663',
        name: 'Penne – bezlepkové cestoviny',
        weightInGrams: 250,
        maxPrice: 0.27,
      },
      {
        code: 'D0664',
        name: 'Fusilli – bezlepkové cestoviny',
        weightInGrams: 250,
        maxPrice: 0.27,
      },
      {
        code: 'D0686',
        name: 'Bio ryžové cestoviny Felicia FUSILLI TRICOLORE',
        weightInGrams: 500,
        maxPrice: 1.06,
      },
      {
        code: 'D0340',
        name: 'MUESLI bezlepkové granulované',
        weightInGrams: 200,
        maxPrice: 0.70,
      },
      {
        code: 'D0771',
        name: 'Felicia BIO celozrnné ryžové fusilli',
        weightInGrams: 250,
        maxPrice: 0.82,
      },
      {
        code: 'D0180',
        name: 'PROCEL bezgluténové cestoviny',
        weightInGrams: 250,
        maxPrice: 0.90,
      },
      {
        code: 'D0942',
        name: 'Fruit Müsli, müsli s ovocím bezgluténové',
        weightInGrams: 375,
        maxPrice: 2.40,
      },
      {
        code: 'D0939',
        name: 'Maestro Vital, chlieb bezgluténový viaczrnný obohatený vápnikom krájaný',
        weightInGrams: 350,
        maxPrice: 1.99,
      },
      {
        code: 'D0874',
        name: 'LINSI chlieb s ľanom bezgluténový',
        weightInGrams: 300,
        maxPrice: 1.63,
      },
      {
        code: 'D0876',
        name: 'Parená knedľa bezgluténová',
        weightInGrams: 320,
        maxPrice: 1.71,
      },
      {
        code: 'D0940',
        name: 'Maestro Classic, chlieb bezgluténový krájaný',
        weightInGrams: 300,
        maxPrice: 1.94,
      },
      {
        code: 'D0941',
        name: 'Maestro Cereale, chlieb bezgluténový viaczrnný krájaný',
        weightInGrams: 300,
        maxPrice: 2.07,
      },
      {
        code: 'DP024',
        name: 'Chlieb bezgluténový',
        weightInGrams: 360,
        maxPrice: 2.24,
      },
      {
        code: 'D0185',
        name: 'Svetlý chlieb bezgluténový',
        weightInGrams: 360,
        maxPrice: 2.24,
      },
      {
        code: 'D0251',
        name: 'Tmavý chlieb bezgluténový',
        weightInGrams: 360,
        maxPrice: 2.24,
      },
      {
        code: 'D0877',
        name: 'Parené buchty bezgluténové s lekvárom',
        weightInGrams: 320,
        maxPrice: 2.06,
      },
      {
        code: 'D0978',
        name: 'Panfette- integrale- celozrnný chlieb krájaný',
        weightInGrams: 340,
        maxPrice: 3.05,
      },
      {
        code: 'D0661',
        name: 'Ciabatta Rustica – pečivo bežné bezgluténové viaczrnné',
        weightInGrams: 200,
        maxPrice: 2.42,
      },
      {
        code: 'D0875',
        name: 'Panini, Hamburger – bezgluténové žemle bez lepku',
        weightInGrams: 300,
        maxPrice: 3.00,
      },
      {
        code: 'D0979',
        name: 'Panfette- krájaný chlieb biely',
        weightInGrams: 300,
        maxPrice: 3.27,
      },
      {
        code: 'D0293',
        name: 'Bon Matin – bezlepkové sladké žemle',
        weightInGrams: 200,
        maxPrice: 2.71,
      },
      {
        code: 'D0479',
        name: 'Pain Campagnard – bezlepkový domáci chlieb',
        weightInGrams: 240,
        maxPrice: 2.81,
      },
      {
        code: 'D0660',
        name: 'Ciabatta – predpečené bezlepkové žemle',
        weightInGrams: 200,
        maxPrice: 2.51,
      },
    ]
  }
]

/*export const allItems = _.flow([
  _.partialRight(_.map, ({items}: Category) => items),
  _.flatten
])(categories)*/
