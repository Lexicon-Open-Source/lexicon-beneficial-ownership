"use client";

import React, { useState } from "react";
import PersonList from "@/components/PersonList";
import FilterSubjectType from "@/components/FilterSubjectType";
import FilterType from "@/components/FilterType";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button, Divider } from "@nextui-org/react";
import SearchIcon from "@/components/icons/SearchIcon";
import OptionalRendering from "@/components/ui/OptionalRendering";
import FilterNation from "@/components/FilterNation";
import FilterYear from "@/components/FilterYear";
import { formatNumber } from "@/utils/helper";
import Image from "next/image";

export default function DataPage(): React.ReactElement {
  const params = useSearchParams();
  const path = usePathname();
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [nations, setNations] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [total, setTotal] = useState(0);

  const handleSearchClicked = (): void => {
    const newParams = new URLSearchParams(params);
    newParams.delete("query");
    newParams.delete("subjects");
    newParams.delete("types");
    newParams.delete("nation");
    newParams.delete("query");
    newParams.delete("from");
    newParams.delete("to");

    if (query.length > 0) {
      newParams.set("query", query);
    }

    if (from.length > 0) {
      newParams.set("from", from);
    }

    if (to.length > 0) {
      newParams.set("to", to);
    }

    Array.from((subjects ?? []).values()).forEach((subject) => {
      newParams.append("subjects", subject);
    });

    Array.from((types ?? []).values()).forEach((subject) => {
      newParams.append("types", subject);
    });

    Array.from((nations ?? []).values()).forEach((subject) => {
      newParams.append("nations", subject);
    });

    router.replace(`${path}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <main className="flex flex-col pt-20">
      <div className="py-16">
        <Image
          src="/images/img_background_small.png"
          alt="Background Hero"
          width={1926}
          height={1020}
          className="absolute top-0 -z-10 mt-2 hidden sm:block"
        />
        <div className="w-auto mx-4 sm:mx-[150px] py-4 px-5 bg-white border border-colorBorder rounded-xl flex flex-row gap-6 z-10 items-center">
          <div className="w-full flex flex-col gap-3">
            <input
              className="outline-none w-full font-normal text-sm placeholder-textGray40"
              onInput={(input) => {
                setQuery(input.currentTarget.value);
              }}
              value={query}
              placeholder="Enter individual or company name..."
            />
            <Divider className="border border-colorBorder" />
            <div className="flex flex-col sm:flex-row gap-6">
              <FilterSubjectType
                onSelectedSubjects={(subjects: string[]) => {
                  setSubjects(subjects);
                }}
              />
              <FilterType
                onSelectedTypes={(types: string[]) => {
                  setTypes(types);
                }}
              />
              <FilterNation
                onSelectedNations={(nations) => {
                  setNations(nations);
                }}
              />
              <FilterYear
                setSelectedYear={(from: string, to: string) => {
                  setFrom(from);
                  setTo(to);
                }}
              />
              <Button
                onClick={handleSearchClicked}
                className="block sm:hidden bg-colorPrimary text-md font-semibold text-white"
              >
                Search
              </Button>
            </div>
          </div>
          <Button
            onClick={handleSearchClicked}
            isIconOnly
            radius="full"
            className="hidden sm:flex bg-colorPrimaryBackground"
          >
            <SearchIcon />
          </Button>
        </div>
      </div>
      <div className="flex flex-col py-12 items-center px-4 sm:px-[120px] bg-white gap-8">
        <OptionalRendering condition={total > 0}>
          <h3 className="px-0 sm:px-[177px] text-2xl text-center font-semibold">
            {formatNumber(total)} entities in all subject types, all record
            types, all nationalities, and every year.
          </h3>
        </OptionalRendering>
        <PersonList setTotal={setTotal} />
      </div>
    </main>
  );
}
