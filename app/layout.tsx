import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/_global.scss";
import styles from '@/styles/components/_mainContainer.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dynamic from 'next/dynamic'
import { Container } from "react-bootstrap";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "next-themes";

const DynamicFooter = dynamic(() => import('@/components/layout/Footer'), {
  ssr: true,
})

const inter = Montserrat({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <Navbar />
          <div className={styles.wrapperMain}>
            <Container className={styles.containerStyle}>
              {children}
            </Container>
          </div>
          <DynamicFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
