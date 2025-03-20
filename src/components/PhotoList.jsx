import React from 'react'

export default function PhotoList({ photos, loader }) {
    return (
        <div className="photo-list">
            {
                loader && [...Array(16)].map((_, index) => (
                    <div className="photo-list__skeleton" key={index}></div>
                ))
            }
            
            {
                photos.length > 0 && !loader && photos.map((photo) => (
                    <div className="photo-list__item" key={photo.id}>
                        <img src={photo.download_url} alt={photo.author} />
                    </div>
                ))
            }
        </div>
    )
}
