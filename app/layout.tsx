import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ReconSwift - Automated Reconnaissance Framework",
  description:
    "ReconSwift is an automated reconnaissance framework meant for information gathering during penetration testing of web applications. It is written in Python3 and uses python3-requests under the hood to perform the scans. The tool is meant to be used only by penetration testers or security researchers for security auditing and penetration testing purposes. Any kind of illegal use of this tool is strictly prohibited.",
  applicationName: "ReconSwift",
  keywords: [
    "reconnaissance",
    "recon",
    "reconnaissance framework",
    "automated reconnaissance",
    "automated reconnaissance framework",
    "reconnaissance tool",
    "recon tool",
    "reconnaissance python",
    "recon python",
    "reconnaissance python3",
    "recon python3",
    "hack",
    "hacking",
    "hacker",
    "penetration testing",
    "penetration tester",
    "security",
    "security testing",
    "security tester",
    "security researcher",
    "security research",
    "security audit",
    "Bug Bounty",
    "Bug Bounty Hunting",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <body className={poppins.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster richColors />
              {children}
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
