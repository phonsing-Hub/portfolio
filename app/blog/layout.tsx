export const metadata = {
  title: {
    default: "Blog",
    template: `Blog | %s`,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container max-w-7xl mx-auto py-16">{children}</section>
  );
}
