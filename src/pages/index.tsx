import Landing from "@/components/landing/Landing";
import { PrismLayout } from "@/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <PrismLayout>
      <Landing/>
    </PrismLayout>
  );
}
