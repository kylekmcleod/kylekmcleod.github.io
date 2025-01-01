"use client";

import React from "react";
import { Button, Card, cn } from "@nextui-org/react";

// Using basic generic icons
const data = [
  {
    title: "Projects Completed",
    value: "250+",
    icon: "📊",
  },
  {
    title: "On-time Delivery Rate",
    value: "100%",
    icon: "⏱️",
  },
  {
    title: "Clients Served Across",
    value: "19 Countries",
    icon: "🌍",
  },
];

export default function MediaStats() {
  return (
    <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {data.map(({ title, value, icon }, index) => (
        <Card key={index} className="border border-transparent dark:border-default-100 w-full">
          <div className="flex p-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-md">
              <span className="text-xl">{icon}</span>
            </div>

            <div className="flex flex-col gap-y-2">
              <dt className="mx-4 text-small font-medium text-default-500">{title}</dt>
              <dd className="px-4 text-2xl font-semibold text-default-700">{value}</dd>
            </div>
          </div>
        </Card>
      ))}
    </dl>
  );
}
