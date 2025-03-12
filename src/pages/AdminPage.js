import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './AdminPage.css';

function AdminPage() {
  return (
    <div className="admin-page">
      <Authenticator>
        {({ signOut, user }) => (
          <div className="admin-panel">
            <h1>Admin Panel</h1>
            <p>Welcome, {user.username}</p>
            
            <div className="admin-section">
              <h2>Project Management</h2>
              <p>Project management interface will be implemented here</p>
            </div>
            
            <div className="admin-section">
              <h2>Thread Management</h2>
              <p>Thread management interface will be implemented here</p>
            </div>
            
            <button onClick={signOut} className="sign-out-btn">Sign Out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default AdminPage;
