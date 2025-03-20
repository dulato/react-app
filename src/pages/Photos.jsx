import React, { useState, useEffect, useMemo } from 'react'
import { useFetcher } from '@/api/useFetcher';
import PhotoList from '@/components/PhotoList';
import Search from '@/components/Search';

export default function Photos() {
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState('');
    const { response, loader, error } = useFetcher('https://picsum.photos/v2/list?limit=100');

    useEffect(() => {
        if (loader || !response) return;
        const shuffledPhotos = [...response.data].sort(() => Math.random() - 0.5);
        setPhotos(shuffledPhotos);
    }, [response, loader, error]);

    const foundPhotos = useMemo(() => {
        return photos.filter((photo) => photo.author.toLowerCase().includes(query.toLowerCase().trim()));
    }, [query, photos])

    return (
        <div className="photos">
            <div className="container">
                <div className="photos__content">
                    <Search query={query} setQuery={setQuery} />
                    <h2 className="title">{loader ? 'Loading...' : foundPhotos.length > 0 ? `Found: ${foundPhotos.length} photos` : 'No photo!'}</h2>
                    <PhotoList photos={foundPhotos} loader={loader} />
                </div>
            </div>
        </div>
    )
}
