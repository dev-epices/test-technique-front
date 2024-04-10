export type Site = {
  id: number
  name: string
  max_power: number
  address: string
  start_date: Date
  picture: string
}

export type DataPoint = {
  datetime: Date
  production: number
  reference: number
}
