"use client";

const lcr = [
  {
    L: "L",
    C: "C",
    R: "R",
    ML: "ML",
    MR: "MR",
  },
  {
    L: "0",
    C: "0",
    R: "0",
    ML: "0",
    MR: "1",
  },
  {
    L: "0",
    C: "0",
    R: "1",
    ML: "1",
    MR: "0",
  },
  {
    L: "0",
    C: "1",
    R: "0",
    ML: "1",
    MR: "1",
  },
  {
    L: "0",
    C: "1",
    R: "1",
    ML: "1",
    MR: "1",
  },
  {
    L: "1",
    C: "0",
    R: "0",
    ML: "0",
    MR: "1",
  },
  {
    L: "1",
    C: "0",
    R: "1",
    ML: "1",
    MR: "1",
  },
  {
    L: "1",
    C: "1",
    R: "0",
    ML: "1",
    MR: "1",
  },
  {
    L: "1",
    C: "1",
    R: "1",
    ML: "1",
    MR: "1",
  },
];

export function LCRKmap() {
  return (
    <>
      {lcr.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-5 text-center max-w-lg mx-auto ${
            index === 0 ? "rounded-t-lg bg-zinc-300 dark:bg-zinc-800" : ""
          } ${
            index === lcr.length - 1
              ? "rounded-b-lg border-b border-gray-200 dark:border-gray-800"
              : ""
          }`}
        >
          <div
            className={`border-l border-t border-gray-200 dark:border-gray-800 ${
              index === 0 ? "rounded-tl-lg" : ""
            } ${index === lcr.length - 1 ? "rounded-bl-lg" : ""}`}
          >
            {item.L}
          </div>
          <div className="border-l border-t border-gray-200 dark:border-gray-800">
            {item.C}
          </div>
          <div className="border-l border-t border-gray-200 dark:border-gray-800">
            {item.R}
          </div>
          <div className="border-l border-t border-gray-200 dark:border-gray-800">
            {item.ML}
          </div>
          <div
            className={`border-x border-t border-gray-200 dark:border-gray-800 ${
              index === 0 ? "rounded-tr-lg" : ""
            } ${index === lcr.length - 1 ? "rounded-br-lg" : ""}`}
          >
            {item.MR}
          </div>
        </div>
      ))}
    </>
  );
}

export function KmapML() {
  return (
    <div className="grid grid-cols-4 text-center max-w-lg mx-auto">
      <div className="bg-zinc-300 dark:bg-zinc-800 rounded-tl-md border-t border-l border-gray-200 dark:border-gray-800">
        00
      </div>
      <div className="bg-zinc-300 dark:bg-zinc-800 border-t border-l border-gray-200 dark:border-gray-800">
        01
      </div>
      <div className="bg-zinc-300 dark:bg-zinc-800 border-t border-l border-gray-200 dark:border-gray-800">
        11
      </div>
      <div className="bg-zinc-300 dark:bg-zinc-800 rounded-tr-md border-t border-x border-gray-200 dark:border-gray-800">
        10
      </div>
      <div className="border-t border-l border-gray-200 dark:border-gray-800 text-rose-500">
        0
      </div>
      <div className="border-t border-l border-gray-200 dark:border-gray-800">
        1
      </div>
      <div className="border-t border-l border-gray-200 dark:border-gray-800">
        1
      </div>
      <div className="border-t border-x border-gray-200 dark:border-gray-800">
        1
      </div>
      <div className="border-y border-l rounded-bl-md border-gray-200 dark:border-gray-800 text-rose-500">
        0
      </div>
      <div className="border-y border-l border-gray-200 dark:border-gray-800">
        1
      </div>
      <div className="border-y border-l border-gray-200 dark:border-gray-800">
        1
      </div>
      <div className="border-y border-x rounded-br-md border-gray-200 dark:border-gray-800">
        1
      </div>
    </div>
  );
}

export function KmapMR() {
  return (
    <div className="grid grid-cols-4 text-center max-w-lg mx-auto">
      <div className="bg-zinc-300 dark:bg-zinc-800 rounded-tl-md border-t border-l border-gray-200 dark:border-gray-800">
        00
      </div>
      <div className="bg-zinc-300 dark:bg-zinc-800 border-t border-l border-gray-200 dark:border-gray-800">
        01
      </div>
      <div className="bg-zinc-300 dark:bg-zinc-800 border-t border-l border-gray-200 dark:border-gray-800">
        11
      </div>
      <div className="bg-zinc-300 dark:bg-zinc-800 rounded-tr-md border-t border-x border-gray-200 dark:border-gray-800">
        10
      </div>
      <div className="border-t border-l border-gray-200 dark:border-gray-800">
        1
      </div>
      <div className="border-t border-l border-gray-200 dark:border-gray-800 text-rose-500">
        0
      </div>
      <div className="border-t border-l border-gray-200 dark:border-gray-800">
        1
      </div>
      <div className="border-t border-x border-gray-200 dark:border-gray-800">
        1
      </div>
      <div className="border-y border-l rounded-bl-md border-gray-200 dark:border-gray-800">
        1
      </div>
      <div className="border-y border-l border-gray-200 dark:border-gray-800">
        1
      </div>
      <div className="border-y border-l border-gray-200 dark:border-gray-800">
        1
      </div>
      <div className="border-y border-x rounded-br-md border-gray-200 dark:border-gray-800">
        1
      </div>
    </div>
  );
}
