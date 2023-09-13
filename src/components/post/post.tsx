import { motion } from "framer-motion";

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: { opacity: 0 },
};

interface Props {
  idx: number;
}

const Post = (props: Props) => {
  const { idx } = props;
  return (
    <motion.div
      className="mb-5 cursor-pointer p-2 hover:backdrop-blur-md hover:brightness-150"
      custom={idx}
      animate="visible"
      variants={variants}
    >
      <h3 className="text-gray-300 text-xl font-semibold mb-2">
        How to improve Rainbow color?
      </h3>
      <p className="text-xs text-gray-700">2023.01.01</p>
      <p className="text-md text-gray-500 break-words line-clamp-2">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
    </motion.div>
  );
};

export default Post;
