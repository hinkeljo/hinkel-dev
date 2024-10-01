import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "hinkel.dev - Home",
  description: "Page description",
};

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-4xl pb-4">About me</h1>
      <p>Nothing to see here. Yet...</p>
    </div>
  );
}
