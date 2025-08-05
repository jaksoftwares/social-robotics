import { notFound } from "next/navigation";
import { blogs } from "../blogData";
import Link from "next/link";
import Image from "next/image";




export function generateStaticParams() {
  return blogs.map(blog => ({ slug: blog.slug }));
}

export default function BlogDetailsPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();


  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/blogs" 
            className="inline-flex items-center text-custom-lintingGreenDark hover:text-custom-lintingGreenDark/80 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to all articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center mb-4">
            <span className="text-sm font-medium px-3 py-1 bg-custom-lintingGreenDark/10 text-custom-lintingGreenDark rounded-full">
              {blog.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-raleway font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <span>By {blog.author}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                {new Date(blog.date).toLocaleDateString("en-KE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{blog.readTime} min read</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-80 md:h-96 mb-10 rounded-xl overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none text-gray-700">
          {blog.content.map((paragraph, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <p className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            </div>
          ))}
        </article>

        {/* Related Content or Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-raleway font-bold text-gray-900 mb-6">
            Continue Reading
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogs
              .filter(b => b.slug !== blog.slug)
              .slice(0, 2)
              .map(relatedBlog => (
                <Link 
                  key={relatedBlog.slug} 
                  href={`/blogs/${relatedBlog.slug}`}
                  className="group"
                >
                  <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-custom-lintingGreenDark transition-colors mb-2">
                      {relatedBlog.title}
                    </h4>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {relatedBlog.summary}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-custom-lintingGreenDark/5 rounded-xl p-8 text-center">
          <h3 className="text-xl font-raleway font-bold text-gray-900 mb-4">
            Interested in learning more?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            For research collaborations, media inquiries, or questions about our work, reach out to our team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-custom-lintingGreenDark text-white rounded-lg hover:bg-custom-lintingGreenDark/90 transition-colors font-medium"
          >
            Contact Us
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
