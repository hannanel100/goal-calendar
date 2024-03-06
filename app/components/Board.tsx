import Month from "./Month";

export default function Board() {
  return (
    <div className="flex gap-4">
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-bold">
            {new Date(2023, i)
              .toLocaleString("default", { month: "short" })
              .toLowerCase()}
          </h2>
          <Month value={i} />
        </div>
      ))}
    </div>
  );
}
