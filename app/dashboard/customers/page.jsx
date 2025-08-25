import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-600">
      <h2 className="text-2xl font-bold">🚀 Coming Soon!</h2>
      <p className="mt-2 text-sm">
        This page is not ready yet. Check out your{" "}
        <Link href="/dashboard" className="text-blue-500 underline">
          dashboard
        </Link>{" "}
        instead.
      </p>
    </div>
  );
}
