import React from 'react';

import {IUserList} from '../interfaces/user-list';

function List({users}: any ) {
    return (
        <div>
            <h2>User List</h2>
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

export default List;
