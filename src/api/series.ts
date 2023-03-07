import { Serie } from 'src/utils/types/Serie.types'
import { SeriesResponse } from 'src/utils/types/SeriesProps.types'

import { client } from './client'

export type SeriesByNameRepsonse = {
  bmx: {
    serie: Serie[]
  }
}

const BMX_TOKEN = '5456b67bf0ef0caa1a37896c1f213d1f450a04287a18e15ff22e6485c6ccdb98'
/**
 * @return Promise<SeriesResponse>
 */
export const getSeries = async (): Promise<SeriesResponse> => {
  const response = await client.get(`series/`)
  return response.data
}

/**
 * This API gets de details of a specific serie
 * @param serie string: serie name
 * @return object { bmx : { series: Series[] } }
 */
export const getSeriesByName = async (serie: string): Promise<SeriesByNameRepsonse> => {
  const response = await client.get(`series/${serie}`, { headers: { 'Bmx-Token': BMX_TOKEN } })
  return response.data
}
