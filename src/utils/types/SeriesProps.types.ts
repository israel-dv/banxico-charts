export type SeriesInfo = {
  variable: string;
  display_name: string;
  display_name_en: string;
  readonly unit_id: string;
};

export type SeriesResponse = {
  page: number;
  pageSize: number;
  totalPages: number;
  data: SeriesInfo[];
};
