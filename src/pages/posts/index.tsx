import { ListLayout, PrismLayout } from "@/layout";
import { ReactElement } from "react";

const Posts = () => {
  return <></>;
};

Posts.getLayout = (page: ReactElement) => {
  return (
    <PrismLayout>
      <ListLayout>{page}</ListLayout>
    </PrismLayout>
  );
};

export default Posts;
