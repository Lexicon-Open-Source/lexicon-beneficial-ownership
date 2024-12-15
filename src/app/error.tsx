"use client";

import React from "react";
import type Error from "next/error";
import Link from "next/link";

// TODO: Update implementation
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): React.ReactElement {
  return (
    <main className="py-24 text-center mt-20">
      <h1>{error.digest ?? ""}</h1>
      <Link href={"/"}>Go back to home</Link>
    </main>
  );
}
