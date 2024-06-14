import { useEffect, useState } from "react";
import axios from "axios";
import { BlogCardStyled } from "./BlogCardStyled";

export const BlogCard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setNews(response.data);
    });
  }, []);

  return (
    <>
      {/* slice get only the 3 latest news */}
      {news.slice(Math.max(news.length - 3, 0)).map((newsItem) => {
        return (
          <BlogCardStyled key={newsItem.id}>
            <img src={newsItem.image} alt={newsItem.title} />
            <h4>{newsItem.category}</h4>
            <h3>{newsItem.title}</h3>
            <p>{newsItem.description}</p>
          </BlogCardStyled>
        );
      })}
    </>
  );
};
