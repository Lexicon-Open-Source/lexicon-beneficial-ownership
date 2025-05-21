import React from "react";
import Image from "next/image";
import ClientSegmentedChart from "./client-segmented-chart";

export default function VisualizationPage(): React.ReactElement {
  return (
    <main className="py-8 flex flex-col justify-center items-center pt-20">
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
      <ClientSegmentedChart />
    </main>
  );
}
