import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}>
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
              <p className="font-mono text-sm text-neutral-500 tracking-tighter">{post.length}</p>
            </div>
          </Link>
        ))}
      <div className="text-lg opacity-50">Coming Soon</div>
    </section>
  );
}
