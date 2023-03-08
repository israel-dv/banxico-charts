import { UseQueryOptions, UseQueryResult, useQuery } from 'react-query'

import { getSeries } from 'src/api/series'
import { SeriesResponse } from 'src/utils/types/SeriesProps.types'

/**
 *
 * function onError supply try-catch on propmise in getSeries
 * @param options -> set options to useQuery hook.
 * @returns UseQueryResult<SeriesResponse, Error>
 */
export const useGetSeries = (
  options: UseQueryOptions<unknown, Error, SeriesResponse, string[]>
): UseQueryResult<SeriesResponse, Error> => {
  return useQuery(['getSeries'], getSeries, {
    retry: 3,
    onError: (error) => console.error('there is an error', error),
    ...options
  })
}
