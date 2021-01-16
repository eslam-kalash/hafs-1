import React from 'react';

const ArticlesCard = props => {
    const { article } = props;

    return (
        <div className="articles__card">
            <h3 className="articles__card--title">
                {article.title}
            </h3>
            <span>By </span><a className="articles__card--author" href="">{article.author}</a>
            <div className="articles__card--category">
                <span>News</span>
            </div>
            <p>
                {article.description}
            </p>
            <a href="" className="btn--view">Read More</a>
        </div>
    )
}

export default ArticlesCard;