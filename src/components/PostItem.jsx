import React from 'react'
import MainButton from './UI/button/MainButton'
import { useNavigate } from 'react-router-dom'

export default function PostItem({ post, removeItem }) {
    const navigate = useNavigate();

    return (
        <div className="post-item">
            <h5 className="post-item__title">
                {post.id}. {post.title}
            </h5>
            <p className="post-item__text">
                {post.body}
            </p>
            <div className="post-item__btns">
                <MainButton 
                    type="button"
                    onClick={() => navigate(`/post/${post.id}`)}
                >
                    More
                </MainButton>
                <MainButton 
                    type="button" 
                    theme="red"
                    onClick={() => removeItem(post.id)}
                >
                    Delete
                </MainButton>
            </div>
        </div>
    )
}
