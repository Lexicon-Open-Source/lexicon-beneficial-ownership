"use client";

import dynamic from "next/dynamic";
import "chart.js/auto";
import React, { useState } from "react";
import { ChartResponse, GetChartsResponse } from "@/types/cases";
import { Pie } from "react-chartjs-2";

const Bar = dynamic(
  async () => await import("react-chartjs-2").then((mod) => mod.Bar),
  {
    ssr: false,
  }
);

interface Props {
  data: ChartResponse[];
}

export default function Chart(props: Props): React.ReactElement {
  const chartOptions = {
    plugins: {
      legend: { display: false },
    },
  };

  const [data] = useState({
    labels: props.data.map((chart) => chart.name ?? ""),
    datasets: [
      {
        label: "Cases",
        data: props.data.map((chart) => chart.value ?? 0),
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgb(40, 100, 90, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgb(40, 100, 90, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgb(40, 100, 90, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgb(40, 100, 90, 0.2)",
        ],
        borderColor: [
          "rgb(255, 159, 64)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
        ],
        borderWidth: 1,
      },
    ],
  });

  return <Bar className="mt-10" data={data} options={chartOptions} />;
}

export function BarChartHorizontal(props: Props): React.ReactElement {
  const chartOptions = {
    plugins: {
      legend: { display: false },
    },
  };

  const [data] = useState({
    labels: props.data.map((chart) => chart.name ?? ""),
    datasets: [
      {
        label: "Cases",
        data: props.data.map((chart) => chart.value ?? 0),
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgb(40, 100, 90, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgb(40, 100, 90, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgb(40, 100, 90, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgb(40, 100, 90, 0.2)",
        ],
        borderColor: [
          "rgb(255, 159, 64)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <Bar
      className="mt-10"
      data={data}
      height={"100px"}
      options={{
        plugins: {
          legend: { display: false },
        },
        indexAxis: "y",
      }}
    />
  );
}

export function PieChart(props: Props): React.ReactElement {
  const chartOptions = {
    plugins: {
      legend: { display: false },
    },
  };

  const [data] = useState({
    labels: props.data.map((chart) => chart.name ?? ""),
    datasets: [
      {
        label: "Cases",
        data: props.data.map((chart) => chart.value ?? 0),
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgb(40, 100, 90, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgb(40, 100, 90, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgb(40, 100, 90, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgb(40, 100, 90, 0.2)",
        ],
        borderColor: [
          "rgb(255, 159, 64)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(40, 100, 90)",
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <Pie
      className="mt-10"
      data={data}
      options={{
        plugins: {
          legend: { display: true, position: "bottom" },
        },
        indexAxis: "y",
      }}
    />
  );
}
