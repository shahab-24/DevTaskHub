import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevTaskHub - Task Management for Developers",
  description: "A modern task management app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        

        <main className="">
        {/* <nav>Home | About</nav> */}
        <Navbar></Navbar>
        <div className="container mx-auto">
        {children}
        </div>
        </main>
      </body>
    </html>
  );
}
