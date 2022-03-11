import React, { useState, useEffect } from 'react';
import './Home.scss';
import NewsCard from './NewsCard';
import NewsCard_new from './NewsCard_new';

let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`;

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [newsJSON, setNewsJSON] = useState([]);

  const fetchNews = async () => {
    setLoading(true);

    try {
      const req = await fetch(url);
      const res = await req.json();
      setNewsJSON(res.articles);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  console.log(newsJSON);

  if (loading) {
    return <div className='home'>loading</div>;
  }

  return (
    <div className='home'>
      <div className='container'>
        {newsJSON.map((news, id) => {
          const { source, title, description, url, urlToImage, published, content } = news;
          return (
            <NewsCard
              key={id}
              source={source}
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
              published={published}
              content={content}
            />
          );
        })}
      </div>
    </div>
  );
}
