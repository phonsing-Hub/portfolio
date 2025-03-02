import { Navbar } from "@/components/navbar";
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
    <>
      <Navbar />
      <section className="py-10">{children}</section>
    </>
  );
}
