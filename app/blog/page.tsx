import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "hinkel.dev - Blog",
  description: "Page description",
};

export default function Blog() {
  return (
    <div className="w-full">
      <h1 className="text-4xl pb-4">Blog</h1>
      <p>Nothing to see here. Yet...</p>
    </div>
  );
}
