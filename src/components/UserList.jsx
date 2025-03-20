import React from 'react'
import { usersTitles } from '@/config/users'
import Loading from '@/components/UI/loading/Loading';
import { useSelector } from 'react-redux';

export default function UserList() {
    const { users, loading } = useSelector((state) => state.user);

    if(loading) {
        return ( <Loading /> )
    }
    
    return (
        users.length > 0 && !loading && <div className="user-list">
            {
                <div className='user-list__titles'>
                    {
                        usersTitles.map((usersTitle) => (
                            <li className="user-list__title-li" key={usersTitle.id}>
                                {usersTitle.name}
                            </li>
                        ))
                    }
                </div>
            }

            {
                users.map((user) => (
                    <ul className="user-list__item" key={user.id}>
                        <li className="user-list__li">{user.id}</li>
                        <li className="user-list__li">{user.name}</li>
                        <li className="user-list__li">@{user.username}</li>
                        <li className="user-list__li">{ user.email}</li>
                        <li className="user-list__li">{ user.company.name}</li>
                    </ul>
                ))
            }
        </div>
    )
}
