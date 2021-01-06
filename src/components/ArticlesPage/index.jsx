import React from 'react';
import ArticlesContainer from './ArticlesContainer';

const ArticlesPage = () => {
    return (
        <div className="articles__wrapper">
            <img src="img/upper.png" alt="articles page" />
            <ArticlesContainer />
        </div>  
    );
}

export default ArticlesPage;