import { UseQueryOptions, UseQueryResult, useQuery } from 'react-query';

import { getSeries } from 'src/api/series';
import { SeriesResponse } from 'src/utils/types/SeriesProps.types';

type UseGetSeriesProps = {
  options?: UseQueryOptions<unknown, Error, SeriesResponse, string[]>;
};

/**
 *
 * function onError supply try-catch on propmise in getSeries
 * @param options -> set options to useQuery hook.
 * @returns UseQueryResult<SeriesResponse, Error>
 */
export const useGetSeries = ({
  options,
}: UseGetSeriesProps): UseQueryResult<SeriesResponse, Error> => {
  return useQuery(['getSeries'], getSeries, {
    retry: 3,
    onError: (error) => console.error('there is an error', error),
    ...options,
  });
};
