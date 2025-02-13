export const metadata = {
  title: "What Is Docker ?",
  description:
    "With cutting-edge container technology, you can build and run your apps with freedom.",
};

export default function DockerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert max-w-3xl mx-auto">
      {children}
    </article>
  );
}
