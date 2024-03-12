import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/StarsCanvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santhosh R Devspace - Portfolio of a Software Developer",
  description:
    "Explore Santhosh R Devspace, showcasing projects, skills, and experiences in software development. Connect with Santhosh R, a passionate software engineer.",
  keywords: [
    "Santhosh R",
    "portfolio",
    "software developer",
    "projects",
    "skills",
    "experience",
    "Next.js",
    "React",
    "JavaScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
