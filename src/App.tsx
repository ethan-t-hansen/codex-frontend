import "./App.css";

import React, { useState } from "react";
import NewsList from "./components/NewsList.tsx";
import SearchBar from "./components/SearchBar.tsx";
import NavBar from "./components/NavBar.tsx";

export function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <view>
      <NavBar />
      <view style={{ height: "1px", borderBottom: "1px solid #e2e8f0" }} />
      <view className="container">
        <NewsList searchQuery={searchQuery} />
      </view>
    </view>
  );
}
