import React from 'react';

const ArticlesCard = () => (
    <div className="articles__card">
        <h3 className="articles__card--title">
            What do we offer?
        </h3>
        <span>By </span><a className="articles__card--author" href="">author</a><span> - 1 Month ago</span>
        <div className="articles__card--category">
            <span>News</span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto vero reprehenderit laboriosam eum tempore quod fuga consectetur dolorem.
        </p>
        <a href="" className="btn--view">Read More</a>
    </div>
)

export default ArticlesCard;