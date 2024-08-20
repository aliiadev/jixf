import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "@/styles/_global.scss";
import styles from '@/styles/components/_mainContainer.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dynamic from 'next/dynamic'
import { Container } from "react-bootstrap";

const DynamicHeader = dynamic(() => import('@/components/layout/Header'), {
  ssr: false,
})

const DynamicNavbar = dynamic(() => import('@/components/layout/Navbar'), {
  ssr: false,
})

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
        <DynamicHeader />
        <DynamicNavbar />
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
