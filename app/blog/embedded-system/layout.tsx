export const metadata = {
  title: "Embedded System",
  description: "ระบบฝังตัว (Embedded System)",
};

export default function DockerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert max-w-3xl">
      {children}
    </article>
  );
}
