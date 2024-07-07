import type { Post as PostType } from ".contentlayer/generated";
import Post from "./Post";

type PostListProps = {
  posts: PostType[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <ul className="flex flex-col animated-list">
      {posts.length === 0 && <p>No posts found</p>}

      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </ul>
  );
}
