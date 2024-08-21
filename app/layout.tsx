import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "@/styles/_global.scss";
import styles from '@/styles/components/_mainContainer.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dynamic from 'next/dynamic'
import { Container } from "react-bootstrap";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";

const DynamicFooter = dynamic(() => import('@/components/layout/Footer'), {
  ssr: true,
})

const inter = Roboto_Serif({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        <div className={styles.wrapperMain}>
          <Container className={styles.containerStyle}>
            {children}
          </Container>
        </div>
        <DynamicFooter />
      </body>
    </html>
  );
}
