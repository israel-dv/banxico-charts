import { UseQueryOptions, UseQueryResult, useQuery } from 'react-query';

import { SeriesByNameRepsonse, getSeriesByName } from 'src/api/series';

export const useGetSeriesByName = (
  serie: string,
  options?: UseQueryOptions<unknown, Error, SeriesByNameRepsonse, string[]>
): UseQueryResult<SeriesByNameRepsonse, Error> => {
  return useQuery(['getQueryBySerie', serie], () => getSeriesByName(serie), { ...options });
};
