import { FaExclamationTriangle } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex gap-x-3 m-auto text-purple-500">
        <FaExclamationTriangle className="text-4xl" />
        <h1 className="text-4xl font-bold">MakRice Under Progress</h1>
      </div>
    </main>
  );
}
