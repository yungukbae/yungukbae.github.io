import { cn } from "@/util/cn";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Landing = () => {
  const router = useRouter();
  const handleLink = (url: string) => {
    window.open(url);
  };

  return (
    <main
      className={cn([
        "flex flex-col items-center justify-center w-screen h-screen",
      ])}
    >
      <div className="flex flex-col justify-between h-[300px] w-[300px]">
        <div className="flex flex-row w-50 justify-around animate-fadeInoDown">
          <div
            className="cursor-pointer text-md hover:underline"
            onClick={() => handleLink("https://github.com/yungukbae")}
          >
            Github
          </div>
          <div
            className="cursor-pointer text-md hover:underline"
            onClick={() =>
              handleLink(
                "https://www.linkedin.com/in/%EC%9C%A4%EA%B5%AD-%EB%B0%B0-133855175/"
              )
            }
          >
            LinkedIn
          </div>
        </div>
        <div className={cn(["rainbow"])}>
          <button
            className="text-md h-[36px] w-full bg-black text-gray-500 rounded-[5px]"
            onClick={() => router.push("/posts")}
          >
            EXPLORE POST
          </button>
        </div>
      </div>
    </main>
  );
};

export default Landing;
