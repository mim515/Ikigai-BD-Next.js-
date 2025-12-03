"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// --- Arrow Right Icon ---
const ArrowRight = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

// --- Latest Article Card ---
const LatestArticleCard = ({ article }) => (
  <article className="rounded-xl shadow-lg overflow-hidden bg-white-50 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
    <div className="relative pt-[66.666%] overflow-hidden">
      <Image
        src={article.imageUrl}
        alt={article.imageAlt}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <p className="text-xs font-semibold uppercase text-color-white bg-dark-purple rounded-full max-w-[200px] text-center px-3 py-2 tracking-wider mb-2">
        {article.category}
      </p>
      <h3 className="text-xl font-bold color-blue-h1 mb-3 leading-tight">
        {article.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        By {article.author} | {article.date}
      </p>
      <p className="text-gray-600 mb-4 text-sm flex-grow">{article.description}</p>
      <a
        href="#"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200 mt-auto"
      >
        {article.linkText}
        <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  </article>
);

// --- Featured Article Card ---
const FeaturedArticleCard = ({ article }) => (
  <article className="bg-white-50 rounded-2xl shadow-xl overflow-hidden mb-16">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden order-2 lg:order-1">
        <Image
          src={article.imageUrl}
          alt={article.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-1 lg:order-2">
        <p className="text-sm font-semibold uppercase bg-dark-purple max-w-[200px] rounded-full py-2 px-3 text-center text-color-white tracking-widest mb-3">
          {article.category}
        </p>
        <h2 className="text-xl md:text-3xl font-extrabold color-blue-h1 mb-6 leading-tight">
          {article.title}
        </h2>
        <p className="md:text-lg text-sm color-gray-dark mb-8">{article.description}</p>
        <a
          href="#"
          className="inline-flex items-center self-start px-6 py-3 text-base font-semibold text-white cta-button rounded-full"
        >
          {article.linkText}
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  </article>
);

// --- Main Page Component ---
const ArticlesPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/data/articles.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error("Fetching error:", err);
        setError("Failed to load articles. Please check the data path.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">Loading Articles...</div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>
    );
  if (!data?.featuredArticle || !data?.latestArticles)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Article data is invalid.
      </div>
    );

  return (
    <div className="bg-white-50 section-padding">
      <div className="section-container">
        <div className="section-heading">
          <h2 className="">
            <span>Our Knowledge Hub</span>
          </h2>
          <p className="">
            Insights on child development, modern parenting, and our unique curriculum.
          </p>
        </div>
      <h2 className="text-xl md:text-3xl font-bold color-dark-pink  ">Featured Articles</h2>
        <FeaturedArticleCard article={data.featuredArticle} />

        <h2 className="text-xl md:text-3xl font-bold color-blue-h1  mt-8">Latest Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-6">
          {data.latestArticles.map((article, index) => (
            <LatestArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
