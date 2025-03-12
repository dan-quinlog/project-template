import React from 'react';
import ThreadItem from './ThreadItem';
import './ThreadList.css';

function ThreadList({ threads, sortDirection }) {
  // Sort threads based on sortDirection
  const sortedThreads = [...threads].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return sortDirection === 'ASC' ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="thread-list">
      {sortedThreads.length === 0 ? (
        <p>No threads yet for this project.</p>
      ) : (
        sortedThreads.map(thread => (
          <ThreadItem key={thread.id} thread={thread} />
        ))
      )}
    </div>
  );
}

export default ThreadList;
