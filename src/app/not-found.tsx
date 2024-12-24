import Link from "next/link";

export const metadata = {
  title: "404 Not Found",
  description: "Could not find requested resource.",
};

export default function NotFound() {
  return (
    <main className="h-screen max-w-4xl mx-auto flex justify-center items-center">
      <section className="flex justify-center items-center gap-2">
        <h1 className="text-6xl">404</h1>
        <div className="border-l-2 pl-4">
            <h2 className="text-xl">Not Found</h2>
            <p className="text-md text-default-500">Could not find requested resource</p>
            <Link href="/" className="text-md text-blue-600">Return Home</Link>
        </div>
      </section>
    </main>
  );
}

