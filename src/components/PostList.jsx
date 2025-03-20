import React from 'react'
import PostItem from './PostItem'
import Skeleton from '@/components/UI/skeleton/Skeleton';

export default function PostList({ posts, loader, isFetching, removeItem }) {
    return (
        <div className="post-list">
            {
                posts.length > 0 && posts.map((post) => (
                    <PostItem 
                        key={post.id} 
                        post={post} 
                        removeItem={removeItem}
                    />
                ))
            }

            {
                (loader || isFetching) && [...Array(6)].map((_, index) => (
                    <Skeleton key={index} />
                ))
            }
        </div>
    )
}
