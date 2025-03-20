import React from 'react'
import loaderStyle from './Loading.module.css'

export default function Loading() {
    return (
        <div className={loaderStyle.loading}>
            <div className={loaderStyle.loadingCircle}></div>
        </div>
    )
}
