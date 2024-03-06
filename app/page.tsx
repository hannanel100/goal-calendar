import Image from "next/image";
import Board from "./components/Board";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Board />
    </main>
  );
}
