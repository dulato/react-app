import UserList from '@/components/UserList';
import { useSelector } from 'react-redux';
import { useGetUsers } from '../api/getUsers';

export default function Users() {
    const { users, loading, error } = useSelector((state) => state.user);
    useGetUsers('https://jsonplaceholder.typicode.com/users')

    const title = loading ? 'Loading...' : users.length > 0 ? `Found: ${users.length} users` : error

    return (
        <div className="users">
            <div className="container">
                <div className="users__content">
                    <h2 className="title title__user">{title}</h2>
                    <UserList />
                </div>
            </div>
        </div>
    )
}
