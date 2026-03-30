import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "د. أيمن نور | سياسي ومحامي وكاتب مصري",
  description:
    "الموقع الرسمي للدكتور أيمن نور - محامي وسياسي وصحفي مصري، رئيس حزب غد الثورة والرئيس المنتخب لاتحاد القوى الوطنية المصرية",
  keywords: [
    "أيمن نور",
    "Ayman Nour",
    "حزب غد الثورة",
    "اتحاد القوى الوطنية",
    "سياسي مصري",
    "معارضة مصرية",
  ],
  openGraph: {
    title: "د. أيمن نور | سياسي ومحامي وكاتب مصري",
    description:
      "الموقع الرسمي للدكتور أيمن نور - محامي وسياسي وصحفي مصري",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-text-main antialiased">
        {children}
      </body>
    </html>
  );
}
