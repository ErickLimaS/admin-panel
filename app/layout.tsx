import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import { getServerSession } from "next-auth"
import StoreProvider from "./StoreProvider";
import SessionProvider from "./components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Login and keep track of your website.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>

        <SessionProvider session={session}>
          <StoreProvider>
            <Layout>

              {children}

            </Layout>
          </StoreProvider>
        </SessionProvider>

      </body>
    </html>
  );
}
