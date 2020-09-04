import React from 'react';

export const Steps: React.FC = () => {
  return (
    <div className="steps">
      <span className="steps__item steps__item--non-active">1</span>
      <span className="steps__line" />
      <span className="steps__item steps__item--non-active">2</span>
      <span className="steps__line" />
      <span className="steps__item steps__item--active">3</span>
    </div>
  );
};
