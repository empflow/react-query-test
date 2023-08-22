interface PostContext {
  params: { postId: string };
}

export default function Post({ params: { postId } }: PostContext) {
  return <h1>{postId}</h1>;
}
