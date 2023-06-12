import React from 'react';

import './UserList.css';
import List from './List';
import { IUserList } from '../interfaces/user-list';

function UserList() {
  const users: IUserList[]= [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' }
  ];

  return (
      <div className="user-list-container">
          <div className="user-list">
              <List users={users} />
          </div>
      </div>
  );
}

export default UserList;
