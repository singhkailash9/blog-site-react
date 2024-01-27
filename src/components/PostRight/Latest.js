import React from 'react';
import {latestTitles} from './LatestTrendingData';
function Latest() {
    return (
        <div className="latest">
            <h3>Latest Blog Posts</h3>
            <ul>
                {latestTitles.map((title, index) => (
                    <li key={index}>{title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Latest;
