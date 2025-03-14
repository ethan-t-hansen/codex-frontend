const API_BASE_URL = 'http://localhost:8080/api';

export const newsService = {
  async getTopHeadlines(params = {}) {
    // Build query string from params
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value) queryParams.append(key, value);
    });
    
    try {
      const response = await fetch(`${API_BASE_URL}/news/top-headlines?${queryParams}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching top headlines:', error);
      throw error;
    }
  },
  
  async searchNews(query, params = {}) {
    // Build query string from params
    const queryParams = new URLSearchParams({
      q: query,
      ...params
    });
    
    try {
      const response = await fetch(`${API_BASE_URL}/news/search?${queryParams}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error searching news:', error);
      throw error;
    }
  }
};
