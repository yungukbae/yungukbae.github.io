import Heading from "@/components/Heading";
import { ListLayout, PrismLayout } from "@/layout";
import { GetStaticPropsContext } from "next";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ReactElement } from "react";

interface Props {
  source: MDXRemoteProps;
}

const components = { Heading };

const Post = ({ source }: Props) => {
  return (
    <div className="w-[calc(100vw-500px)] h-screen py-10">
      <div className="h-full backdrop-blur-md">
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  );
};

Post.getLayout = (page: ReactElement) => {
  return (
    <PrismLayout>
      <ListLayout>{page}</ListLayout>
    </PrismLayout>
  );
};

export default Post;

export async function getStaticPaths() {
  const list = Array.from({ length: 50 }, () =>
    Math.floor(Math.random() * 100)
  );

  const paths = list.map((v, i) => ({
    params: {
      id: `${i}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { locales } = context;
  // console.log(MD.name);

  const source = "Some **mdx** text, with a component <Heading />";
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
