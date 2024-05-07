import React from 'react'
import FeedItem from "../FeedItem/FeedItem";
import './DataFeed.css'

const DataFeed = (props) => {
    return (
        <ul className='data_feed'>
            {props.users.map(user => (
                <FeedItem user={user}/>))
            }
        </ul>
    )
}
export default DataFeed
