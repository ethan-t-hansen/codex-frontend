import React, { useState } from "react";
import type { NewsItemProps } from "../types/types.ts";

const NewsItem = ({ article, onPress }: NewsItemProps) => {
  const { title, description, url, urlToImage, source, publishedAt } = article;

  function formatTitle(input: string): string {
    return input.split(" - ")[0];
  }

  return (
    <view
      style={{
        width: "100%",
        height: "fit-content",
        marginBottom: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "1rem",
      }}
      bindtap={() => onPress(url)}
    >
      {urlToImage && (
        <image
          src={urlToImage}
          mode="aspectFill"
          style={{
            width: "100px",
            height: "80px"
          }}
        />
      )}
      <view style={{ flex: 1, height: "fit-content"}}>
        <text className="h2">{formatTitle(title)}</text>
        <text className="h3">
          {source.name} • {new Date(publishedAt).toLocaleDateString()}
        </text>
      </view>
    </view>
  );
};

export default NewsItem;
