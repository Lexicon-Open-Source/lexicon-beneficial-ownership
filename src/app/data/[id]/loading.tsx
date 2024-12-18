import { CircularProgress } from "@nextui-org/react";
import React from "react";

export default function Loading(): React.ReactElement {
  return (
    <div className="w-full flex flex-col items-center justify-center pb-14 pt-20 mt-20">
      <CircularProgress color="primary" />
    </div>
  );
}
