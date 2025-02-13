export const metadata = {
  title: "Authentication & Jwt",
};

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert max-w-3xl mx-auto container">
      {children}
    </article>
  );
}
