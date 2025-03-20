import React from 'react'
import skeletonStyle from './Skeleton.module.css';

export default function Skeleton() {
    return (
        <div className={skeletonStyle.skeleton}>
        <div className={skeletonStyle.skeleton__title}></div>
        <div className={skeletonStyle.skeleton__body}>
            <div className={skeletonStyle.skeleton__span}></div>
            <div className={skeletonStyle.skeleton__span}></div>
            <div className={skeletonStyle.skeleton__span}></div>
            <div className={skeletonStyle.skeleton__span}></div>
        </div>
        <div className={skeletonStyle.skeleton__bottom}></div>
    </div>
    )
}
