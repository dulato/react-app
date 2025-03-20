import React from 'react'

export default function PostDetails({ post, comments }) {
    return (
        <div className="post-details">
            <h4 className="post-details__title">
                {post.id}. {post.title}
            </h4>
            <p className="post-details__text">
                {post.body}
            </p>
            <div className="post-details__line"></div>
            <h4 className="post-details__title">Comments</h4>

            <ul className="post-details__list">
                {
                    comments.length > 0 && comments.map((comment) => (
                        <li className="post-details__comment" key={comment.id}>
                            <h5 className="post-details__comment-email">
                                {comment.email}
                            </h5>
                            <p className="post-details__comment-body">
                                {comment.body}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
