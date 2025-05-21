import React from "react";

export default function Loading(): React.ReactElement {
  return (
    <div className="w-full flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <div className="h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="h-64 bg-gray-200 rounded animate-pulse"></div>
        <div className="mt-4 flex gap-2 justify-center">
          <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
