import Landing from "@/components/landing/Landing";
import { PrismLayout } from "@/layout";
import { Inter } from "next/font/google";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Landing />;
}

Home.getLayout = (page: ReactElement) => {
  return <PrismLayout>{page}</PrismLayout>;
};
