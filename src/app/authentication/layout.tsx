export const metadata = {
  title: "Authentication & JWT",
  description:
    "เรียนรู้เกี่ยวกับวิธีการตรวจสอบความถูกต้องที่ปลอดภัยโดยใช้ JSON Web Tokens (JWT) ในเว็บแอปพลิเคชัน",

};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
