import Day from "./Day";

export default function Month({
  value,
}: Readonly<{
  value: number;
}>) {
  const daysInMonth = new Date(value, value + 1, 0).getDate();
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: daysInMonth }).map((_, i) => (
        <Day key={i + 1} value={i + 1} />
      ))}
    </div>
  );
}
