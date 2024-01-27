import React from 'react';
import {trendingTopics} from './LatestTrendingData';

function Trending() {
    return (
        <div className="trending">
            <h3>Trending Topics</h3>
            <ul>
                {trendingTopics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
        </div>
    );
}

export default Trending;
