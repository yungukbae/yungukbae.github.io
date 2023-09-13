import Post from "@/components/post/post";
import { PrismLayout } from "@/layout";
import { cn } from "@/util/cn";
import { ReactElement } from "react";

const Posts = () => {
  const list = Array.from({ length: 50 }, () =>
    Math.floor(Math.random() * 100)
  );

  return (
    <div
      className={cn([
        "py-20 overflow-y-scroll h-screen no-scrollbar w-[340px] mx-auto lg:w-[420px] lg:mx-10",
      ])}
    >
      {list.map((v, i) => {
        return <Post key={i} idx={i} />;
      })}
    </div>
  );
};

Posts.getLayout = (page: ReactElement) => {
  return <PrismLayout>{page}</PrismLayout>;
};

export default Posts;
