import axios from "axios";
import Link from 'next/link';

function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/posts/[id]" as={`/posts/${post.id + 1}`}>
        <a>Next post</a>
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.data;

  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.data;

  return { props: { post } };
}

export default Post;
