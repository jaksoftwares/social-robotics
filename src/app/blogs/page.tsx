"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "./blogData";
import Banner from "@/components/Banner";

const getAllCategories = () => {
  const all = blogs.map((b) => b.category);
  return ["All", ...Array.from(new Set(all))];
};

export default function BlogsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBlogs = blogs.filter((blog) => {
    const matchCategory = category === "All" || blog.category === category;
    const matchSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.summary.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <Banner title="Blogs" />
      <section className="min-h-screen bg-white py-12 px-4 flex flex-col items-center">
        <div className="max-w-7xl w-full">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-customCyanBlue mb-3">
              Lab Insights & Research Blogs
            </h1>
            <p className="text-lg text-gray-700">
              Explore insights in AI, social robotics, and healthcare innovation.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full md:w-1/2 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-customCyanBlue"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex flex-wrap gap-2">
              {getAllCategories().map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 text-sm rounded-full border transition ${
                    category === cat
                      ? "bg-customCyanBlue text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.slug}
                className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-customCyanBlue mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {blog.summary}
                  </p>
                  <div className="text-xs text-gray-500 mb-4">
                    By {blog.author} ·{" "}
                    {new Date(blog.date).toLocaleDateString("en-KE", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    · {blog.readTime} min read
                  </div>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="mt-auto inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded text-center"
                  >
                    Read Full Blog
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="text-center mt-12 text-gray-500">
              No blogs found for your search or selected category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
