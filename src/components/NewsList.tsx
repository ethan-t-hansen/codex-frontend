import "../App.css";

import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem.tsx";
import { newsService } from "../services/newsService.ts";

const NewsList = ({ searchQuery }: any) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        let response;

        if (searchQuery) {
          response = await newsService.searchNews(searchQuery, {
            pageSize: "20",
          });
        } else {
          response = await newsService.getTopHeadlines({
            country: "us",
            pageSize: "20",
          });
        }

        setArticles(response.articles);
        setError(null);
      } catch (err) {
        setError("Failed to fetch news. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [searchQuery]);

  const openUrl = (url: string) => {
    window.open(url)
  };

  if (loading) {
    return (
      <view className="py-8 flex justify-center">
        <text className="text-gray-600">Loading news...</text>
      </view>
    );
  }

  if (error) {
    return (
      <view className="py-8 flex justify-center">
        <text className="text-red-500">{error}</text>
      </view>
    );
  }

  return (

    <scroll-view
      scroll-orientation="vertical"
      style={{
        width: "100%",
        height: "92vh",
        overflow: "auto",
        padding: "1rem 1rem 8rem 0rem",
      }}
      scroll-bar-enable={true}
    >
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} onPress={openUrl} />
      ))}
    </scroll-view>
  );
};

export default NewsList;
