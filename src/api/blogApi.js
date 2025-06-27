import axios from "axios";

const API_URL =
  "https://newsapi.org/v2/everything?q=tesla&from=2024-12-24&sortBy=publishedAt&apiKey=API_KEY";

export const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};

export const fetchTags = async () => {
  try {
    const response = await axios.get(`${API_URL}/tags`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tags:", error);
    throw error;
  }
};
