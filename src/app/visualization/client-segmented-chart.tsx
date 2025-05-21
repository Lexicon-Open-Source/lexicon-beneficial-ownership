"use client";

import React, { useEffect, useState } from "react";
import { getCharts, getLkppCharts } from "@/services/cases";
import SegmentedChart from "./segmented-chart";
import Loading from "./loading";
import { Return } from "@/types/returns";
import { BaseResponse } from "@/types/responses";
import { GetChartsResponse, LkppChartResponse } from "@/types/cases";

export default function ClientSegmentedChart(): React.ReactElement {
  const [response, setResponse] = useState<Return<
    BaseResponse<GetChartsResponse>
  > | null>(null);
  const [responseLkppChart, setResponseLkppChart] = useState<Return<
    BaseResponse<LkppChartResponse>
  > | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [chartsData, lkppChartsData] = await Promise.all([
          getCharts(),
          getLkppCharts(),
        ]);

        if (chartsData.error) {
          setError(chartsData.error);
          return;
        }

        if (lkppChartsData.error) {
          setError(lkppChartsData.error);
          return;
        }

        setResponse(chartsData);
        setResponseLkppChart(lkppChartsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!response || !responseLkppChart) {
    return <div>No data available</div>;
  }

  return (
    <SegmentedChart response={response} responseLkppChart={responseLkppChart} />
  );
}
