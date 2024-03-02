import Image from "next/image";
import styles from "./page.module.css";
import getPostMetadata from "@/utils/getPostMetadata";
import PostCard from "@/components/PostCard";

export default function Home() {
  const PostMetadata = getPostMetadata("humbugs_md");
  // console.log(PostMetadata);

  return (
    <main>
      <div className="postsContainer">
        {PostMetadata.map((post, postIndex) => {
          return <PostCard key={postIndex} post={post} />;
        })}
      </div>
    </main>
  );
}
