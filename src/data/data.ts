import { DataPoint, Site } from './types'

export const SITES: Array<Site> = [
  {
    id: 1234,
    name: 'Ferme des Petits Bisons',
    address: '456 rue de la Grande Montée\n45630 Curry',
    max_power: 63.54,
    start_date: new Date(2020, 10, 10),
    picture: 'https://cdn.stocksnap.io/img-thumbs/960w/old-barn_HD6KC1OP4K.jpg',
  },
  {
    id: 310,
    name: 'Église des Bois Rouges',
    address: '2 route Jeanne Dufour\n85000 Origan',
    max_power: 300.45,
    start_date: new Date(2021, 5, 12),
    picture: 'https://cdn.stocksnap.io/img-thumbs/960w/architecture-building_ZYHP8Z8UXZ.jpg',
  },
  {
    id: 8563,
    name: 'Aux Trois Arbres',
    address: '9253 chemin des Trois Arbres\n52100 Paprika',
    max_power: 23.4,
    start_date: new Date(2019, 12, 12),
    picture: 'https://cdn.stocksnap.io/img-thumbs/960w/solar-panels_EFYB8VJXNT.jpg',
  },
]

export const DATA_POINTS: Array<{ site_id: number; data: Array<DataPoint> }> = [
  {
    site_id: 1234,
    data: [
      {
        datetime: new Date(2024, 3, 1, 9),
        production: 20,
        reference: 20,
      },
      {
        datetime: new Date(2024, 3, 1, 12),
        production: 80,
        reference: 100,
      },
      {
        datetime: new Date(2024, 3, 1, 15),
        production: 44,
        reference: 100,
      },
      {
        datetime: new Date(2024, 3, 1, 18),
        production: 20,
        reference: 20,
      },

      {
        datetime: new Date(2024, 3, 2, 9),
        production: 0,
        reference: 20,
      },
      {
        datetime: new Date(2024, 3, 2, 12),
        production: 0,
        reference: 100,
      },
      {
        datetime: new Date(2024, 3, 2, 15),
        production: 0,
        reference: 100,
      },
      {
        datetime: new Date(2024, 3, 2, 18),
        production: 0,
        reference: 20,
      },

      {
        datetime: new Date(2024, 3, 3, 9),
        production: 20,
        reference: 20,
      },
      {
        datetime: new Date(2024, 3, 3, 12),
        production: 80,
        reference: 100,
      },
      {
        datetime: new Date(2024, 3, 3, 15),
        production: 44,
        reference: 100,
      },
      {
        datetime: new Date(2024, 3, 3, 18),
        production: 20,
        reference: 20,
      },
    ],
  },

  {
    site_id: 310,
    data: [
      {
        datetime: new Date(2024, 3, 1, 9),
        production: 0,
        reference: 120,
      },
      {
        datetime: new Date(2024, 3, 1, 12),
        production: 0,
        reference: 1000,
      },
      {
        datetime: new Date(2024, 3, 1, 15),
        production: 0,
        reference: 800,
      },
      {
        datetime: new Date(2024, 3, 1, 18),
        production: 0,
        reference: 120,
      },

      {
        datetime: new Date(2024, 3, 2, 9),
        production: 8,
        reference: 20,
      },
      {
        datetime: new Date(2024, 3, 2, 12),
        production: 23,
        reference: 100,
      },
      {
        datetime: new Date(2024, 3, 2, 15),
        production: 32,
        reference: 100,
      },
      {
        datetime: new Date(2024, 3, 2, 18),
        production: 8,
        reference: 20,
      },

      {
        datetime: new Date(2024, 3, 3, 9),
        production: 20,
        reference: 200,
      },
      {
        datetime: new Date(2024, 3, 3, 12),
        production: 80,
        reference: 1000,
      },
      {
        datetime: new Date(2024, 3, 3, 15),
        production: 44,
        reference: 1100,
      },
      {
        datetime: new Date(2024, 3, 3, 18),
        production: 20,
        reference: 250,
      },
    ],
  },

  {
    site_id: 8563,
    data: [
      {
        datetime: new Date(2024, 3, 1, 9),
        production: 110,
        reference: 120,
      },
      {
        datetime: new Date(2024, 3, 1, 12),
        production: 880,
        reference: 1000,
      },
      {
        datetime: new Date(2024, 3, 1, 15),
        production: 520,
        reference: 700,
      },
      {
        datetime: new Date(2024, 3, 1, 18),
        production: 100,
        reference: 120,
      },

      {
        datetime: new Date(2024, 3, 2, 9),
        production: 8,
        reference: 20,
      },
      {
        datetime: new Date(2024, 3, 2, 12),
        production: 410,
        reference: 500,
      },
      {
        datetime: new Date(2024, 3, 2, 15),
        production: 390,
        reference: 400,
      },
      {
        datetime: new Date(2024, 3, 2, 18),
        production: 78,
        reference: 120,
      },
    ],
  },
]
