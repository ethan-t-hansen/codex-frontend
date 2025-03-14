import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  
  const handleSubmit = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };
  
  return (
    <view className="flex flex-row my-4">
      <view className="flex-1 p-2 border border-gray-300 rounded-l-lg bg-white">
        <text
          className={query ? "text-black" : "text-gray-400"}
          onInput={(e) => setQuery(e.target.value)}
        >
          {query || 'Search for news...'}
        </text>
      </view>
      <view
        className="px-4 py-2 bg-blue-600 rounded-r-lg flex items-center justify-center"
        onClick={handleSubmit}
      >
        <text className="text-white font-medium">Search</text>
      </view>
    </view>
  );
};

export default SearchBar;
