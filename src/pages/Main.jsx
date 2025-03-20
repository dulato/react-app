import React, { useEffect, useRef, useState } from 'react'
import PostList from '@/components/PostList'
import { useFetcher } from '@/api/useFetcher';
import Loading from '@/components/UI/loading/Loading';
import { getTotalPage } from '@/utils/pagination';

export default function Main() {
    const limit = 12;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(1);
    const observerRef = useRef(null);
    const lastElementRef = useRef(null);

    const { response, loader } = useFetcher(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)

    const title = loader ? 'Loading...' : posts.length > 0 ? `There are ${posts.length} posts` : 'No data!'

    useEffect(() => {
        if (!response) return;

        const totalCount = Number(response.headers['x-total-count']);
        setPosts(prev => [...prev, ...response.data]);
        setTotalPage(getTotalPage(totalCount, limit));
        setIsFetching(false);

    }, [response]);

    useEffect(() => {
        if(loader || isFetching) return;
        if(observerRef.current) observerRef.current.disconnect();

        let callback = function(entries) {
            if(entries[0].isIntersecting) {
                if (page < totalPage) {
                    setIsFetching(true);
                    setPage((prev) => prev + 1);
                }
            }
        };

        observerRef.current = new IntersectionObserver(callback);
        observerRef.current.observe(lastElementRef.current);

        return () => observerRef.current.disconnect();
    }, [loader, page, totalPage, isFetching])
    
    function removeItem(id) {
        setLoading(true);
        setTimeout(() => {           
            const index = posts.findIndex((item) => item.id === id);
            if(index === -1) {
                return;
            }
            const changedArr = [...posts]
            changedArr.splice(index, 1)
            setPosts(changedArr);
            setLoading(false);
        }, 300);
    }

    return (
        <div className="main">
            <div className="container">
                <div className="main__content">
                    { loading && (<Loading />) }
                    <h2 className="title">{title}</h2>
                    <PostList posts={posts} loader={loader} isFetching={isFetching} removeItem={removeItem} />
                    <div ref={lastElementRef} className="main__bottom"></div>
                </div>
            </div>
        </div>
    )
}
