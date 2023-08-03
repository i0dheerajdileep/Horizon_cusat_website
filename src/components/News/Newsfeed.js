import React from 'react';
// import './Newsfeed.css';

const Newsfeed = () => {
  // Sample news data
  const newsData = [
    {
      id: 1,
      title: 'Breaking News: A New Planet Discovered!',
      author: 'John Doe',
      content: 'Astronomers have discovered a new habitable exoplanet in a nearby star system...',
      date: '2023-07-22',
      imageUrl: 'https://picsum.photos/200/300?random=1',
    },
    {
      id: 2,
      title: 'Space Exploration Milestone: Humans Land on Mars!',
      author: 'Jane Smith',
      content: 'After years of preparation, the first human crew has successfully landed on Mars...',
      date: '2023-07-20',
      imageUrl: 'https://picsum.photos/200/300?random=1',
    },
    // Add more news items as needed...
  ];

  return (
    <div className="newsfeed-container">
      <h1 className="newsfeed-heading">News Feed</h1>
      {newsData.map((item) => (
        <div key={item.id} className="news-item">
          <h2 className="news-title">{item.title}</h2>
          <p className="news-author">Author: {item.author}</p>
          <p className="news-content">{item.content}</p>
          {item.imageUrl && (
            <img className="news-image" src={item.imageUrl} alt={`News ${item.id}`} />
          )}
          <span className="news-date">{item.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Newsfeed;
