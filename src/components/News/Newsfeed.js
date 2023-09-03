import React, { useState, useEffect } from 'react';

const Newsfeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const initialNewsToShow = 2; // Initial number of news items to show without blur
  const apiUrl = 'https://eapzt4pdeypqt63lsjxtahfhcm0awrvd.lambda-url.us-east-1.on.aws/get_news';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setNewsData(jsonData);
      })
      .catch((error) => {
        console.error('There was a problem fetching the data:', error);
      });
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="newsfeed-container" id='news'>
      <h1 className="newsfeed-heading">News Feed</h1>
      {newsData
        .slice(0, showMore ? newsData.length : initialNewsToShow)
        .map((item, index) => (
          <div key={item.id} className={`news-item ${index >= initialNewsToShow && !showMore ? 'blur' : ''}`}>
            <img
              className="news-image"
              src={item.attachments && item.attachments.length > 0 ? item.attachments[0] : ''}
              // alt={`Attachment ${item.id}`}
            />
            <div className="news-content-container">
              <h2 className="news-title">{item.title}</h2>
              <p className="news-content">{item.content}</p>
              <p className="news-author">Author: {item.author}</p>
            </div>
          </div>
        ))}
      {!showMore && (
        <button
          onClick={toggleShowMore}
          className="see-more-btn "
        >
          See More
        </button>
      )}
    </div>
  );
};

export default Newsfeed;
