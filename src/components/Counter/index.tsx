import React from "react";

interface Props {
  title: string;
  number: number;
}

export default function Counter({ title, number }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="bg-black opacity-100 text-white p-6 rounded-xl font-bold text-6xl min-w-[80px text-center">
        {number}
      </p>
      <h3 className="font-bold">{title}</h3>
    </div>
  );
}
