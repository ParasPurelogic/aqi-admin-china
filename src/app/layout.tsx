import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import { domainName } from "@/config/misc";
import { Metadata, Viewport } from "next";

// Font
const font = Nunito_Sans({ subsets: ["latin"] });

// Meta Data
export const metadata: Metadata = {
  title: {
    template: "%s | AQI 管理中国",
    default: "管理面板 | AQI 管理中国",
    absolute: "管理面板 | AQI 管理中国",
  },
  description: "管理面板 | AQI 管理中国",
  icons: `${domainName}/favicon.ico`,
};

// Viewport
export const viewport: Viewport = {
  themeColor: "#222D32",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Return JSX
  return (
    <html
      lang="en"
      className="text-[6px] sm:text-[7px] md:text-[8px] lg:text-[6px] xl:text-[7px] min-[1600px]:text-[8px]"
      suppressHydrationWarning
    >
      <body
        className={`min-h-dvh w-full ${font.className} bg-[#F2F4F9] text-[#677580] text-[1.6rem] font-medium w-full overflow-hidden`}
      >
        {/* Page Content  */}
        {children}

        {/* Popup */}
        <div className="glb-popup" id="glb-popup"></div>

        {/* Toast  */}
        <Toaster richColors position="top-right" />

        {/* Top Page Loader */}
        <NextTopLoader
          zIndex={9999999999}
          color={"#4BA9FE"}
          height={3}
          showSpinner={false}
        />
      </body>
    </html>
  );
}
