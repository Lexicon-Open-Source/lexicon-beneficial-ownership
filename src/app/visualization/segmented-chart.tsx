"use client";

import React, { useState } from "react";
import Chart, { BarChartHorizontal, PieChart } from "./chart";
import { cn } from "@/utils/helper";
import { Return } from "@/types/returns";
import { BaseResponse } from "@/types/responses";
import { GetChartsResponse, LkppChartResponse } from "@/types/cases";

export default function SegmentedChart({
  response,
  responseLkppChart,
}: {
  response: Return<BaseResponse<GetChartsResponse>>;
  responseLkppChart: Return<BaseResponse<LkppChartResponse>>;
}) {
  const [selected, setSelected] = useState("all");

  return (
    <div className="flex flex-col w-full px-32 py-16 gap-12">
      <div className="w-full space-y-6 mt-12">
        <div className="relative flex w-full rounded-lg bg-neutral-100 p-1">
          <button
            onClick={() => setSelected("all")}
            className={cn(
              "flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all",
              selected === "all"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            All Data
          </button>
          <button
            onClick={() => setSelected("indonesian")}
            className={cn(
              "flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all",
              selected === "indonesian"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Indonesian Data
          </button>
        </div>
      </div>
      <div>
        <div
          className={cn(
            "transition-opacity flex-col gap-4",
            selected === "all" ? "flex" : "hidden"
          )}
          role="tabpanel"
        >
          <div className="border border-colorBorder rounded-xl p-5">
            <h3 className="text-2xl font-semibold">Cases by Nations</h3>
            <Chart data={response?.success?.data?.countries ?? []} />
          </div>
          <div className="border border-colorBorder rounded-xl p-5">
            <h3 className="text-2xl font-semibold">Cases by Subject Types</h3>
            <Chart data={response?.success?.data?.subjet_types ?? []} />
          </div>
          <div className="border border-colorBorder rounded-xl p-5">
            <h3 className="text-2xl font-semibold">Cases by Case Types</h3>
            <Chart data={response?.success?.data?.case_types ?? []} />
          </div>
        </div>

        <div
          className={cn(
            "transition-opacity flex flex-col gap-4",
            selected === "indonesian" ? "flex" : "hidden"
          )}
          role="tabpanel"
        >
          <div className="border border-colorBorder rounded-xl p-5">
            <h3 className="text-2xl font-semibold">
              Number of Providers Per Province
            </h3>

            <div className="relative overflow-x-auto mt-4">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Province
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {responseLkppChart.success?.data?.blacklist_province?.map(
                    (province) => (
                      <tr
                        key={province.name}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {province.name}
                        </th>
                        <td className="px-6 py-4">{province.value}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border border-colorBorder rounded-xl p-5">
            <h3 className="text-2xl font-semibold">
              Package Distribution Based on Budget Value
            </h3>

            <div className="relative overflow-x-auto mt-4">
              <BarChartHorizontal
                data={
                  responseLkppChart?.success?.data?.ceiling_distribution.map(
                    (distribution) => {
                      return {
                        name: distribution.name ?? "",
                        value: distribution.value ?? 0,
                      };
                    }
                  ) ?? []
                }
              />
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="border border-colorBorder rounded-xl p-5 flex-1">
              <h3 className="text-2xl font-semibold">
                Blacklist Distribution By Scenario
              </h3>

              <div className="relative overflow-x-auto mt-4">
                <PieChart
                  data={
                    responseLkppChart?.success?.data?.scenario_distribution.map(
                      (distribution) => {
                        return {
                          name: distribution.name ?? "",
                          value: distribution.value ?? 0,
                        };
                      }
                    ) ?? []
                  }
                />
              </div>
            </div>
            <div className="border border-colorBorder rounded-xl p-5 flex-1">
              <h3 className="text-2xl font-semibold">
                % Percentage of Type of Violation
              </h3>

              <div className="relative overflow-x-auto mt-4">
                <PieChart
                  data={
                    responseLkppChart?.success?.data?.violation_distribution.map(
                      (distribution) => {
                        return {
                          name: distribution.name ?? "",
                          value: distribution.value ?? 0,
                        };
                      }
                    ) ?? []
                  }
                />
              </div>
            </div>
          </div>

          <div className="border border-colorBorder rounded-xl p-5 flex-1">
            <h3 className="text-2xl font-semibold">Top 10 Most Reporters</h3>

            <div className="relative overflow-x-auto mt-4">
              <Chart
                data={
                  responseLkppChart?.success?.data?.top_ten_reporter.map(
                    (distribution) => {
                      return {
                        name: distribution.name ?? "",
                        value: distribution.value ?? 0,
                      };
                    }
                  ) ?? []
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
