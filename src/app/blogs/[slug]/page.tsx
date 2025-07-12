import { notFound } from "next/navigation";
import { blogs } from "../blogData";
import Link from "next/link";
import Image from "next/image";

interface BlogPageProps {
  params: { slug: string };
}

export default function BlogDetailsPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Back Link */}
        <div className="mb-6">
          <Link href="/blogs" className="text-red-500 underline mb-4 inline-block">
            ← Back to Blogs
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        {/* Image */}
        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-200 mb-6">
          <span>By {blog.author}</span>
          <span>
            {new Date(blog.date).toLocaleDateString("en-KE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            • {blog.readTime} min read
          </span>
          <span className="bg-red-500 px-2 py-1 rounded text-white">
            {blog.category}
          </span>
        </div>

        {/* Blog Content */}
        <article className="prose lg:prose-lg max-w-none text-gray-800 prose-p:leading-relaxed prose-img:rounded-xl">
          {blog.content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Contact or Footer Placeholder */}
        <div className="mt-8 border-t border-white pt-6 text-base text-gray-600 text-center">
          For more information, collaboration, or press inquiries,{" "}
          <Link href="/contact" className="underline text-white">
            contact our lab
          </Link>
          .
        </div>
      </div>
    </main>
  );
}
