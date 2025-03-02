import { AppSidebar } from "@/components/go/app-sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
export const metadata = {
  title: "Go (Golang)",
  description: "แนะนำภาษา Go สำหรับนักพัฒนา",
};

export default function FaceRecognitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative max-w-7xl mx-auto hg">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="max-w-4xl mx-auto md:px-4 ">
          <article className="prose prose-sm prose-neutral dark:prose-invert max-w-4xl">
            {children}
          </article>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
