export interface GetCasesParams {
  query?: string;
  subjects?: string[];
  year?: string;
  types?: string[];
  nations?: string[];
  page?: number;
}

export interface GetCasesResponse {
  id: string;
  subject?: string;
  subject_type?: string;
  person_in_charge?: string;
  year?: string;
  type?: string;
  decision_number?: string;
  nation?: string;
  source?: string;
  link?: string;
  summary?: string;
  punishment_duration?: string;
  beneficary_ownership?: string;
}

export interface GetChartsResponse {
  countries: ChartResponse[];
  subjet_types: ChartResponse[];
  case_types: ChartResponse[];
}

export interface ChartResponse {
  name?: string;
  value?: number;
}

export interface LkppChartResponse {
  blacklist_province: ChartResponse[];
  ceiling_distribution: ChartResponse[];
  top_ten_reporter: ChartResponse[];
  scenario_distribution: ChartResponse[];
  violation_distribution: ChartResponse[];
}
