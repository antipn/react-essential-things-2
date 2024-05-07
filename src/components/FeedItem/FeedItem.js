import React from 'react'
import './FeedItem.css'

const FeedItem = props => {
    return (
        <div className='feed_item'>
            <h3>{props.user.name}</h3>
            <h3> ({props.user.age} years old)</h3>
        </div>

    )
}
export default FeedItem
