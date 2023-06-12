import React, { useRef } from 'react';

import './App.css';
import UserListReF from './userListRef/UserListRef';
import UserList from "./userList/UserList";

function App() {
    const users = [
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' },
        { name: 'Bob Johnson', email: 'bob@example.com' }
    ];

    const appRef = useRef(null);

    const handleClick = () => {
        console.log(appRef.current);
    };

    return (
        <div ref={appRef} className="app-container" onClick={handleClick}>
            <h1>App</h1>
            <UserListReF users={users} />
        </div>
    );
}

export default App;
