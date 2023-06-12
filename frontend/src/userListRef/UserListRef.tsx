import React, { useRef } from 'react';

import {IUserList} from '../interfaces/user-list'
import './UserListRef.css';

function UserListRef({ users }: any) {
    const userListRef = useRef(null);

    const handleClick = () => {
        console.log(userListRef.current);
    };

    return (
        <div ref={userListRef} className="user-list" onClick={handleClick}>
            <h2>User List Ref</h2>
            <ul>
                {users.map((user: IUserList, index: number) => (
                    <li key={index}>
                        <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserListRef;
