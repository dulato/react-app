import Main from "@/pages/Main";
import PostItem from "@/pages/Post";
import Users from '@/pages/Users';
import Photos from "@/pages/Photos";

export const routes = [
    { id: 1, path: '/', component: Main, exact: true },
    { id: 2, path: '/post/:id', component: PostItem, exact: true },
    { id: 3, path: '/users', component: Users, exact: true },
    { id: 4, path: '/photos', component: Photos, exact: true },
]