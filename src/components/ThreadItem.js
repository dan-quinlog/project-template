import React from 'react';
import './ThreadItem.css';

function ThreadItem({ thread }) {
  const { headline, content, createdAt } = thread;
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <div className="thread-item">
      <div className="thread-header">
        <h3>{headline}</h3>
        <span className="thread-date">{formattedDate}</span>
      </div>
      <div className="thread-content">{content}</div>
    </div>
  );
}

export default ThreadItem;
