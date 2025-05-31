import { Inter } from "next/font/google";
import "./global.css";
import SupportChatbot from "./test/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ether-Wheels",
  description: "Carpooling payments made easy by integrating with blockchain",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/pingsphere-logo.png',
        href: '/images/pingsphere-logo.png',
      },

    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SupportChatbot />
      </body>
    </html>
  );
}
