"use server";

import React, { useState } from "react";
import Image from "next/image";
import { getCharts } from "@/services/cases";
import Chart from "./chart";

export default async function VisualizationPage(): Promise<React.ReactElement> {
  const response = await getCharts();

  if (response.error != null) {
    throw new Error(response.error);
  }

  return (
    <main className="py-8 flex flex-col justify-center items-center">
      <div className="py-16">
        <Image
          src="/images/img_background_small.png"
          alt="Background Hero"
          className="absolute w-full top-0 left-0 right-0 -z-10 mt-2 hidden sm:block"
          width={1000}
          height={500}
        />
        <div className="flex flex-col items-center bg-white z-10">
          <h1 className="text-[40px] font-semibold">Cases Insights</h1>
          <h5 className="text-[16px] font-normal text-gray-500">
            Interactive Data Visualizations of Case Trends and Insights
          </h5>
        </div>
      </div>
      <div className="flex flex-col w-full px-32 py-16 gap-24">
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
    </main>
  );
}
