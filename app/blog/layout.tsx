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
    <section className="py-16">
       
      {children}</section>
  );
}
