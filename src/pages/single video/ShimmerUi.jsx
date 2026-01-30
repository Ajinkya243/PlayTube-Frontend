import classes from './shimmer.module.css'

const ShimmerUi = () => {
    return (
        <div className={classes['shimmer-container']}>
    <div className={`${classes['shimmer-box']} ${classes['shimmer-video']}`}></div>
    <div className={`${classes['shimmer-box']} ${classes['shimmer-title']}`}></div>
    <div className={classes['shimmer-details']}>
        <div className={classes['shimmer-creator']}>
            <div className={`${classes['shimmer-box']} ${classes['shimmer-avatar']}`}></div>
            <div className={`${classes['shimmer-creator-info']}`}>
                <div className={`${classes['shimmer-box']} ${classes['shimmer-creator-name']}`}></div>
                <div className={`${classes['shimmer-box']} ${classes['shimmer-subscribers']}`}></div>
            </div>
        </div>
        <div className={`${classes['shimmer-buttons']}`}>
            <div className={`${classes['shimmer-box']} ${classes['shimmer-button']}`}></div>
            <div className={`${classes['shimmer-box']} ${classes['shimmer-button']}`}></div>
        </div>
    </div>
    <div className={classes['shimmer-description']}>
        <div className={`${classes['shimmer-box']} ${classes['shimmer-views']}`}></div>
        <div className={`${classes['shimmer-box']} ${classes['shimmer-desc-line']}`}></div>
        <div className={`${classes['shimmer-box']} ${classes['shimmer-desc-line']} ${classes['short']}`}></div>
    </div>
    <div className={classes['shimmer-comments']}>
        <div className={`${classes['shimmer-box']} ${classes['shimmer-comment-title']}`}></div>
        <div className={`${classes['shimmer-box']} ${classes['shimmer-comment-input']}`}></div>
        {[1, 2, 3].map((item) => (
            <div key={item} className={classes['shimmer-comment-item']}>
                <div className={`${classes['shimmer-box']} ${classes['shimmer-comment-avatar']}`}></div>
                <div className={classes['shimmer-comment-content']}>
                    <div className={`${classes['shimmer-box']} ${classes['shimmer-comment-username']}`}></div>
                    <div className={`${classes['shimmer-box']} ${classes['shimmer-comment-text']}`}></div>
                </div>
            </div>
        ))}
    </div>
</div>

    );
};

export default ShimmerUi;
