import React from 'react'
import classes from './VideoGridShimmer.module.css'
const VideoGridShimmer = () => {
  return (
    <div className={classes['shimmer-grid']}>
    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div key={item} className={classes['shimmer-grid-item']}>
            {/* Thumbnail Skeleton */}
            <div className={`${classes['shimmer-box']} ${classes['shimmer-thumbnail']}`}></div>
            
            {/* Creator Section */}
            <div className={classes['shimmer-creator']}>
                <div className={`${classes['shimmer-box']} ${classes['shimmer-creator-avatar']}`}></div>
                <div className={classes['shimmer-creator-info']}>
                    <div className={`${classes['shimmer-box']} ${classes['shimmer-title']}`}></div>
                    <div className={`${classes['shimmer-box']} ${classes['shimmer-views']}`}></div>
                </div>
            </div>
        </div>
    ))}
</div>

  )
}

export default VideoGridShimmer