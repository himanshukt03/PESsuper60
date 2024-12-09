import DownloadButton from "@/components/DownloadButton";
import CheckFields from "@/components/CheckFields";
import FetchData from "@/components/FetchData";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Test Portal</h1>
      <div className="space-y-4">
        <DownloadButton />
        <CheckFields />
        <FetchData  />
      </div>
    </div>
  );
}
