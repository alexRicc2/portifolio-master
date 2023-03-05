import React from "react";

import { ChartType } from "@/types/chart";

type Props = { item: ChartType };

function Chart({ item }: Props) {
  return (
    <div className="flex items-center justify-between" aria-label="see projects">
      <h2 className="text-text text-lg">{item.title}</h2>

      <div className="p-1 w-[50%] md:w-[13rem] h-[.8rem] md:h-4 max-w-[11rem] flex items-center bg-border rounded-xl">
        <div className="h-2 md:h-[.6rem] rounded-xl bg-brand" style={{ width: `${item.value}%` }} />
      </div>
    </div>
  );
}

export default Chart;
