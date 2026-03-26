import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Kiloole Ethiopian Restaurant Dubai | Authentic Dining & Coffee Ceremony',
  description: 'Experience luxurious Ethiopian cuisine in Dubai. Kiloole offers traditional dishes, warm hospitality, and unique coffee rituals. Reserve your table today!',
  keywords: ["Ethiopian restaurant Dubai, Kiloole, Ethiopian food, coffee ceremony, Dubai dining, authentic Ethiopian cuisine, injera, tibs, lentil dishes, traditional food"],
  openGraph: {
    "title": "Kiloole Ethiopian Restaurant Dubai",
    "description": "Authentic Ethiopian dining in Dubai, offering traditional cuisine and coffee ceremonies.",
    "url": "https://kiloole.com",
    "siteName": "Kiloole Restaurant",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/flat-lay-meal-with-rice-pita_23-2148747622.jpg",
        "alt": "Luxurious Ethiopian restaurant interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Kiloole Ethiopian Restaurant Dubai",
    "description": "Authentic Ethiopian dining in Dubai, offering traditional cuisine and coffee ceremonies.",
    "images": [
      "http://img.b2bpic.net/free-photo/flat-lay-meal-with-rice-pita_23-2148747622.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
