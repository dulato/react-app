import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetcher } from '@/api/useFetcher';
import Loading from '@/components/UI/loading/Loading';
import PostDetails from '@/components/PostDetails';

export default function PostItem() {
    const { id } = useParams();
    const [data, setData] = useState({})
    const [comments, setComments] = useState([])

    const { response: postResponse, loader: postLoader, error: postError } = useFetcher(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const { response: commentsResponse, loader: commentsLoader, error: commentsError } = useFetcher(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    const title = postLoader ? 'Loading...' : Object.keys(data).length > 0 ? `Information about post #${id}` : 'No info!'

    useEffect(() => {
        if(postLoader || !postResponse) return;
        setData(postResponse.data);
    }, [postResponse, postLoader, postError]);


    useEffect(() => {
        if(commentsLoader || !commentsResponse) return;
        setComments(commentsResponse.data);
    }, [commentsResponse, commentsLoader, commentsError]);

    return (
        <div className="post">
            <div className="container">
                <div className="post__content">
                    <h2 className="title title__user">{title}</h2>
                    { (postLoader || commentsLoader) && <Loading /> }
                    { Object.keys(data).length > 0 && <PostDetails post={data} comments={comments} /> }
                </div>
            </div>
        </div>
    )
}
