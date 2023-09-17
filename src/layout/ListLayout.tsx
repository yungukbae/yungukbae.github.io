import Post from "@/components/post/post";
import { cn } from "@/util/cn";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const Layout = (props: Props) => {
  const { children } = props;
  const list = Array.from({ length: 50 }, () =>
    Math.floor(Math.random() * 100)
  );

  return (
    <div className="flex flex-row">
      <div
        className={cn([
          "py-20 overflow-y-scroll h-screen no-scrollbar w-[340px] mx-auto lg:w-[420px] lg:mx-10",
        ])}
      >
        {list.map((v, i) => {
          return <Post key={i} idx={i} />;
        })}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
